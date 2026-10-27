/* =========================================================================
   ENTREGA · Registro de informes en Google Sheets
   -------------------------------------------------------------------------
   Cada vez que el estudiante descarga su informe, este módulo envía una
   copia a una hoja de cálculo (ver apps-script/Codigo.gs y
   GUIA-BASE-DE-DATOS.md).

   Si no hay conexión, el registro queda en una cola dentro del navegador
   y se reintenta al volver la red o al abrir de nuevo la página. El archivo
   .txt siempre se descarga: la entrega en línea nunca bloquea la actividad.
   ========================================================================= */
(function () {
  'use strict';

  /* -----------------------------------------------------------------------
     1. CONFIGURACIÓN
     Pega aquí la URL de la aplicación web de Apps Script. Debe terminar en
     /exec. Mientras esté vacía, el juego funciona igual y el informe solo
     se descarga en el computador.
     ----------------------------------------------------------------------- */
  var ENDPOINT = '';

  var QUEUE_KEY = 'cordyceps_grado8_cola_v1';
  var TIMEOUT_MS = 12000;
  var MAX_COLA = 25;
  var MAX_TEXTO = 48000;

  /* ------------------------------- Utilidades ------------------------------ */
  function configurado() {
    /* Se acepta cualquier URL http(s) para poder probar con un servidor local
       o con un proxy propio; en producción será .../macros/s/.../exec. */
    return /^https?:\/\/\S+$/.test(ENDPOINT);
  }

  function nuevoId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return window.crypto.randomUUID();
    }
    return 'e' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
  }

  function recortar(texto, limite) {
    texto = String(texto == null ? '' : texto);
    return texto.length > limite ? texto.slice(0, limite) + '\n[texto recortado]' : texto;
  }

  function leerCola() {
    try {
      var crudo = window.localStorage.getItem(QUEUE_KEY);
      var lista = crudo ? JSON.parse(crudo) : [];
      return Array.isArray(lista) ? lista : [];
    } catch (error) {
      return [];
    }
  }

  function guardarCola(lista) {
    try {
      if (!lista.length) {
        window.localStorage.removeItem(QUEUE_KEY);
      } else {
        window.localStorage.setItem(QUEUE_KEY, JSON.stringify(lista.slice(-MAX_COLA)));
      }
    } catch (error) {
      /* Si el navegador bloquea localStorage, la entrega se pierde pero el .txt queda. */
    }
  }

  function encolar(registro) {
    var lista = leerCola().filter(function (item) {
      return item.id !== registro.id;
    });
    lista.push(registro);
    guardarCola(lista);
    return lista.length;
  }

  /* ---------------------------------- Envío -------------------------------- */
  function conTiempoLimite(promesa) {
    return new Promise(function (resolve, reject) {
      var terminado = false;
      var timer = window.setTimeout(function () {
        if (terminado) return;
        terminado = true;
        reject(new Error('Tiempo de espera agotado'));
      }, TIMEOUT_MS);

      promesa.then(function (valor) {
        if (terminado) return;
        terminado = true;
        window.clearTimeout(timer);
        resolve(valor);
      }, function (error) {
        if (terminado) return;
        terminado = true;
        window.clearTimeout(timer);
        reject(error);
      });
    });
  }

  function publicar(registro, opciones) {
    return conTiempoLimite(window.fetch(ENDPOINT, {
      method: 'POST',
      /* text/plain evita la petición CORS de verificación (preflight). */
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(registro),
      mode: opciones && opciones.opaque ? 'no-cors' : 'cors',
      cache: 'no-store',
      redirect: 'follow'
    }));
  }

  /* Un registro se considera entregado si el servidor confirma ok. Si la
     petición ni siquiera puede completarse (sin red o CORS), se reintenta en
     modo opaco, que envía el cuerpo aunque el navegador no lea la respuesta. */
  function enviar(registro) {
    return publicar(registro, { opaque: false })
      .then(function (respuesta) {
        if (!respuesta.ok) return false;
        return respuesta.text().then(function (texto) {
          try {
            var datos = JSON.parse(texto);
            return datos.ok !== false;
          } catch (error) {
            return true;
          }
        });
      })
      .catch(function () {
        return publicar(registro, { opaque: true }).then(function () {
          return true;
        }).catch(function () {
          return false;
        });
      });
  }

  /* -------------------------------- API pública ---------------------------- */
  function registrar(datos) {
    var registro = Object.assign({
      id: nuevoId(),
      enviado_en: new Date().toISOString(),
      navegador: navigator.userAgent
    }, datos || {});

    if (!registro.id) registro.id = nuevoId();

    registro.informe_txt = recortar(registro.informe_txt, MAX_TEXTO);
    registro.respuestas_json = recortar(registro.respuestas_json, MAX_TEXTO);

    if (!configurado()) {
      return Promise.resolve({ estado: 'sin_configurar', pendientes: leerCola().length });
    }

    return enviar(registro).then(function (ok) {
      if (ok) {
        return { estado: 'enviado', pendientes: leerCola().length };
      }
      return { estado: 'en_cola', pendientes: encolar(registro) };
    });
  }

  function procesarCola() {
    var lista = leerCola();
    if (!lista.length || !configurado()) {
      return Promise.resolve({ enviados: 0, pendientes: lista.length });
    }

    var enviados = 0;
    var pendientes = lista.slice();

    return pendientes.reduce(function (cadena, registro) {
      return cadena.then(function (seguir) {
        if (!seguir) return false;
        return enviar(registro).then(function (ok) {
          if (!ok) {
            /* Sin red o servidor caído: se conserva el resto de la cola. */
            return false;
          }
          enviados += 1;
          pendientes = pendientes.filter(function (item) {
            return item.id !== registro.id;
          });
          guardarCola(pendientes);
          return true;
        });
      });
    }, Promise.resolve(true)).then(function () {
      actualizarIndicador();
      return { enviados: enviados, pendientes: pendientes.length };
    });
  }

  /* ---------------------------------- Aviso -------------------------------- */
  var toastTimer = null;

  function avisar(mensaje, tipo) {
    var toast = document.getElementById('entregaToast');
    if (!toast) {
      if (window.console) console.info('[entrega] ' + mensaje);
      return;
    }
    toast.textContent = mensaje;
    toast.className = 'toast' + (tipo ? ' is-' + tipo : '');
    toast.hidden = false;
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.hidden = true;
    }, 7000);
  }

  function actualizarIndicador() {
    var pendientes = leerCola().length;
    var chip = document.getElementById('entregaState');
    if (!chip) return;
    if (!configurado()) {
      chip.hidden = true;
      return;
    }
    chip.hidden = pendientes === 0;
    chip.textContent = pendientes === 1
      ? '1 informe sin enviar'
      : pendientes + ' informes sin enviar';
  }

  /* --------------------------------- Arranque ------------------------------- */
  window.addEventListener('online', function () {
    procesarCola().then(function (resultado) {
      if (resultado.enviados > 0) {
        avisar('Conexión recuperada: ' + resultado.enviados +
          (resultado.enviados === 1 ? ' informe enviado.' : ' informes enviados.'), 'ok');
      }
    });
  });

  window.addEventListener('storage', function (event) {
    if (event.key === QUEUE_KEY) actualizarIndicador();
  });

  function iniciar() {
    actualizarIndicador();
    if (navigator.onLine) procesarCola();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }

  window.CordycepsEntrega = {
    registrar: registrar,
    procesarCola: procesarCola,
    avisar: avisar,
    configurado: configurado,
    pendientes: function () {
      return leerCola().length;
    }
  };
})();
