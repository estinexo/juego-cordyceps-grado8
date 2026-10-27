# Cordyceps militaris · Actividades de Biología (Grado 8°)

Versión modular y offline de la actividad sobre el ciclo de vida, las rutas reproductivas, la disección funcional y el glosario de *Cordyceps militaris* (familia Cordycipitaceae). El modelo parasita larvas y pupas de lepidópteros; no es el hongo que manipula la conducta de las hormigas.

## Versión en línea

Página publicada con GitHub Pages:

**https://estinexo.github.io/juego-cordyceps-grado8/**

## Cómo abrir

1. Descomprime la carpeta completa (si recibiste un `.zip`).
2. Abre `index.html` con un navegador actualizado (Chrome, Edge o Firefox).
3. No necesitas internet: todos los estilos, scripts e imágenes están dentro de la carpeta.

Si el navegador restringe los archivos locales, puedes abrir una terminal dentro de la carpeta y ejecutar:

```bash
python3 -m http.server 8000
```

Luego visita `http://localhost:8000`.

Si ves una versión anterior del juego, recarga la página con `Ctrl + F5` (o `Cmd + Shift + R` en Mac). Al modificar los estilos o los scripts, cambia el valor de `?v=` en `index.html` para que los navegadores descarguen la versión nueva.

## Contenido

| Archivo | Función |
|---|---|
| `index.html` | Estructura de la página: datos del estudiante, actividades y glosario. |
| `css/styles.css` | Diseño responsive, modo oscuro, impresión y accesibilidad visual. |
| `js/data.js` | 12 preguntas, 6 escenarios de rutas reproductivas, disección guiada, 33 términos del glosario, mitos y fuentes. |
| `js/app.js` | Lógica de respuestas, justificaciones, ruta reproductiva, puntajes, informe y navegación. |
| `js/entrega.js` | Envío opcional del informe a una hoja de cálculo (Google Sheets) y cola de reintento sin conexión. |
| `js/canvas.js` | Animación de las cinco etapas del ciclo. |
| `js/audio.js` | Sonidos de retroalimentación generados con Web Audio. |
| `apps-script/Codigo.gs` | Código para la hoja de cálculo que recibe los informes (opcional). |
| `assets/cordyceps_militaris.jpg` | Fotografía de *Cordyceps militaris* sobre una pupa parasitada (CC BY 3.0). |

## Actividades

### Actividad 1 · Ciclo y genética
- 12 preguntas con final definido: 11 de selección múltiple y 1 de argumentación abierta.
- Cada pregunta de selección múltiple exige una justificación escrita antes de comprobar la respuesta.
- Retroalimentación inmediata, puntaje en vivo, barra de progreso y contador de justificaciones.
- Al responder la pregunta 12 se cierra la actividad con un resultado final, revisión de respuestas e informe descargable.
- Las opciones correctas se distribuyen entre A, B, C y D para evitar que casi todas estén en A.
- El contenido diferencia a *C. militaris* (pupas de lepidópteros) del caso de *Ophiocordyceps unilateralis* (hormigas), que pertenece a otra familia.

### Actividad 2 · Rutas reproductivas
- Seis escenarios ecológicos para analizar dos rutas: conidios por mitosis y ascosporas por meiosis.
- Las opciones no muestran las etiquetas “sexual” o “asexual”: el estudiante debe inferir la ruta a partir de los procesos y las estructuras.
- Cada elección exige una justificación con conceptos científicos y recibe retroalimentación descriptiva.
- No se califica una ruta como la “mejor”: ambas forman parte del ciclo y dependen de las condiciones.
- El panel lateral muestra el conteo en vivo y el historial de rutas elegidas.

### Actividad 3 · Disección funcional
- Fotografía real con cuatro estructuras marcadas: estroma, peritecios, micelio y pupa hospedera.
- Los marcadores coinciden con las estructuras visibles en la fotografía.
- Los textos descriptivos no revelan la función ni la fase antes de responder.
- Cada estructura exige dos elecciones: función y relación con el ciclo.
- Retroalimentación específica ante errores y cierre al completar las cuatro estructuras.

### Actividad 4 · Glosario y fuentes
- 33 términos con buscador y filtros por categoría, incluida la familia Cordycipitaceae.
- Marco científico, comparación entre mitos y realidad, y siete fuentes de consulta.

## Datos e informe

Al comenzar, el estudiante registra:

- Nombre completo.
- Curso.

Estos datos se guardan en el `localStorage` del navegador y aparecen en el informe `.txt`, junto con las respuestas, las justificaciones, la ruta registrada, el puntaje y el tiempo de sesión. El informe se descarga desde los botones **Informe** o **Descargar informe**.

El botón **Reiniciar** borra las respuestas de las actividades, pero conserva el nombre y el curso.

### Registro de informes en una hoja de cálculo (opcional)

El juego puede enviar una copia de cada informe a una hoja de Google Sheets, que actúa como base de datos del curso. Viene **desactivado**: mientras la constante `ENDPOINT` de `js/entrega.js` esté vacía, la página funciona sin internet y no envía nada.

Para activarlo sigue **[GUIA-BASE-DE-DATOS.md](GUIA-BASE-DE-DATOS.md)**. Cuando está configurado:

- Cada descarga agrega una fila con nombre, curso, puntaje, ruta reproductiva, respuestas en JSON y el informe completo.
- Si el estudiante vuelve a descargar el informe, **su fila se actualiza** con la versión más reciente en lugar de duplicarse (una fila por estudiante y sesión).
- Si el estudiante no tiene conexión, el registro queda en una cola local y se reenvía solo al reconectar o al volver a abrir la página. El `.txt` se descarga igual.
- El servidor identifica al estudiante por sesión: si vuelve a descargar, actualiza su fila en vez de repetirla. Un reintento tras un fallo de red tampoco duplica.

## Privacidad y uso

- No hay cuentas, publicidad ni analítica.
- Sin configurar el registro, no se envían datos a ningún servidor.
- Si el docente activa el registro, los informes (con nombre y curso) se envían a la hoja de cálculo del curso. Al ser datos de menores, conviene informar a las familias y usar solo el nombre o un código según las normas del colegio.
- La fotografía es de Wikimedia Commons y se usa con fines educativos bajo licencia CC BY 3.0.

## Créditos

Actividad educativa de Biología para grado 8°. El modelo es *Cordyceps militaris*, un hongo ascomiceto de la familia Cordycipitaceae que parasita pupas de lepidópteros. El juego aclara de forma explícita que la manipulación conductual de hormigas corresponde a *Ophiocordyceps unilateralis* (Ophiocordycipitaceae), no a este modelo.
