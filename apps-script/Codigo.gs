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

/** Carpeta de Drive donde se guarda cada informe como documento. */
var DOCS_FOLDER = 'Informes Cordyceps';

/** Prefijo de las propiedades que recuerdan el documento de cada informe. */
var PROP_PREFIX = 'informe_doc_';

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
  'Informe',
  'Versión del juego'
];

/**
 * Recibe el informe enviado por el juego (POST con cuerpo JSON).
 *
 * El informe completo ya no se escribe como texto en la hoja: se guarda en un
 * documento de Drive y la columna N queda con un enlace "Ver informe". Así
 * cada fila mide una sola línea y el informe se abre solo cuando se necesita.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json_({ ok: false, error: 'Sin datos' });
    }

    var data = JSON.parse(e.postData.contents);

    // El documento se crea antes de tomar el bloqueo: Drive tarda más que una
    // escritura en la hoja y no debe serializar la entrega de todo el curso.
    var urlDoc = '';
    if (data.id && data.informe_txt) {
      try {
        urlDoc = guardarDoc_(data);
      } catch (errorDoc) {
        urlDoc = '';
      }
    }

    lock.waitLock(20000);

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
      urlDoc ? '' : informeTexto,
      data.version || ''
    ]];

    var destino = fila > 0 ? fila : sheet.getLastRow() + 1;
    sheet.getRange(destino, 1, 1, HEADERS.length).setValues(valores);

    // Columna N: enlace al documento (o texto completo si no se pudo crear).
    if (urlDoc) {
      try {
        sheet.getRange(destino, 14).setRichTextValue(
          SpreadsheetApp.newRichTextValue()
            .setText('📄 Ver informe')
            .setLinkUrl(urlDoc)
            .build()
        );
      } catch (errorEnlace) {
        sheet.getRange(destino, 14).setValue(urlDoc);
      }
    }

    // JSON e informe se recortan visualmente para que la fila no se estire.
    sheet.getRange(destino, 13, 1, 2)
      .setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);

    return json_({ ok: true, actualizado: fila > 0, doc: Boolean(urlDoc) });
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
 * El campo "version" sirve para confirmar que la implementación publicada
 * ya incluye el guardado de informes como documentos de Drive.
 */
function doGet() {
  return json_({
    ok: true,
    mensaje: 'Registro de informes activo. Los datos llegan por POST.',
    hoja: SHEET_NAME,
    version: '2026-11-10-docs',
    informe: 'documento'
  });
}

/* ------------------------------- Auxiliares ------------------------------- */

/**
 * Crea o actualiza el documento de Drive con el informe completo y devuelve
 * su URL. Si el mismo ID vuelve a enviarse, se reutiliza el documento.
 */
function guardarDoc_(data) {
  var props = PropertiesService.getScriptProperties();
  var clave = data.id ? PROP_PREFIX + data.id : '';
  var url = clave ? props.getProperty(clave) : '';
  var doc = null;

  if (url) {
    try {
      doc = DocumentApp.openByUrl(url);
    } catch (error) {
      doc = null;
    }
  }

  if (!doc) {
    doc = DocumentApp.create(tituloDoc_(data));
    try {
      DriveApp.getFileById(doc.getId()).moveTo(carpetaInformes_());
    } catch (errorCarpeta) {
      // Si no se puede mover, el documento queda en Mi unidad igualmente.
    }
    if (clave) props.setProperty(clave, doc.getUrl());
  }

  var cuerpo = doc.getBody();
  cuerpo.clear();
  cuerpo.setMarginTop(36).setMarginBottom(36).setMarginLeft(54).setMarginRight(54);
  cuerpo.setText(String(data.informe_txt || 'Sin informe'));
  cuerpo.setFontFamily('Courier New').setFontSize(10);

  var urlFinal = doc.getUrl();
  doc.saveAndClose();
  return urlFinal;
}

/** Devuelve la carpeta de Drive de los informes, o la crea la primera vez. */
function carpetaInformes_() {
  var carpetas = DriveApp.getFoldersByName(DOCS_FOLDER);
  return carpetas.hasNext() ? carpetas.next() : DriveApp.createFolder(DOCS_FOLDER);
}

/** Título legible del documento: nombre, fecha y hora. */
function tituloDoc_(data) {
  var nombre = String(data.nombre || 'Estudiante').replace(/\s+/g, ' ').slice(0, 60);
  return 'Informe · ' + nombre + ' · ' + Utilities.formatDate(
    new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm'
  );
}

/**
 * Prueba rápida desde el editor: crea un documento de ejemplo y muestra su
 * URL en el registro. No escribe ninguna fila en la hoja.
 */
function probarDocumento() {
  var url = guardarDoc_({
    id: 'PRUEBA-DOC-' + Date.now(),
    nombre: 'PRUEBA TÉCNICA',
    curso: 'VERIFICACIÓN',
    informe_txt: 'Documento de prueba.\n\nSi puedes leer esto, la creación de informes funciona.\n'
  });
  Logger.log(url);
  return url;
}

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
    sheet.setColumnWidth(14, 170);
  }

  // Migración de hojas creadas con la versión anterior: el encabezado decía
  // "Informe (.txt)", pero ahora la celda contiene un enlace al documento.
  var props = PropertiesService.getScriptProperties();
  if (!props.getProperty('encabezado_v2')) {
    if (sheet.getRange(1, 14).getValue() === 'Informe (.txt)') {
      sheet.getRange(1, 14).setValue('Informe');
    }
    props.setProperty('encabezado_v2', '1');
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
