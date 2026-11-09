# Guía · Guardar los informes en una base de datos

El juego es un sitio estático (GitHub Pages), así que no puede escribir en una base de datos por sí solo. La solución incluida usa **Google Sheets + Apps Script**: una hoja de cálculo recibe cada informe y se comporta como la base de datos del curso.

Ventajas: es gratis, no requiere servidor, se ve desde el celular, se puede filtrar y exportar a CSV/Excel, y funciona con la cuenta del docente.

---

## 1. Crea la hoja de cálculo

1. Entra a <https://sheets.new> con la cuenta del colegio o personal.
2. Ponle un nombre, por ejemplo `Cordyceps 8° · Registro`.
3. No escribas nada más: el script crea la pestaña **Respuestas** y los encabezados solos.

## 2. Abre el editor de Apps Script

En la hoja: **Extensiones → Apps Script**.

Borra el contenido de `Código.gs` y pega el archivo [`apps-script/Codigo.gs`](apps-script/Codigo.gs) de este repositorio. Guarda con **Ctrl + S**.

## 3. Publica la aplicación web

1. Arriba a la derecha: **Implementar → Nueva implementación**.
2. Tipo: **Aplicación web**.
3. Configuración:
   - **Descripción**: `Registro de informes`.
   - **Ejecutar como**: *Yo*.
   - **Quién tiene acceso**: *Cualquier persona*.
     Es necesario para que el navegador del estudiante pueda enviar sin iniciar sesión.
4. **Implementar** → autoriza los permisos con tu cuenta (aparecerá un aviso de "Google no ha verificado esta aplicación"; es tu propio script: **Configuración avanzada → Ir a… → Permitir**).
5. Copia la **URL de la aplicación web**. Termina en `/exec`, por ejemplo:

   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

> La URL no es un secreto peligroso, pero tampoco la publiques: quien la tenga puede agregar filas. No permite leer ni borrar datos.

## 4. Pega la URL en el juego

Abre `js/entrega.js` y edita la primera constante:

```js
var ENDPOINT = 'https://script.google.com/macros/s/AKfycb.../exec';
```

Guarda, haz `commit` y `push`. Recuerda subir el número al final de cada `?v=` en `index.html` (por ejemplo `20261027-8` → `20261027-9`) para que los navegadores no usen la copia anterior.

## 5. Prueba

1. Abre la página publicada y escribe tu nombre.
2. Pulsa **📤 Enviar informe** (o el botón al final de cualquier actividad).
3. Debe aparecer el aviso *"✅ ¡Informe recibido y registrado correctamente en Google Sheets!"* y el botón indicará el envío exitoso. No se descargará ningún archivo en tu equipo.
4. Revisa la hoja: en la pestaña inferior **Respuestas**, la fila de datos aparece en segundos (recuerda desplazarte horizontalmente hasta la columna **N** para ver el texto completo del informe).

También puedes abrir la URL `/exec` en el navegador: debe responder

```json
{"ok":true,"mensaje":"Registro de informes activo. Los datos llegan por POST."}
```

---

## Qué se guarda

**Una fila por estudiante**, en la pestaña **Respuestas**, con estas columnas. Si el estudiante vuelve a enviar el informe, su fila se actualiza automáticamente con la versión más reciente (no se duplica):

| Columna | Nombre | Contenido |
|---|---|---|
| A | ID | Identificador de la sesión del estudiante; permite actualizar su fila sin duplicarla |
| B | Recibido | Fecha y hora del servidor |
| C, D | Nombre completo, Curso | Datos del estudiante ingresados al inicio |
| E, F | Puntaje, Porcentaje | Actividad 1 (preguntas de opción múltiple) |
| G | Justificaciones | Cuántas justificaciones argumentadas escribió |
| H | Ruta reproductiva | `sexual`, `asexual`, `mixta` o `sin definir` |
| I | Estructuras | Estructuras de la Actividad 3 completadas |
| J | Duración | Tiempo total de sesión |
| K, L | Conidios, Ascosporas | Conteo de la Actividad 2 |
| M | Respuestas (JSON) | Todas las respuestas y elecciones estructuradas |
| N | **Informe (.txt)** | **El texto completo del informe de laboratorio** (para lectura rápida o calificación) |
| O | Versión del juego | Versión que generó el registro |

> [!TIP]
> Para leer el informe completo de la **columna N**, selecciona la celda y amplíala o léela desde la barra de fórmulas de Google Sheets.

### Consultas útiles

En otra hoja puedes usar fórmulas normales de Sheets:

```
=COUNTIF(Respuestas!D:D; "8°B")              → informes del curso 8°B
=PROMEDIO(Respuestas!F:F)                     → porcentaje promedio
=CONTAR.SI(Respuestas!H:H; "sexual")          → cuántos eligieron ruta sexual
```

Para analizar el JSON: **Datos → Dividir texto en columnas** no funciona bien con JSON; si necesitas ese detalle, exporta a CSV y procésalo en Python/R, o pide una versión con una columna por pregunta.

Exportar: **Archivo → Descargar → CSV** (o Excel).

---

## Cómo se comporta sin internet

- El informe se envía en línea directamente a la hoja de cálculo de Google sin saturar los dispositivos de los estudiantes con descargas de archivos.
- Si un estudiante no tiene red en ese momento, el informe queda guardado en la cola local del navegador (`localStorage`) y se envía automáticamente apenas el dispositivo recupere la conexión o cuando abra nuevamente la página.
- En la cabecera superior aparece un aviso con los informes pendientes por enviar.

## Privacidad

- Sin configurar `ENDPOINT`, la página no hace ninguna petición a internet.
- Al configurarlo, se envían nombre, curso y respuestas a la hoja del docente.
- Son datos de menores: informa a las familias y, si el colegio lo exige, cambia el campo "Nombre completo" por un código o usa solo nombre y apellido.
- La hoja es tuya: compártela solo con quien deba verla.

## Límites y costos

- Google Sheets: gratis hasta 10 millones de celdas por hoja; cada informe ocupa ~2 celdas grandes. Para cientos de estudiantes no hay problema.
- Apps Script: cuota diaria gratuita de tiempo de ejecución (muy por encima de lo que consume un curso).
- El texto del informe se recorta a 48 000 caracteres por celda (el límite de Sheets es 50 000).
- Si algún día necesitas más (varios colegios, consultas desde una app), migra a Supabase o Firebase; la estructura de `js/entrega.js` ya está separada para cambiar solo el envío.

## Problemas frecuentes

**No aparece ninguna fila.**
Revisa que la implementación diga *Cualquier persona* y que hayas pegado la URL que termina en `/exec` (no la de `/dev`). Abre la URL en el navegador para confirmar que responde `ok`.

**Sale "El registro en línea aún no está configurado".**
`ENDPOINT` sigue vacío o la página está en caché. Fuerza la recarga con `Ctrl + F5` y verifica el `?v=` de `js/entrega.js`.

**Un estudiante aparece una sola vez aunque descargó dos veces.**
Es lo esperado: la segunda descarga actualiza su fila. Si quieres conservar los intentos, avísame y cambio el registro para que agregue una fila por entrega.

**Sale el aviso naranja de "en espera".**
No hay conexión o el script está caído. El reintento es automático; también puedes abrir la página con red y esperar unos segundos.

**Cambié el código del script y sigue igual.**
Cada cambio requiere **Implementar → Gestionar implementaciones → Editar → Nueva versión**.

**Quiero probar sin publicar la URL.**
Deja `ENDPOINT` vacío: el juego funciona completo y solo descarga el `.txt`.
