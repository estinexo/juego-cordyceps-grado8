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

Guarda, haz `commit` y `push`. Recuerda subir el número de versión en `index.html` (`?v=20261027-7` → `?v=20261027-8`) para que los navegadores no usen la copia anterior.

## 5. Prueba

1. Abre la página publicada y escribe tu nombre.
2. Pulsa **📄 Informe**.
3. Debe aparecer el aviso *"Informe descargado y registrado para el docente"*.
4. Revisa la hoja: la primera fila de datos aparece en segundos (si no, recarga).

También puedes abrir la URL `/exec` en el navegador: debe responder

```json
{"ok":true,"mensaje":"Registro de informes activo. Los datos llegan por POST."}
```

---

## Qué se guarda

Una fila por informe, con estas columnas:

| Columna | Contenido |
|---|---|
| ID | Identificador único (evita duplicados si se reintenta) |
| Recibido | Fecha y hora del servidor |
| Nombre completo, Curso | Datos del estudiante |
| Puntaje, Porcentaje | Actividad 1 |
| Justificaciones | Cuántas justificaciones escribió |
| Ruta reproductiva | `sexual`, `asexual`, `mixta` o `sin definir` |
| Estructuras | Actividad 3 completadas |
| Duración | Tiempo de sesión |
| Conidios, Ascosporas | Conteo de la actividad 2 |
| Respuestas (JSON) | Todas las respuestas y elecciones, para procesarlas después |
| Informe (.txt) | El mismo texto que descarga el estudiante |
| Versión del juego | Para saber qué versión generó el dato |

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

- El `.txt` **siempre** se descarga; la entrega en línea es un extra.
- Si no hay red, el informe queda en una cola en el navegador (`localStorage`) y se reenvía solo cuando vuelve la conexión o cuando el estudiante abre otra vez la página.
- En la cabecera aparece un aviso naranja con los informes pendientes.
- Si el estudiante nunca vuelve a abrir la página en ese equipo, ese informe solo existe como `.txt`: pídele el archivo.

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

**Sale el aviso naranja de "en espera".**
No hay conexión o el script está caído. El reintento es automático; también puedes abrir la página con red y esperar unos segundos.

**Cambié el código del script y sigue igual.**
Cada cambio requiere **Implementar → Gestionar implementaciones → Editar → Nueva versión**.

**Quiero probar sin publicar la URL.**
Deja `ENDPOINT` vacío: el juego funciona completo y solo descarga el `.txt`.
