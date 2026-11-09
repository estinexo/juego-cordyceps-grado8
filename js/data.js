/* =========================================================================
   DATOS CIENTÍFICOS Y PEDAGÓGICOS
   Cordyceps militaris · Biología · Grado 8°
   Archivo sin dependencias externas. Se carga antes de app.js.
   ========================================================================= */
(function () {
  'use strict';

  const STAGES = [
    {
      id: 0,
      name: 'Espora',
      short: 'Espora (inicio del ciclo)',
      desc: 'Una ascospora haploide, protegida por una pared de quitina, cae sobre la cutícula de una pupa de lepidóptero o cerca de ella. Es el inicio y también el punto de retorno del ciclo.'
    },
    {
      id: 1,
      name: 'Hifa',
      short: 'Hifa (germinación)',
      desc: 'La espora germina y forma un tubo germinativo. La hifa se adhiere a la cutícula y la perfora con presión y enzimas.'
    },
    {
      id: 2,
      name: 'Micelio',
      short: 'Micelio (colonización)',
      desc: 'Las hifas haploides (n) crecen y forman una red de micelio dentro del cuerpo de la pupa. Absorbe nutrientes y coloniza los tejidos del hospedero.'
    },
    {
      id: 3,
      name: 'Estroma y peritecios',
      short: 'Estroma (fase sexual)',
      desc: 'El hongo forma estromas anaranjados que salen del cuerpo de la pupa. Dos cepas compatibles se fusionan (plasmogamia, n+n); sus núcleos se unen (cariogamia, 2n) dentro de los ascos y la meiosis produce ascosporas haploides (n).'
    },
    {
      id: 4,
      name: 'Ascosporas',
      short: 'Ascosporas (dispersión)',
      desc: 'Las ascosporas son expulsadas y el viento las transporta. Si caen cerca de una pupa adecuada, el ciclo comienza de nuevo.'
    }
  ];

  const KEY_PRINCIPLES = [
    'Los hongos son organismos eucariotas, heterótrofos, con pared celular de quitina. No son plantas ni bacterias.',
    'La mitosis produce copias genéticamente idénticas y sirve para crecer o colonizar rápido. La meiosis reduce los cromosomas y genera variabilidad.',
    'En la fase sexual, dos cepas compatibles (MAT1-1 y MAT1-2) se fusionan: plasmogamia (n+n) → cariogamia (2n) → meiosis → ascosporas haploides (n). El 2n solo existe en el cigoto dentro del asco.',
    'Cordyceps militaris pertenece a la familia Cordycipitaceae y parasita larvas y pupas de lepidópteros; no manipula la conducta de hormigas.',
    'La reproducción sexual no es siempre mejor y la asexual no es exclusiva de ambientes estables: ambas pueden ocurrir en condiciones distintas. La dispersión es un proceso aparte, depende de estructuras y mecanismos.',
    'El estroma eleva los peritecios y la forma del cuerpo fructífero se relaciona con la dispersión de las ascosporas.'
  ];

  /* =======================================================================
     ACTIVIDAD 1 · 8 PREGUNTAS CON FINAL DEFINIDO
     ======================================================================= */
  const ACTIVITY1 = [
    {
      id: 1,
      topic: 'Micología básica',
      stage: 0,
      question: '¿Qué tipo de organismo es Cordyceps militaris?',
      scenario: 'En una muestra de suelo encuentras un hongo naranja que crece sobre una pupa de lepidóptero. No tiene clorofila, absorbe nutrientes del hospedero y pertenece a la familia Cordycipitaceae.',
      options: [
        {
          id: 'A',
          text: 'Una planta sin clorofila que realiza fotosíntesis durante la noche.',
          correct: false,
          feedback: 'Incorrecto. Las plantas son autótrofas y fotosintetizan; este hongo no tiene clorofila ni realiza fotosíntesis.'
        },
        {
          id: 'B',
          text: 'Un hongo eucariota, heterótrofo, con pared celular de quitina.',
          correct: true,
          feedback: 'Correcto. Es un hongo ascomiceto: eucariota, heterótrofo, con pared de quitina y nutrición por absorción.'
        },
        {
          id: 'C',
          text: 'Una bacteria gigante que captura alimento por fagocitosis.',
          correct: false,
          feedback: 'Incorrecto. Las bacterias son procariotas. Los hongos son eucariotas y se alimentan por absorción, no por fagocitosis.'
        },
        {
          id: 'D',
          text: 'Un animal parásito que devora a la pupa desde dentro.',
          correct: false,
          feedback: 'Incorrecto. El hongo no es un animal: tiene pared de quitina, hifas y esporas, y se alimenta por absorción.'
        }
      ],
      explanation: 'Cordyceps militaris es un hongo ascomiceto de la familia Cordycipitaceae. Es eucariota, heterótrofo y tiene pared de quitina; secreta enzimas, digiere tejidos y absorbe nutrientes. No fotosintetiza ni es un animal.',
      keyIdea: 'Hongo = eucariota + heterótrofo + pared de quitina + nutrición por absorción.'
    },
    {
      id: 2,
      topic: 'Estructuras del hongo',
      stage: 2,
      question: '¿Cuál es la diferencia entre una hifa y un micelio?',
      scenario: 'Al microscopio se ve un tubo delgado que entra en el tejido de la pupa. En otra vista, ese tubo se ramifica y forma una red que ocupa el cuerpo del insecto.',
      options: [
        {
          id: 'A',
          text: 'La hifa es cada filamento tubular individual que invade el tejido, y el micelio es la red vegetativa completa formada por todas las hifas para absorber los nutrientes del insecto.',
          correct: true,
          feedback: 'Correcto. La hifa es la unidad filamentosa que invade el tejido; el micelio es la red completa de hifas que coloniza el cuerpo y absorbe nutrientes del hospedero.'
        },
        {
          id: 'B',
          text: 'La hifa es la estructura que absorbe nutrientes de los músculos, mientras que el micelio es la estructura externa que produce las esporas para infectar a otras pupas.',
          correct: false,
          feedback: 'Incorrecto. La hifa no es la estructura externa que produce esporas, y el micelio no es el cuerpo fructífero. El micelio es la red vegetativa de hifas.'
        },
        {
          id: 'C',
          text: 'El micelio es un filamento único similar a una raíz, y la hifa es el conjunto de esporas que viajan por la hemolinfa del insecto.',
          correct: false,
          feedback: 'Incorrecto. El micelio no es un filamento único ni una raíz; la hifa no es un conjunto de esporas. Esa analogía botánica no corresponde a los hongos.'
        },
        {
          id: 'D',
          text: 'La hifa es el tejido muscular del hospedero que está siendo destruido, y el micelio es el hongo unicelular que lo está devorando.',
          correct: false,
          feedback: 'Incorrecto. La hifa es tejido del hongo, no del hospedero; el micelio no es unicelular. Confunde el tejido del insecto con el del hongo.'
        }
      ],
      explanation: 'La hifa es cada tubo microscópico del hongo. Al crecer y ramificarse forma el micelio, una red que coloniza tejidos y absorbe nutrientes. En la infección, las hifas invaden los tejidos de la pupa, pero no son el tejido del hospedero.',
      keyIdea: 'Hifa = filamento individual. Micelio = red de hifas.'
    },
    {
      id: 3,
      topic: 'Mitosis y meiosis',
      stage: 3,
      question: '¿Cuál es la diferencia clave entre los conidios (mitosis) y las ascosporas (meiosis)?',
      scenario: 'Cordyceps militaris puede producir conidios en conidióforos a partir de hifas haploides (n) que se dividen por mitosis. También puede formar estromas con peritecios: allí, dos cepas compatibles se fusionan (plasmogamia, n+n), sus núcleos se unen (cariogamia, 2n) y luego ocurre la meiosis.',
      options: [
        {
          id: 'A',
          text: 'Los conidios se forman por mitosis a partir de hifas n y son clones (n → n); las ascosporas se forman por meiosis en un asco después de la cariogamia (2n → n) y tienen nuevas combinaciones.',
          correct: true,
          feedback: 'Correcto. Los conidios son clones haploides producidos por mitosis. Las ascosporas se forman por meiosis dentro del asco, después de que dos núcleos haploides se unen y forman un cigoto 2n.'
        },
        {
          id: 'B',
          text: 'La mitosis en el conidióforo reduce los cromosomas a la mitad, mientras que la meiosis en el peritecio mantiene los cromosomas intactos para formar el estroma.',
          correct: false,
          feedback: 'Incorrecto. La mitosis no reduce los cromosomas: mantiene el número. La meiosis es la que reduce de 2n a n y genera variabilidad.'
        },
        {
          id: 'C',
          text: 'Ambas divisiones producen clones genéticamente idénticos, pero la mitosis ocurre dentro de la pupa y la meiosis exclusivamente en el exterior para dispersarse.',
          correct: false,
          feedback: 'Incorrecto. La meiosis no produce clones idénticos; la recombinación mezcla información. Además, no se puede reducir todo a dónde ocurre.'
        },
        {
          id: 'D',
          text: 'La mitosis genera esporas diploides (2n) muy resistentes, mientras que la meiosis en el peritecio produce esporas haploides (n) débiles que solo sirven de alimento.',
          correct: false,
          feedback: 'Incorrecto. El micelio vegetativo es haploide y la mitosis produce células n, no 2n. La ploidía no determina por sí sola la resistencia.'
        }
      ],
      explanation: 'El micelio vegetativo es haploide (n). La mitosis de una célula n produce dos células n idénticas: así se forman los conidios. En la fase sexual, dos cepas compatibles (MAT1-1 y MAT1-2) se fusionan (plasmogamia, n+n); sus núcleos se unen (cariogamia, 2n) dentro del asco y la meiosis reduce 2n a n, generando ascosporas con combinaciones nuevas por recombinación.',
      keyIdea: 'Conidios: mitosis n → n (clones). Ascosporas: cariogamia 2n → meiosis → n (variabilidad).'
    },
    {
      id: 4,
      topic: 'Ciclo sexual',
      stage: 3,
      question: '¿Cuál es el orden correcto de la fase sexual de Cordyceps militaris?',
      scenario: 'Dos cepas compatibles del hongo se encuentran en la pupa. Ocurren varios pasos: fusión de hifas, fusión de núcleos, meiosis y formación de ascosporas.',
      options: [
        {
          id: 'A',
          text: 'Hifas n + hifas n → plasmogamia (n+n) → cariogamia (2n) → meiosis → ascosporas n.',
          correct: true,
          feedback: 'Correcto. Primero se fusionan las hifas (plasmogamia), luego los núcleos (cariogamia), después ocurre la meiosis y se forman ascosporas haploides.'
        },
        {
          id: 'B',
          text: 'Hifas 2n → mitosis → conidios 2n → meiosis → ascosporas n.',
          correct: false,
          feedback: 'Incorrecto. El micelio vegetativo es haploide (n). Los conidios se producen por mitosis y no son 2n.'
        },
        {
          id: 'C',
          text: 'Ascosporas n → cariogamia (2n) → plasmogamia (n+n) → mitosis → ascosporas 2n.',
          correct: false,
          feedback: 'Incorrecto. El orden está invertido: primero es la plasmogamia y después la cariogamia. La meiosis produce ascosporas n, no 2n.'
        },
        {
          id: 'D',
          text: 'Meiosis → cariogamia (2n) → plasmogamia (n+n) → ascosporas 2n.',
          correct: false,
          feedback: 'Incorrecto. La meiosis ocurre después de la cariogamia, no antes. Las ascosporas resultantes son haploides (n).'
        }
      ],
      explanation: 'La fase sexual requiere dos cepas compatibles. Primero se fusionan las hifas (plasmogamia, n+n), luego los núcleos (cariogamia, 2n) dentro del asco; después la meiosis reduce el número a n y produce ascosporas haploides. La mitosis no reduce cromosomas.',
      keyIdea: 'Plasmogamia → cariogamia → meiosis → ascosporas n.'
    },
    {
      id: 5,
      topic: 'Anatomía funcional',
      stage: 3,
      question: '¿Qué relación hay entre el estroma, los peritecios, los ascos y las ascosporas?',
      scenario: 'Del cuerpo de la pupa emerge un estroma naranja. En su superficie hay puntos diminutos (peritecios). Al ampliarlos, se ven sacos alargados (ascos) con esporas en su interior.',
      options: [
        {
          id: 'A',
          text: 'El estroma sostiene y eleva los peritecios; cada peritecio contiene ascos, y dentro de cada asco la meiosis forma ascosporas.',
          correct: true,
          feedback: 'Correcto. El estroma es la estructura de soporte y altura; los peritecios protegen los ascos donde ocurre la meiosis y se forman las ascosporas.'
        },
        {
          id: 'B',
          text: 'El estroma produce directamente las ascosporas y los peritecios son la pupa.',
          correct: false,
          feedback: 'Incorrecto. El estroma sostiene y eleva los peritecios; las ascosporas se producen dentro de los ascos, en los peritecios. La pupa es el hospedero.'
        },
        {
          id: 'C',
          text: 'Los peritecios sostienen el estroma y el estroma produce conidios por mitosis.',
          correct: false,
          feedback: 'Incorrecto. La relación es la contraria: el estroma sostiene los peritecios. Además, los conidios se producen en conidióforos, no en el estroma.'
        },
        {
          id: 'D',
          text: 'Los ascos son la parte externa del estroma y las ascosporas se forman por mitosis en la superficie.',
          correct: false,
          feedback: 'Incorrecto. Los ascos están dentro de los peritecios y las ascosporas se forman por meiosis, no por mitosis en la superficie.'
        }
      ],
      explanation: 'El estroma es la estructura de soporte y altura. Los peritecios son cavidades en forma de frasco sobre el estroma; contienen ascos. Dentro de cada asco, después de la cariogamia, la meiosis produce ascosporas haploides. La altura del estroma ayuda a que las esporas salgan de la capa de aire quieto.',
      keyIdea: 'Estroma → peritecios → ascos → ascosporas.'
    },
    {
      id: 6,
      topic: 'Ecología del hongo',
      stage: 2,
      question: '¿Qué hospedero parasita Cordyceps militaris y qué relación tiene con él?',
      scenario: 'En una salida de campo se encuentran cuerpos fructíferos naranjas que salen de pupas enterradas en la hojarasca. No se observan hormigas parasitadas.',
      options: [
        {
          id: 'A',
          text: 'Parasita pupas de lepidópteros (mariposas y polillas) y obtiene nutrientes de ellas.',
          correct: true,
          feedback: 'Correcto. C. militaris es un hongo entomopatógeno que infecta larvas y pupas de lepidópteros y absorbe sus nutrientes.'
        },
        {
          id: 'B',
          text: 'Parasita hormigas carpinteras y altera su conducta para que muerdan hojas.',
          correct: false,
          feedback: 'Incorrecto. Ese caso corresponde a Ophiocordyceps unilateralis, de otra familia. C. militaris no manipula la conducta de hormigas.'
        },
        {
          id: 'C',
          text: 'Es un patógeno de plantas que casualmente crece sobre insectos.',
          correct: false,
          feedback: 'Incorrecto. Es un hongo parásito de insectos, no un patógeno de plantas. Su hospedero es una pupa de lepidóptero.'
        },
        {
          id: 'D',
          text: 'Es un hongo saprófito que solo descompone hojas muertas.',
          correct: false,
          feedback: 'Incorrecto. Aunque puede crecer sobre materia orgánica, en este ciclo parasita activamente pupas de insectos.'
        }
      ],
      explanation: 'C. militaris es un hongo entomopatógeno que infecta larvas y pupas de lepidópteros. No es el hongo de las hormigas zombi; ese es Ophiocordyceps unilateralis, de la familia Ophiocordycipitaceae. C. militaris no manipula la conducta de hormigas.',
      keyIdea: 'C. militaris = pupas de lepidópteros. No es el hongo de la hormiga zombi.'
    },
    {
      id: 7,
      topic: 'Dispersión',
      stage: 4,
      question: '¿Qué afirmación separa correctamente la dispersión de la reproducción?',
      scenario: 'Un estroma alto libera ascosporas; en otro lugar, un conidióforo libera conidios. Ambos tipos de esporas pueden viajar y colonizar nuevos hospederos.',
      options: [
        {
          id: 'A',
          text: 'La altura del estroma y la eyección activa de ascosporas aumentan la distancia de dispersión; esto es una ventaja de dispersión, no una prueba de que la reproducción sexual sea mejor.',
          correct: true,
          feedback: 'Correcto. La altura y la eyección activa son mecanismos de dispersión. No indican que la ruta sexual sea superior: solo aumentan el alcance de las ascosporas.'
        },
        {
          id: 'B',
          text: 'Solo las ascosporas se dispersan; los conidios nunca salen del cuerpo del hongo.',
          correct: false,
          feedback: 'Incorrecto. Los conidios también se dispersan por viento, agua o animales. La dispersión no es exclusiva de las ascosporas.'
        },
        {
          id: 'C',
          text: 'La dispersión es una ventaja exclusiva de la reproducción sexual; la asexual no dispersa.',
          correct: false,
          feedback: 'Incorrecto. La reproducción asexual también produce esporas que se dispersan. Dispersión y tipo de reproducción son procesos diferentes.'
        },
        {
          id: 'D',
          text: 'La reproducción sexual siempre dispersa más lejos porque sus esporas son más grandes.',
          correct: false,
          feedback: 'Incorrecto. El tamaño no garantiza mayor dispersión y las ascosporas no son necesariamente más grandes. El alcance depende del mecanismo y del ambiente.'
        }
      ],
      explanation: 'La dispersión depende de estructuras y mecanismos: altura del estroma, eyección activa, viento, agua o animales. Las ascosporas y los conidios pueden dispersarse; no es correcto equiparar dispersión con reproducción sexual. La reproducción sexual se relaciona con la variabilidad; la asexual, con la producción rápida de clones. Son ventajas diferentes y no excluyentes.',
      keyIdea: 'Dispersión ≠ tipo de reproducción. Ambos tipos de esporas pueden dispersarse.'
    },
    {
      id: 8,
      type: 'open',
      topic: 'Argumentación científica',
      stage: 4,
      question: 'En un ambiente que cambia, ¿por qué la variabilidad de la reproducción sexual puede ayudar a una población de hongos, aunque no garantice el éxito ni sea siempre la mejor opción? Explica también por qué la reproducción asexual no es exclusiva de ambientes estables.',
      scenario: 'C. militaris puede producir conidios clónicos por mitosis o ascosporas por meiosis. El clima cambia y las pupas desarrollan nuevas defensas. Ninguna ruta garantiza sobrevivir.',
      minChars: 160,
      requiredKeywords: ['variabilidad', 'recombinación', 'selección natural', 'hospedero', 'ambiente', 'mitosis', 'clones'],
      minKeywords: 2,
      modelAnswer: 'La reproducción sexual genera variabilidad mediante la recombinación durante la meiosis. Si el ambiente o el hospedero cambian, algunas combinaciones pueden responder mejor y dejar más descendientes; la selección natural actúa sobre esa diversidad. Pero la reproducción sexual no garantiza el éxito: produce menos descendientes y cuesta más energía. La reproducción asexual, por mitosis, produce clones y puede ser rápida y eficiente; también puede persistir en ambientes cambiantes si algunos clones ya son tolerantes o si aparecen mutaciones. Por eso no hay una estrategia siempre mejor: ambas rutas pueden coexistir y su resultado depende del costo, la variación disponible y las condiciones.',
      keyIdea: 'La variabilidad aumenta las posibilidades de la población, pero no garantiza el éxito. La reproducción asexual también puede ocurrir en ambientes cambiantes.'
    }
  ];

  /* =======================================================================
     ACTIVIDAD 3 · OBSERVACIÓN GUIADA
     ======================================================================= */
  const DISSECTION = {
    title: 'Observación guiada: ¿por qué existe cada estructura?',
    intro: 'Modelo: Cordyceps militaris, familia Cordycipitaceae. Observa la fotografía y la ampliación. Selecciona una estructura, identifica su función y relaciónala con la fase del ciclo que corresponde. Debes completar las tres estructuras. No se colectan especímenes: se usan una fotografía, esquemas y placas preparadas.',
    photoCredit: 'Fotografía: Wikimedia Commons, “Puppen-Kernkeule Cordyceps militaris”, Holger Krisp, CC BY 3.0. Uso educativo.',
    structures: [
      {
        id: 'estroma',
        num: 1,
        name: 'Estroma',
        color: '#f97316',
        top: '43%',
        left: '26%',
        short: 'Estructura naranja que se eleva desde la pupa.',
        desc: 'Estructura alargada y anaranjada que emerge del cuerpo de la pupa. Su superficie tiene puntos diminutos. En la ampliación se ve que esos puntos son peritecios.',
        functionOptions: [
          {
            id: 'a',
            text: 'Sostener y elevar los peritecios para facilitar la dispersión de ascosporas.',
            correct: true,
            feedback: 'Correcto. El estroma es una estructura de soporte y altura: eleva los peritecios y ayuda a que las ascosporas salgan de la capa de aire quieto del suelo.'
          },
          {
            id: 'b',
            text: 'Alimentar a la pupa mientras el hongo crece.',
            correct: false,
            feedback: 'Incorrecto. El estroma es tejido reproductivo del hongo. No alimenta a la pupa; al contrario, el hongo absorbe nutrientes de ella.'
          },
          {
            id: 'c',
            text: 'Ser el sistema digestivo de la pupa.',
            correct: false,
            feedback: 'Incorrecto. El estroma es tejido del hongo, no un órgano de la pupa. Su función se relaciona con la reproducción y la dispersión.'
          }
        ],
        phaseOptions: [
          {
            id: 'sexual',
            text: 'Fase sexual: sostiene peritecios donde ocurre la meiosis.',
            correct: true,
            feedback: 'Correcto. El estroma sostiene los peritecios, y dentro de ellos la meiosis produce ascosporas.'
          },
          {
            id: 'asexual',
            text: 'Fase asexual: produce conidios por mitosis.',
            correct: false,
            feedback: 'Incorrecto. Los conidios se producen en conidióforos, no en el estroma. El estroma se relaciona con la fase sexual.'
          },
          {
            id: 'none',
            text: 'No se relaciona con la reproducción.',
            correct: false,
            feedback: 'Incorrecto. El estroma es una estructura reproductiva: sostiene los cuerpos fructíferos.'
          }
        ],
        explanation: 'El estroma es una estructura de soporte y altura: eleva los peritecios y ayuda a que las ascosporas salgan de la capa de aire quieto. No produce las esporas directamente; las produce la meiosis en los ascos.',
        keyIdea: 'Estroma = soporte y altura.'
      },
      {
        id: 'peritecio',
        num: 2,
        name: 'Peritecios y ascos',
        color: '#facc15',
        top: '17%',
        left: '18%',
        short: 'Puntos diminutos en la superficie del estroma.',
        desc: 'Puntos diminutos sobre la superficie del estroma. Al ampliarlos, se observan cavidades en forma de frasco; dentro de ellas hay sacos alargados llamados ascos, con ascosporas en su interior.',
        functionOptions: [
          {
            id: 'a',
            text: 'Proteger los ascos y liberar ascosporas producidas por meiosis.',
            correct: true,
            feedback: 'Correcto. Los peritecios contienen ascos; dentro de ellos la meiosis produce ascosporas que luego se liberan.'
          },
          {
            id: 'b',
            text: 'Digerir la cutícula de la pupa.',
            correct: false,
            feedback: 'Incorrecto. La digestión y la penetración ocurren en la hifa y el apresorio. Los peritecios son estructuras reproductivas.'
          },
          {
            id: 'c',
            text: 'Producir conidios por mitosis.',
            correct: false,
            feedback: 'Incorrecto. Los conidios se producen en conidióforos. Los peritecios contienen ascos y ascosporas.'
          }
        ],
        phaseOptions: [
          {
            id: 'sexual',
            text: 'Fase sexual: meiosis y ascosporas.',
            correct: true,
            feedback: 'Correcto. En los peritecios están los ascos, donde la meiosis produce ascosporas haploides.'
          },
          {
            id: 'asexual',
            text: 'Fase asexual: mitosis y conidios.',
            correct: false,
            feedback: 'Incorrecto. Los conidios se forman por mitosis en conidióforos, no en los peritecios.'
          },
          {
            id: 'vegetative',
            text: 'Fase vegetativa: crecimiento del micelio.',
            correct: false,
            feedback: 'Incorrecto. El micelio crece por mitosis, pero los peritecios son estructuras de la fase sexual.'
          }
        ],
        explanation: 'Los peritecios son cavidades que protegen los ascos. Dentro de cada asco, después de la cariogamia, la meiosis produce ascosporas haploides. La relación es: estroma → peritecio → asco → ascospora.',
        keyIdea: 'Peritecio → asco → meiosis → ascosporas.'
      },
      {
        id: 'micelio',
        num: 3,
        name: 'Micelio',
        color: '#10b981',
        top: '76%',
        left: '38%',
        short: 'Filamentos blanquecinos en la base y el interior de la pupa.',
        desc: 'Filamentos blanquecinos que rodean la base y se extienden dentro del cuerpo de la pupa. No forman un cuerpo fructífero.',
        functionOptions: [
          {
            id: 'a',
            text: 'Absorber nutrientes y colonizar los tejidos del hospedero.',
            correct: true,
            feedback: 'Correcto. El micelio es la red de hifas que coloniza el interior, absorbe nutrientes y rodea los tejidos de la pupa.'
          },
          {
            id: 'b',
            text: 'Producir ascosporas directamente.',
            correct: false,
            feedback: 'Incorrecto. Las ascosporas se producen por meiosis dentro de los ascos, en los peritecios. El micelio es vegetativo.'
          },
          {
            id: 'c',
            text: 'Ser células del sistema inmune de la pupa.',
            correct: false,
            feedback: 'Incorrecto. El micelio es tejido del hongo, no del sistema inmune de la pupa. El hongo coloniza al hospedero.'
          }
        ],
        phaseOptions: [
          {
            id: 'vegetative',
            text: 'Crecimiento vegetativo: mitosis, sin formar gametos.',
            correct: true,
            feedback: 'Correcto. El micelio crece por mitosis, coloniza tejidos y absorbe nutrientes; no forma gametos.'
          },
          {
            id: 'sexual',
            text: 'Fase sexual: meiosis y ascosporas.',
            correct: false,
            feedback: 'Incorrecto. La meiosis ocurre en los ascos dentro de los peritecios, no en el micelio vegetativo.'
          },
          {
            id: 'asexual',
            text: 'Fase de dispersión: liberación de conidios.',
            correct: false,
            feedback: 'Incorrecto. Los conidios se forman en conidióforos. El micelio es la red de crecimiento y absorción.'
          }
        ],
        explanation: 'El micelio es la red de hifas haploides que crece por mitosis. Absorbe nutrientes y coloniza el cuerpo del hospedero; no es el cuerpo fructífero ni produce ascosporas directamente.',
        keyIdea: 'Micelio = red de hifas que coloniza y absorbe.'
      }
    ]
  };

  /* =======================================================================
     ACTIVIDAD 2 · RUTAS REPRODUCTIVAS
     Cuatro escenarios. Cada elección suma a una ruta con ascosporas o conidios.
     ======================================================================= */
  const REPRODUCTION_DECISIONS = {
    title: 'Dos rutas reproductivas del hongo',
    intro: 'Cordyceps militaris no elige de forma consciente entre reproducción sexual y asexual: ambas rutas forman parte de su ciclo y pueden ocurrir en ambientes estables o cambiantes. La reproducción sexual no es siempre la mejor opción; la asexual no es exclusiva de ambientes estables. Además, la dispersión es un proceso aparte: depende de estructuras y mecanismos, no del tipo de reproducción. Analiza cada escenario, registra una ruta y explica sus ventajas y costos. No hay una ruta ganadora.',
    minChars: 50,
    scenarios: [
      {
        id: 'estable',
        title: 'Pupas abundantes y clima estable',
        scenario: 'En un bosque húmedo y fresco hay muchas pupas de lepidópteros. El clima es estable y el hongo ya colonizó una pupa. En ese mismo lugar pueden aparecer conidios y también estromas con ascosporas.',
        hintWords: [],
        options: [
          {
            id: 'A',
            type: 'asexual',
            text: 'Producir muchos conidios por mitosis: clones rápidos y de bajo costo.',
            feedback: 'Ventaja: muchas colonizaciones rápidas con poca inversión. Límite: los clones comparten la misma información genética. No es la única ruta posible en un ambiente estable.'
          },
          {
            id: 'B',
            type: 'sexual',
            text: 'Formar estroma y ascosporas por meiosis: menos descendientes, pero con nuevas combinaciones.',
            feedback: 'Ventaja: la recombinación genera variabilidad. Costo: menos descendientes y más tiempo/energía. También puede ocurrir en un ambiente estable; no está reservada a ambientes cambiantes.'
          }
        ],
        explanation: 'Ambas rutas pueden ocurrir en condiciones estables. La asexual suele asociarse con una explotación rápida cuando el hospedero es abundante, pero no es exclusiva de la estabilidad. La sexual no es “la ruta del cambio”: produce variabilidad, pero también puede ocurrir cuando las condiciones son predecibles. Ninguna es mejor en abstracto; dependen de costos y beneficios.'
      },
      {
        id: 'defensas',
        title: 'Las pupas cambian sus defensas',
        scenario: 'En un parche, muchas pupas sobreviven a la cepa del hongo que las infectaba. El ambiente sigue siendo húmedo, pero el hospedero ahora responde mejor. En la población del hongo hay cierta variación previa y también pueden aparecer mutaciones.',
        hintWords: [],
        options: [
          {
            id: 'A',
            type: 'sexual',
            text: 'Aumentar la variabilidad con ascosporas: la recombinación puede producir combinaciones nuevas.',
            feedback: 'La variabilidad aumenta las posibilidades de que alguna combinación supere las defensas, pero no garantiza el éxito. La reproducción sexual tiene costos y no siempre es la mejor opción.'
          },
          {
            id: 'B',
            type: 'asexual',
            text: 'Seguir produciendo conidios clónicos: si algunos clones ya resisten, pueden multiplicarse rápido.',
            feedback: 'La reproducción asexual no está condenada al fracaso en ambientes cambiantes: si hay variación previa o mutaciones, algunos clones pueden persistir. Producir más clones no crea por sí solo nuevas combinaciones.'
          }
        ],
        explanation: 'El cambio en el hospedero puede favorecer la variabilidad, pero la reproducción sexual no es automáticamente superior. La asexual también puede persistir si ya existe variación o si aparecen mutaciones. Lo que importa es la combinación de variación, costo y presión selectiva.'
      },
      {
        id: 'dispersion',
        title: 'Llegar a un nuevo parche de pupas',
        scenario: 'Un parche de pupas está a varios metros. Las esporas deben salir del suelo, cruzar el aire y llegar a un nuevo hospedero. Tanto las ascosporas como los conidios pueden dispersarse, pero sus estructuras y mecanismos son diferentes.',
        hintWords: [],
        options: [
          {
            id: 'A',
            type: 'sexual',
            text: 'Elevar el estroma y expulsar ascosporas activamente: la altura y la eyección aumentan el alcance.',
            feedback: 'Es una ventaja de dispersión: el estroma eleva los peritecios y la eyección activa lanza las ascosporas. No demuestra que la reproducción sexual sea mejor; es un mecanismo de dispersión.'
          },
          {
            id: 'B',
            type: 'asexual',
            text: 'Liberar conidios desde conidióforos: el viento o el agua también pueden transportarlos.',
            feedback: 'Los conidios también se dispersan. La dispersión no es exclusiva de las ascosporas ni de la reproducción sexual; depende de la estructura y del mecanismo.'
          }
        ],
        explanation: 'La dispersión y la reproducción son ventajas distintas. La altura del estroma y la eyección activa favorecen la dispersión de ascosporas; los conidios pueden dispersarse por viento, agua o animales. Ningún tipo de espora garantiza llegar más lejos por ser sexual o asexual.'
      },
      {
        id: 'balance',
        title: 'Dos rutas en el mismo ciclo',
        scenario: 'En una temporada, el hongo produce conidios cuando las pupas están cerca y abundantes. En otra, forma estromas y ascosporas cuando los hospederos están dispersos. Las dos rutas pueden alternarse en el ciclo de vida.',
        hintWords: [],
        options: [
          {
            id: 'A',
            type: 'sexual',
            text: 'La ruta sexual aporta variabilidad; puede ayudar cuando el ambiente o el hospedero cambian, pero no siempre es la mejor.',
            feedback: 'Correcto: la variabilidad es una ventaja condicional, no una garantía. La sexual también tiene costos y puede no ser suficiente.'
          },
          {
            id: 'B',
            type: 'asexual',
            text: 'La ruta asexual aporta rapidez y muchos clones; puede funcionar en ambientes estables o cambiantes si los clones son tolerantes.',
            feedback: 'Correcto: la asexual no es exclusiva de ambientes estables. Su ventaja es la rapidez y el bajo costo, no la falta de cambio.'
          }
        ],
        explanation: 'Las dos rutas coexisten y pueden alternarse. No hay una “ruta ganadora”: la sexual produce variabilidad con costos; la asexual produce clones rápidos y puede persistir en distintas condiciones. La dispersión es un proceso aparte que depende de estructuras y mecanismos.'
      }
    ]
  };

  /* =======================================================================
     GLOSARIO · 36 TÉRMINOS
     ======================================================================= */
  const GLOSSARY = [
    { term: 'Asco (plural ascos)', tag: 'Reproducción', def: 'Célula en forma de saco donde ocurre la meiosis y se forman las ascosporas. Varios ascos se agrupan dentro de los peritecios.' },
    { term: 'Ascospora', tag: 'Reproducción', def: 'Espora haploide producida por meiosis dentro de un asco. Es la vía sexual y aporta variabilidad genética.' },
    { term: 'Apresorio', tag: 'Infección', def: 'Extremo hinchado de la hifa que se adhiere a la cutícula y ayuda a penetrarla mediante presión y enzimas.' },
    { term: 'Capa límite', tag: 'Dispersión', def: 'Capa de aire casi quieto que rodea la superficie del suelo. Dificulta que partículas pequeñas, como las esporas, se dispersen.' },
    { term: 'Coevolución', tag: 'Ecología', def: 'Cambio recíproco entre especies que interactúan, por ejemplo un hongo parásito y las pupas de lepidópteros que infecta, a lo largo de generaciones.' },
    { term: 'Conidio', tag: 'Reproducción', def: 'Espora asexual producida por mitosis en un conidióforo. Permite colonizar rápidamente y generar clones.' },
    { term: 'Conidióforo', tag: 'Estructura', def: 'Hifa especializada que sostiene y libera conidios.' },
    { term: 'Cordicepina', tag: 'Ciencia aplicada', def: 'Compuesto bioactivo producido por Cordyceps militaris. Se estudia por sus posibles efectos, pero no es una cura universal.' },
    { term: 'Cordyceps militaris', tag: 'Taxonomía', def: 'Hongo ascomiceto de la familia Cordycipitaceae que parasita larvas y pupas de lepidópteros y produce estromas anaranjados. Es el modelo de esta actividad.' },
    { term: 'Cordycipitaceae', tag: 'Taxonomía', def: 'Familia de hongos ascomicetos que incluye a Cordyceps militaris. Es la familia modelo de esta actividad.' },
    { term: 'Cuerpo fructífero', tag: 'Estructura', def: 'Estructura que produce y protege esporas. En este caso, el estroma con peritecios.' },
    { term: 'Cutícula', tag: 'Infección', def: 'Cubierta externa del insecto, rica en quitina. Es la primera barrera que el hongo debe atravesar.' },
    { term: 'Espora', tag: 'Reproducción', def: 'Célula reproductiva y de dispersión. Puede ser sexual (ascospora) o asexual (conidio), según su origen.' },
    { term: 'Esporulación', tag: 'Reproducción', def: 'Producción y liberación de esporas por parte del hongo.' },
    { term: 'Estroma', tag: 'Estructura', def: 'Masa de tejido fúngico que sostiene los peritecios y eleva las esporas; en C. militaris forma cuerpos anaranjados.' },
    { term: 'Hemocele', tag: 'Anatomía', def: 'Cavidad interna del insecto que contiene hemolinfa y donde circulan nutrientes y células inmunitarias.' },
    { term: 'Hemolinfa', tag: 'Anatomía', def: 'Fluido circulatorio de los insectos. No es sangre de vertebrado, pero transporta nutrientes y participa en la defensa.' },
    { term: 'Hifa', tag: 'Estructura', def: 'Filamento tubular del hongo. Crece por su extremo y puede tener tabiques llamados septos.' },
    { term: 'Hospedero', tag: 'Ecología', def: 'Organismo que aloja a un parásito y le aporta recursos. En esta actividad, la pupa de un lepidóptero.' },
    { term: 'Lepidóptero', tag: 'Ecología', def: 'Orden de insectos que incluye mariposas y polillas. Sus larvas y pupas pueden ser hospederas de C. militaris.' },
    { term: 'Meiosis', tag: 'Genética', def: 'División celular que reduce el número de cromosomas a la mitad y genera variabilidad mediante recombinación. En C. militaris ocurre en los ascos.' },
    { term: 'Micelio', tag: 'Estructura', def: 'Red de hifas haploides. Es la unidad de crecimiento y absorción del hongo.' },
    { term: 'Microambiente', tag: 'Ecología', def: 'Condiciones locales de humedad, temperatura y luz que rodean a un organismo.' },
    { term: 'Mitosis', tag: 'Genética', def: 'División celular que produce dos células genéticamente idénticas. Se usa para crecimiento y reproducción asexual.' },
    { term: 'Parasitismo', tag: 'Ecología', def: 'Relación en la que un organismo vive a costa de otro y le causa daño. Puede ser ectoparásito o endoparásito.' },
    { term: 'Peritecio', tag: 'Estructura', def: 'Cavidad en forma de frasco que contiene ascos; dentro de cada asco se forman las ascosporas. Es parte de la fase sexual.' },
    { term: 'Plasmogamia', tag: 'Genética', def: 'Fusión de las hifas de dos cepas compatibles. Los núcleos quedan juntos (n+n) sin unirse todavía.' },
    { term: 'Cariogamia', tag: 'Genética', def: 'Fusión de los núcleos haploides (n+n) para formar un cigoto diploide (2n). En C. militaris ocurre dentro del asco.' },
    { term: 'Heterotalismo', tag: 'Genética', def: 'Sistema en el que la reproducción sexual requiere dos cepas compatibles (MAT1-1 y MAT1-2). Un individuo solo no puede completar la fase sexual.' },
    { term: 'Pupa', tag: 'Ecología', def: 'Etapa de desarrollo de insectos holometábolos. En esta actividad, el hospedero del que emergen los estromas.' },
    { term: 'Quitina', tag: 'Bioquímica', def: 'Polisacárido que forma la pared celular de los hongos y el exoesqueleto de los artrópodos.' },
    { term: 'Quitinasa', tag: 'Bioquímica', def: 'Enzima que degrada la quitina. Ayuda al hongo a penetrar la cutícula del insecto.' },
    { term: 'Recombinación genética', tag: 'Genética', def: 'Intercambio de fragmentos de ADN durante la meiosis. Es una fuente importante de variabilidad.' },
    { term: 'Saprótrofo', tag: 'Ecología', def: 'Organismo que obtiene nutrientes de materia orgánica muerta. Muchos hongos son saprótrofos.' },
    { term: 'Selección natural', tag: 'Genética', def: 'Proceso por el cual las variantes mejor adaptadas a un ambiente dejan más descendientes.' },
    { term: 'Variabilidad genética', tag: 'Genética', def: 'Diversidad de combinaciones genéticas en una población. Es la materia prima de la evolución.' }
  ];

  const MYTHS = [
    {
      myth: '“Cordyceps militaris convierte hormigas en zombis.”',
      reality: 'Ese fenómeno corresponde a Ophiocordyceps unilateralis, de la familia Ophiocordycipitaceae. C. militaris parasita larvas y pupas de lepidópteros y no manipula la conducta de hormigas.'
    },
    {
      myth: '“La reproducción sexual siempre es mejor que la asexual.”',
      reality: 'No siempre. La sexual genera variabilidad, pero cuesta más y produce menos descendientes; la asexual es rápida y barata, pero no es exclusiva de ambientes estables. Ambas pueden ocurrir en ambientes cambiantes o estables, y la dispersión es un proceso aparte. Cada estrategia tiene costos y beneficios.'
    },
    {
      myth: '“Los hongos son plantas.”',
      reality: 'Los hongos forman un reino independiente: son eucariotas heterótrofos con pared de quitina y no realizan fotosíntesis.'
    },
    {
      myth: '“El polvo blanco sobre la pupa son huevos.”',
      reality: 'Son esporas o micelio. Los hongos no ponen huevos; producen esporas para reproducirse y dispersarse.'
    },
    {
      myth: '“Cordyceps cura todas las enfermedades.”',
      reality: 'No hay evidencia científica de que cure todas las enfermedades. C. militaris se estudia por compuestos como la cordicepina, pero no es un tratamiento general ni reemplaza la atención médica.'
    },
    {
      myth: '“Si es natural, no puede dañar el ecosistema.”',
      reality: '“Natural” no significa “inocuo”. Un hongo o un producto biológico puede afectar organismos no objetivo; por eso se exigen pruebas de especificidad y evaluación de riesgos.'
    }
  ];

  const SOURCES = [
    'Sung, G.-H., Hywel-Jones, N. L., Sung, J.-M., Luangsa-ard, J. J., Shrestha, B., & Spatafora, J. W. (2007). Phylogenetic classification of Cordyceps and the clavicipitaceous fungi. Studies in Mycology, 57, 5–59.',
    'Zheng, P., Xia, Y., Xiao, G., Xiong, C., Hu, X., Zhang, S., ... & Wang, C. (2011). Genome sequence of the insect pathogenic fungus Cordyceps militaris, a valued traditional Chinese medicine. Genome Biology, 12(11), R116.',
    'Shrestha, B., Zhang, W., Zhang, Y., & Liu, X. (2012). The medicinal fungus Cordyceps militaris: research and development. Mycological Progress, 11, 599–614.',
    'Hibbett, D. S., et al. (2007). A higher-level phylogenetic classification of the Fungi. Mycological Research, 111(5), 509–547.',
    'Kepler, R. M., Luangsa-ard, J. J., Hywel-Jones, N. L., Quandt, C. A., Sung, G.-H., Rehner, S. A., ... & Spatafora, J. W. (2017). A phylogenetically-based nomenclature for Cordycipitaceae (Hypocreales). IMA Fungus, 8(2), 335–353.',
    'Ortiz-Urquiza, A., & Keyhani, N. O. (2013). Action on the surface: entomopathogenic fungi versus the insect cuticle. Insects, 4(3), 357–374.',
    'Urry, L. A., Cain, M. L., Wasserman, S. A., Minorsky, P. V., & Orr, R. B. (2020). Campbell Biology (12.ª ed.). Pearson. Capítulos de mitosis, meiosis y hongos.',
    'Ministerio de Educación Nacional de Colombia. (2006). Estándares básicos de competencias en ciencias naturales y ciencias sociales. Bogotá: MEN.',
    'Wikimedia Commons. (2013). Puppen-Kernkeule Cordyceps militaris [fotografía de Holger Krisp]. CC BY 3.0. Uso educativo.'
  ];

  /* -----------------------------------------------------------------------
     Distribución pedagógica de la opción correcta
     Las preguntas no deben tener casi todas las respuestas en A. Se reordena
     cada lista y se renumeran las opciones A, B, C, D sin cambiar su contenido.
     ----------------------------------------------------------------------- */
  const CORRECT_POSITION = {
    1: 1,  // B
    2: 0,  // A
    3: 3,  // D
    4: 1,  // B
    5: 2,  // C
    6: 0,  // A
    7: 2   // C
  };

  ACTIVITY1.forEach(function (question) {
    if (question.type === 'open') return;
    const target = CORRECT_POSITION[question.id];
    if (typeof target !== 'number') return;
    if (target < 0 || target >= question.options.length) return;

    const correct = question.options.find(function (option) {
      return option.correct;
    });
    if (!correct) return;

    const reordered = question.options.filter(function (option) {
      return !option.correct;
    });
    reordered.splice(target, 0, correct);
    reordered.forEach(function (option, index) {
      option.id = String.fromCharCode(65 + index);
    });
    question.options = reordered;
  });

  window.CORDYCEPS_DATA = {
    STAGES,
    KEY_PRINCIPLES,
    ACTIVITY1,
    REPRODUCTION_DECISIONS,
    DISSECTION,
    GLOSSARY,
    MYTHS,
    SOURCES
  };
})();
