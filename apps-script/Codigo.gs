/**
 * REGISTRO DE INFORMES · Cordyceps militaris · Grado 8°
 * ---------------------------------------------------------------------------
 * Este código va en el editor de Apps Script de una hoja de cálculo de
 * Google (Extensiones → Apps Script). Convierte la hoja en la "base de
 * datos" del juego: cada informe descargado agrega una fila.
 *
 * Pasos completos en GUIA-BASE-DE-DATOS.md.
 */

/** Nombre de la pestaña donde se guardan las entregas. */
var SHEET_NAME = 'Respuestas';

/** Encabezados de la hoja, en el mismo orden en que se escribe cada fila. */
var HEADERS = [
  'ID',
  'Recibido',
  'Nombre completo',
  'Curso',
  'Puntaje',
  'Porcentaje',
  'Justificaciones',
  'Ruta reproductiva',
  'Estructuras',
  'Duración',
  'Conidios',
  'Ascosporas',
  'Respuestas (JSON)',
  'Informe (.txt)',
  'Versión del juego'
];

/**
 * Recibe el informe enviado por el juego (POST con cuerpo JSON).
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);

    if (!e || !e.postData || !e.postData.contents) {
      return json_({ ok: false, error: 'Sin datos' });
    }

    var data = JSON.parse(e.postData.contents);
    var sheet = getSheet_();
    var fila = data.id ? filaDeId_(sheet, data.id) : 0;

    var informeTexto = String(data.informe_txt || '');
    if (informeTexto.charAt(0) === '=') {
      informeTexto = "'" + informeTexto;
    }

    var valores = [[
      data.id || '',
      new Date(),
      data.nombre || '',
      data.curso || '',
      data.puntaje || '',
      data.porcentaje == null ? '' : data.porcentaje,
      data.justificaciones || '',
      data.ruta || '',
      data.estructuras || '',
      data.duracion || '',
      data.conidios == null ? '' : data.conidios,
      data.ascosporas == null ? '' : data.ascosporas,
      data.respuestas_json || '',
      informeTexto,
      data.version || ''
    ]];

    if (fila > 0) {
      // El mismo estudiante volvió a descargar: se actualiza su fila con el
      // informe más reciente, sin duplicar el registro.
      sheet.getRange(fila, 1, 1, HEADERS.length).setValues(valores);
      return json_({ ok: true, actualizado: true });
    }

    sheet.getRange(sheet.getLastRow() + 1, 1, 1, HEADERS.length).setValues(valores);
    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  } finally {
    try {
      lock.releaseLock();
    } catch (ignorado) {
      // Sin bloqueo activo.
    }
  }
}

/**
 * Permite probar la dirección desde el navegador: debe responder ok.
 */
function doGet() {
  return json_({
    ok: true,
    mensaje: 'Registro de informes activo. Los datos llegan por POST.',
    hoja: SHEET_NAME
  });
}

/* ------------------------------- Auxiliares ------------------------------- */

function getSheet_() {
  var libro = SpreadsheetApp.getActive();
  var sheet = libro.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = libro.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#0f1d24')
      .setFontColor('#e7f0f3');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 260);
    sheet.setColumnWidth(2, 150);
    sheet.setColumnWidth(13, 320);
    sheet.setColumnWidth(14, 420);
  }

  return sheet;
}

/**
 * Devuelve el número de fila donde está ese ID, o 0 si no existe.
 * Se revisan las últimas 1000 entregas para no recorrer toda la hoja.
 */
function filaDeId_(sheet, id) {
  var ultima = sheet.getLastRow();
  if (ultima < 2) return 0;

  var desde = Math.max(2, ultima - 999);
  var ids = sheet.getRange(desde, 1, ultima - desde + 1, 1).getValues();
  for (var i = 0; i < ids.length; i += 1) {
    if (String(ids[i][0]) === String(id)) return desde + i;
  }
  return 0;
}

function json_(objeto) {
  return ContentService
    .createTextOutput(JSON.stringify(objeto))
    .setMimeType(ContentService.MimeType.JSON);
}
