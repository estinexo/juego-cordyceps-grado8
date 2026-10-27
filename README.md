# Ophiocordyceps unilateralis · Actividades de Biología (Grado 8°)

Versión modular y offline de la actividad sobre el ciclo de vida, la reproducción, la manipulación conductual del hospedero y la disección funcional de *Ophiocordyceps unilateralis*.

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

## Contenido

| Archivo | Función |
|---|---|
| `index.html` | Estructura de la página: datos del estudiante, actividades y glosario. |
| `css/styles.css` | Diseño responsive, modo oscuro, impresión y accesibilidad visual. |
| `js/data.js` | 13 preguntas, 6 escenarios de decisión reproductiva, disección guiada, 30 términos del glosario, mitos y fuentes. |
| `js/app.js` | Lógica de respuestas, justificaciones, ruta reproductiva, puntajes, informe y navegación. |
| `js/canvas.js` | Animación de las cinco etapas del ciclo. |
| `js/audio.js` | Sonidos de retroalimentación generados con Web Audio. |
| `assets/hormiga_parasitada.jpg` | Fotografía real de una hormiga parasitada (CC BY 4.0). |

## Actividades

### Actividad 1 · Ciclo y genética
- 13 preguntas con final definido: 12 de selección múltiple y 1 de argumentación abierta.
- Cada pregunta de selección múltiple exige una justificación escrita antes de comprobar la respuesta.
- Retroalimentación inmediata, puntaje en vivo, barra de progreso y contador de justificaciones.
- Al responder la pregunta 13 se cierra la actividad con un resultado final, revisión de respuestas e informe descargable.

### Actividad 2 · Decisiones reproductivas
- Seis escenarios ecológicos para elegir entre reproducción sexual y asexual.
- Cada decisión exige una justificación con conceptos científicos y recibe retroalimentación.
- Las elecciones construyen una ruta reproductiva final: sexual, asexual o alternante (si hay empate).
- El panel lateral muestra el conteo en vivo y el historial de decisiones.
- El resultado también indica cuántas decisiones coincidieron con la estrategia recomendada para cada escenario; no es una nota, sino una pista de autoevaluación.

### Actividad 3 · Disección funcional
- Fotografía real con cuatro estructuras marcadas: estroma, peritecios, micelio y conidios.
- Cada estructura exige dos decisiones: función y fase del ciclo.
- Retroalimentación específica ante errores y cierre al completar las cuatro estructuras.

### Actividad 4 · Glosario y fuentes
- 30 términos con buscador y filtros por categoría.
- Marco científico, comparación entre mitos y realidad, y ocho fuentes de consulta.

## Datos e informe

Al comenzar, el estudiante registra:

- Nombre completo.
- Curso.

Estos datos se guardan únicamente en el `localStorage` del navegador y aparecen en el informe `.txt`, junto con las respuestas, las justificaciones, la ruta reproductiva, el puntaje y el tiempo de sesión. El informe se descarga desde los botones **Informe** o **Descargar informe**.

El botón **Reiniciar** borra las respuestas de las actividades, pero conserva el nombre y el curso.

## Privacidad y uso

- No hay cuentas, publicidad, analítica ni peticiones a internet.
- No se envían datos a ningún servidor.
- La fotografía es de Wikimedia Commons y se usa con fines educativos bajo licencia CC BY 4.0.

## Créditos

Actividad educativa de Biología para grado 8°. El fenómeno se aborda como **manipulación conductual del hospedero**, con lenguaje científico y sin reducir la explicación a metáforas.
