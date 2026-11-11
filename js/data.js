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
      scenario: 'En una muestra de suelo encuentras un organismo naranja que crece sobre una pupa de mariposa. No parece ser una planta y hasta pareciera ser que se está alimentando de la mariposa.',
      options: [
        {
          id: 'A',
          text: 'Una planta sin clorofila que realiza fotosíntesis durante la noche.',
          correct: false,
          feedback: 'Incorrecto. Las plantas son autótrofas y fotosintetizan; este hongo no tiene clorofila ni realiza fotosíntesis.'
        },
        {
          id: 'B',
          text: 'Es un hongo parásito que se está alimentando de la mariposa y la estructura naranja es por donde saca sus esporas.',
          correct: true,
          feedback: 'Correcto. Es un hongo parásito: se alimenta de la pupa de la mariposa y la estructura naranja es su cuerpo reproductivo, por donde libera las esporas.'
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
      explanation: 'Cordyceps militaris es un hongo ascomiceto de la familia Cordycipitaceae. Es eucariota, heterótrofo y tiene pared de quitina; secreta enzimas, digiere tejidos y absorbe nutrientes. La estructura naranja es su cuerpo reproductivo, por donde libera las esporas. No fotosintetiza ni es un animal.',
      keyIdea: 'Hongo = eucariota + heterótrofo + pared de quitina + nutrición por absorción.'
    },
    {
      id: 2,
      topic: 'Estructuras del hongo',
      stage: 2,
      question: '¿Cuál es la diferencia entre una hifa y un micelio?',
      scenario: 'Analizas la muestra y encuentras que hay un conjunto de filamentos entre todo el tejido de la pupa, y cuando aíslas un filamento te das cuenta de que parece un pequeño tubo con una pared celular gruesa.',
      options: [
        {
          id: 'A',
          text: 'La hifa es cada filamento que invade el tejido, y el micelio es todo el conjunto de filamentos que están absorbiendo los nutrientes del insecto.',
          correct: true,
          feedback: 'Correcto. La hifa es cada filamento que invade el tejido y el micelio es todo el conjunto de filamentos que absorben los nutrientes del insecto.'
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
      scenario: 'El hongo Cordyceps militaris tiene dos formas de reproducirse. Por un lado, puede hacer copias exactas de sí mismo (clonarse) a través de la mitosis (reproducción asexual). Por otro lado, cuando dos hongos compatibles se encuentran, pueden unir sus células y mezclar su ADN; luego de esto, hacen un proceso llamado meiosis para crear esporas con información genética nueva (reproducción sexual).',
      options: [
        {
          id: 'A',
          text: 'La mitosis mezcla el ADN de dos hongos diferentes para crear uno nuevo, mientras que la meiosis solo hace copias exactas del hongo original.',
          correct: false,
          feedback: 'Incorrecto. Es al revés: la mitosis hace copias exactas (clones) y la meiosis mezcla la información de dos hongos compatibles.'
        },
        {
          id: 'B',
          text: 'Ambas formas de reproducción crean clones exactamente iguales, solo que una ocurre dentro del insecto y la otra en el exterior.',
          correct: false,
          feedback: 'Incorrecto. Solo la mitosis produce clones idénticos; la meiosis genera esporas con combinaciones nuevas. El lugar donde ocurre no define el proceso.'
        },
        {
          id: 'C',
          text: 'La mitosis crea esporas con el doble de ADN para que sean más fuertes, mientras que la meiosis crea esporas débiles que solo sirven de alimento.',
          correct: false,
          feedback: 'Incorrecto. La mitosis no duplica el ADN para hacer esporas más fuertes y la meiosis no produce esporas débiles. La diferencia está en si hay mezcla de ADN o no.'
        },
        {
          id: 'D',
          text: 'Las esporas hechas por mitosis son clones exactos de un solo hongo; mientras que las hechas por meiosis tienen una nueva mezcla de ADN porque unen la información de dos hongos compatibles.',
          correct: true,
          feedback: 'Correcto. Las esporas de la mitosis son clones exactos de un solo hongo; las de la meiosis mezclan la información de dos hongos compatibles.'
        }
      ],
      explanation: 'La mitosis produce copias exactas (clones) de un solo hongo: así se forman los conidios. La reproducción sexual ocurre cuando dos hongos compatibles unen sus células y mezclan su ADN; después, la meiosis forma esporas con información genética nueva (ascosporas).',
      keyIdea: 'Mitosis → clones exactos. Meiosis → mezcla de ADN de dos hongos.'
    },
    {
      id: 4,
      topic: 'Ciclo sexual',
      stage: 3,
      question: '¿Cuál es el orden lógico de los pasos para que el hongo Cordyceps se reproduzca de forma sexual?',
      scenario: 'Dos cepas compatibles del hongo se encuentran en la pupa.',
      options: [
        {
          id: 'A',
          text: 'Dos hongos se encuentran → unen sus células → mezclan su ADN → se dividen por meiosis para crear nuevas esporas.',
          correct: true,
          feedback: 'Correcto. Primero se encuentran y unen sus células, luego mezclan su ADN y finalmente la meiosis forma esporas nuevas.'
        },
        {
          id: 'B',
          text: 'Los hongos hacen meiosis → mezclan su ADN → se unen las células → crean esporas clonadas.',
          correct: false,
          feedback: 'Incorrecto. La meiosis ocurre al final, no al principio; además, la reproducción sexual no produce clones.'
        },
        {
          id: 'C',
          text: 'Dos hongos se encuentran → hacen mitosis para hacer clones → mezclan su ADN → crean nuevas esporas.',
          correct: false,
          feedback: 'Incorrecto. La mitosis produce clones y no forma parte de la mezcla de ADN de dos hongos.'
        },
        {
          id: 'D',
          text: 'Crean nuevas esporas → dos hongos se encuentran → hacen meiosis → unen sus células.',
          correct: false,
          feedback: 'Incorrecto. El orden está desorganizado: las esporas se forman al final, después de la meiosis.'
        }
      ],
      explanation: 'En la reproducción sexual, dos hongos compatibles se encuentran y unen sus células (plasmogamia); luego sus núcleos se fusionan y mezclan su ADN (cariogamia); por último, la meiosis forma esporas con información genética nueva.',
      keyIdea: 'Encontrarse → unir células → mezclar ADN → meiosis → esporas nuevas.'
    },
    {
      id: 5,
      topic: 'Anatomía funcional',
      stage: 3,
      question: '¿Cómo están organizadas las partes del tallo naranja, de la más grande a la más pequeña, hasta llegar a las esporas?',
      scenario: 'Del cuerpo de la pupa emerge un tallo naranja. Su superficie tiene puntos diminutos (peritecios) y, al ampliarlos, se ven sacos alargados (ascos) con esporas en su interior.',
      options: [
        {
          id: 'A',
          text: 'El tallo naranja (estroma) fabrica las esporas directamente en su superficie, sin necesitar de otras estructuras pequeñas.',
          correct: false,
          feedback: 'Incorrecto. El estroma no fabrica las esporas directamente: las esporas se forman dentro de los ascos, en los peritecios.'
        },
        {
          id: 'B',
          text: 'Los saquitos (ascos) son la parte más grande y externa del hongo, y sostienen al tallo naranja (estroma).',
          correct: false,
          feedback: 'Incorrecto. Los tamaños están invertidos: el estroma es la parte grande y los ascos están dentro de los peritecios.'
        },
        {
          id: 'C',
          text: 'El tallo naranja (estroma) está cubierto de pequeños puntos (peritecios). Adentro de esos puntos hay saquitos (ascos) donde finalmente se forman las esporas por meiosis.',
          correct: true,
          feedback: 'Correcto. El orden es estroma → peritecios → ascos → esporas formadas por meiosis.'
        },
        {
          id: 'D',
          text: 'Las esporas son la parte externa del hongo y se forman por mitosis para proteger al tallo naranja (estroma).',
          correct: false,
          feedback: 'Incorrecto. Las esporas no son la parte externa ni se forman por mitosis: se forman por meiosis dentro de los ascos.'
        }
      ],
      explanation: 'De mayor a menor: el estroma es el tallo naranja; su superficie tiene puntos llamados peritecios; dentro de cada peritecio hay saquitos llamados ascos; y dentro de los ascos se forman las esporas por meiosis.',
      keyIdea: 'Estroma → peritecios → ascos → esporas.'
    },
    {
      id: 6,
      topic: 'Ecología del hongo',
      stage: 2,
      question: '¿Qué hospedero parasita Cordyceps militaris y qué relación tiene con él?',
      scenario: 'En una salida de campo encuentras estructuras naranjas que emergen del suelo, entre la hojarasca. No ves hormigas parasitadas y no sabes qué organismo está infectado bajo tierra.',
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
      question: '¿Por qué esto es una ventaja de dispersión (viaje) y NO una ventaja de reproducción (genética)?',
      scenario: 'El tallo del hongo (estroma) crece hacia arriba para expulsar las esporas y que el viento se las lleve más lejos.',
      options: [
        {
          id: 'A',
          text: 'Porque la altura ayuda a que el viento lleve las esporas más lejos, pero no interfiere en cómo se mezcla el ADN dentro de ellas.',
          correct: true,
          feedback: 'Correcto. La altura mejora el alcance de las esporas (dispersión), pero no cambia cómo se forma su ADN (reproducción).'
        },
        {
          id: 'B',
          text: 'Porque las esporas que vuelan más alto cambian su ADN con el aire y se vuelven clones.',
          correct: false,
          feedback: 'Incorrecto. El aire no cambia el ADN de las esporas ni las convierte en clones.'
        },
        {
          id: 'C',
          text: 'Porque el tallo alto obliga al hongo a detener su reproducción sexual y empezar a clonarse.',
          correct: false,
          feedback: 'Incorrecto. La altura no obliga al hongo a cambiar de ruta reproductiva: son procesos independientes.'
        },
        {
          id: 'D',
          text: 'Porque solo los hongos que tienen tallos altos pueden reproducirse; los demás no producen esporas.',
          correct: false,
          feedback: 'Incorrecto. Los hongos con tallos bajos también producen esporas; la altura solo influye en la distancia que pueden viajar.'
        }
      ],
      explanation: 'La dispersión se refiere a cómo viajan las esporas; la reproducción, a cómo se forma su información genética. Un estroma alto ayuda a que el viento lleve las esporas más lejos, pero no cambia si se formaron por mitosis o por meiosis.',
      keyIdea: 'Altura = dispersión. No cambia el ADN ni el tipo de reproducción.'
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
        scenario: 'En un bosque húmedo y fresco hay muchas pupas de mariposas o polillas. El clima es estable y el hongo ya colonizó una pupa. En ese mismo lugar pueden aparecer estructuras de reproducción asexual (conidios) y también estructuras de reproducción sexual (estromas) con esporas.',
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
    'Wikimedia Commons. (2013). Puppen-Kernkeule Cordyceps militaris [fotografía de Holger Krisp]. CC BY 3.0. Uso educativo.',
    'Livezey, M. (2018). Cordyceps militaris: peritecios y ascosporas [fotografías macro y de microscopía]. iNaturalist, observación 146029178. CC BY 4.0. https://www.inaturalist.org/observations/146029178 · Licencia: https://creativecommons.org/licenses/by/4.0/'
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
