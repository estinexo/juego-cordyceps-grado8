/* =========================================================================
   DATOS CIENTÍFICOS Y PEDAGÓGICOS
   Ophiocordyceps unilateralis · Biología · Grado 8°
   Archivo sin dependencias externas. Se carga antes de app.js.
   ========================================================================= */
(function () {
  'use strict';

  const STAGES = [
    {
      id: 0,
      name: 'Espora',
      short: 'Espora (inicio del ciclo)',
      desc: 'Una ascospora haploide, protegida por una pared de quitina, cae sobre el exoesqueleto de una hormiga. Es el inicio y también el punto de retorno del ciclo.'
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
      desc: 'Las hifas crecen y forman una red de micelio dentro del cuerpo de la hormiga. Absorbe nutrientes y rodea tejidos musculares.'
    },
    {
      id: 3,
      name: 'Estroma y peritecios',
      short: 'Estroma (fase sexual)',
      desc: 'El hongo forma un estroma que sale de la cabeza de la hormiga. Dentro de los peritecios, la meiosis produce ascosporas variables.'
    },
    {
      id: 4,
      name: 'Dispersión',
      short: 'Dispersión (nuevo ciclo)',
      desc: 'Las ascosporas son expulsadas y el viento las transporta. Si caen sobre una hormiga adecuada, el ciclo comienza de nuevo.'
    }
  ];

  const KEY_PRINCIPLES = [
    'Los hongos son organismos eucariotas, heterótrofos, con pared celular de quitina. No son plantas ni bacterias.',
    'La mitosis produce copias genéticamente idénticas y sirve para crecer o colonizar rápido. La meiosis reduce los cromosomas y genera variabilidad.',
    'En los hongos, lo sexual y lo asexual no son etapas “mejores” o “peores”: son estrategias con costos y beneficios distintos.',
    'La manipulación de la conducta no equivale a destruir el cerebro: el hongo altera la locomoción y el comportamiento del hospedero.'
  ];

  /* =======================================================================
     ACTIVIDAD 1 · 12 PREGUNTAS CON FINAL DEFINIDO
     ======================================================================= */
  const ACTIVITY1 = [
    {
      id: 1,
      topic: 'Micología básica',
      stage: 0,
      question: '¿Qué tipo de organismo es Ophiocordyceps?',
      scenario: 'En el laboratorio observas que el hongo crece sobre tejido de una hormiga, no tiene clorofila y obtiene nutrientes del tejido del hospedero. Ophiocordyceps unilateralis pertenece a la familia Cordycipitaceae (clasificación tradicional; actualmente Ophiocordycipitaceae).',
      options: [
        {
          id: 'A',
          text: 'Un hongo: eucariota, heterótrofo, con pared celular de quitina.',
          correct: true,
          feedback: 'Correcto. Los hongos forman un reino independiente: son eucariotas, no fotosintetizan y absorben nutrientes después de digerirlos fuera de sus células.'
        },
        {
          id: 'B',
          text: 'Una planta sin clorofila que realiza fotosíntesis durante la noche.',
          correct: false,
          feedback: 'Incorrecto. Las plantas son autótrofas y fotosintetizan; este hongo no tiene clorofila ni realiza fotosíntesis.'
        },
        {
          id: 'C',
          text: 'Una bacteria gigante que captura alimento por fagocitosis.',
          correct: false,
          feedback: 'Incorrecto. Las bacterias son procariotas. Los hongos son eucariotas y se alimentan por absorción, no por fagocitosis.'
        }
      ],
      explanation: 'Los hongos son eucariotas heterótrofos con pared de quitina. Ophiocordyceps unilateralis se clasifica en la familia Cordycipitaceae (clasificación tradicional; actualmente Ophiocordycipitaceae). No fotosintetiza: secreta enzimas, digiere tejido del hospedero fuera de sus células y absorbe los nutrientes. Por eso depende de la hormiga y no se alimenta del ambiente que lo rodea.',
      keyIdea: 'Hongo = eucariota + heterótrofo + pared de quitina + nutrición por absorción.'
    },
    {
      id: 2,
      topic: 'Germinación e infección',
      stage: 1,
      question: '¿Cómo atraviesa la espora la cutícula de la hormiga?',
      scenario: 'Una ascospora queda sobre el exoesqueleto de una hormiga carpintera. Para infectar debe entrar sin ser eliminada por el acicalamiento de la colonia.',
      options: [
        {
          id: 'A',
          text: 'Germina y forma un tubo que se adhiere y perfora con presión y enzimas.',
          correct: true,
          feedback: 'Correcto. La espora germina, produce un tubo germinativo y un apresorio. La presión de turgencia y enzimas como quitinasas y proteasas ayudan a atravesar la cutícula.'
        },
        {
          id: 'B',
          text: 'Se divide por meiosis y produce una larva que entra por la boca.',
          correct: false,
          feedback: 'Incorrecto. Los hongos no producen larvas. La meiosis no sirve para formar un animal, sino para generar esporas con variabilidad genética.'
        },
        {
          id: 'C',
          text: 'Espera a que la hormiga la coma y luego crece en el intestino.',
          correct: false,
          feedback: 'Incorrecto. Aunque algunas infecciones ocurren por ingestión, en este caso la espora se adhiere a la cutícula y la penetra activamente.'
        }
      ],
      explanation: 'La germinación convierte una espora en una hifa. El apresorio es una estructura de anclaje y penetración; la combinación de presión y enzimas permite entrar sin necesidad de que la hormiga coma la espora.',
      keyIdea: 'Germinación → tubo germinativo → apresorio → penetración por presión y enzimas.'
    },
    {
      id: 3,
      topic: 'Estructuras del hongo',
      stage: 2,
      question: '¿Cuál es la diferencia biológica entre una hifa y un micelio en este proceso de infección?',
      scenario: 'Al observar al microscopio el tejido de la hormiga infectada, se distingue una estructura invasiva. Imagina dos vistas: la primera muestra un único tubo microscópico penetrando una fibra muscular; la segunda muestra una extensa red de estos tubos colonizando todo el cuerpo del insecto para absorber sus nutrientes.',
      options: [
        {
          id: 'A',
          text: 'La hifa es cada filamento tubular individual que invade el tejido, y el micelio es la red vegetativa completa formada por todas las hifas para absorber los nutrientes del insecto.',
          correct: true,
          feedback: 'Correcto. La hifa es la unidad filamentosa que invade el tejido; el micelio es la red completa de hifas que coloniza el cuerpo y absorbe nutrientes del hospedero.'
        },
        {
          id: 'B',
          text: 'La hifa es la estructura que absorbe nutrientes de los músculos, mientras que el micelio es la estructura externa que produce las esporas para infectar a otras hormigas.',
          correct: false,
          feedback: 'Incorrecto. La hifa no es la estructura externa que produce esporas, y el micelio no es el cuerpo fructífero. El micelio es la red vegetativa de hifas.'
        },
        {
          id: 'C',
          text: 'El micelio es un filamento único similar a una raíz, y la hifa es el conjunto de esporas que viajan por la sangre del insecto.',
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
      explanation: 'La hifa es cada tubo microscópico del hongo. Al crecer y ramificarse forma el micelio, una red que coloniza tejidos y absorbe nutrientes. En la infección, las hifas invaden músculo y otros tejidos, pero no son el músculo del hospedero.',
      keyIdea: 'Hifa = filamento individual. Micelio = red de hifas.'
    },
    {
      id: 4,
      topic: 'Genética celular',
      stage: 3,
      question: 'Basándote en la imagen y los procesos celulares, ¿cuál es la diferencia clave entre las esporas producidas en un conidióforo (mitosis) y las producidas en el peritecio (meiosis)?',
      scenario: 'El hongo Ophiocordyceps tiene dos formas de reproducirse. Puede usar conidióforos donde células haploides (n) se dividen por mitosis para liberar esporas rápidamente. Alternativamente, forma un estroma con peritecios en la cabeza de la hormiga, donde ocurre la meiosis.',
      options: [
        {
          id: 'A',
          text: 'Las esporas del conidióforo son clones exactos del hongo original (n → n), mientras que la meiosis en el peritecio genera ascosporas con variabilidad genética (2n → n), crucial para adaptarse a nuevas defensas de las hormigas.',
          correct: true,
          feedback: 'Correcto. La mitosis en el conidióforo produce esporas haploides genéticamente idénticas (n → n). La meiosis en el peritecio reduce 2n a n y, con la recombinación, genera ascosporas variables.'
        },
        {
          id: 'B',
          text: 'La mitosis en el conidióforo reduce los cromosomas a la mitad para infectar más rápido, mientras que la meiosis en el peritecio mantiene los cromosomas intactos para formar el estroma.',
          correct: false,
          feedback: 'Incorrecto. La mitosis no reduce los cromosomas a la mitad; mantiene el número. La meiosis es la que reduce y genera variabilidad.'
        },
        {
          id: 'C',
          text: 'Ambas divisiones producen clones genéticamente idénticos, pero la mitosis ocurre dentro del cuerpo de la hormiga y la meiosis exclusivamente en el exterior para dispersarse.',
          correct: false,
          feedback: 'Incorrecto. La meiosis no produce clones idénticos; la recombinación mezcla información. Además, no se puede reducir todo a dónde ocurre.'
        },
        {
          id: 'D',
          text: 'La mitosis genera esporas diploides (2n) muy resistentes, mientras que la meiosis en el peritecio produce esporas haploides (n) débiles que solo sirven de alimento.',
          correct: false,
          feedback: 'Incorrecto. Las esporas asexuales fúngicas no son diploides; la mitosis de una célula haploide produce esporas haploides. La ploidía no determina por sí sola la resistencia.'
        }
      ],
      explanation: 'Mitosis: una célula n produce dos células n idénticas; es la base de los clones. Meiosis: una célula 2n produce células n con recombinación; genera variabilidad. En Ophiocordyceps, los conidios son la vía asexual y las ascosporas la vía sexual.',
      keyIdea: 'Conidios = mitosis = clones. Ascosporas = meiosis = variabilidad.'
    },
    {
      id: 5,
      topic: 'Reproducción fúngica',
      stage: 3,
      question: '¿Qué relación hay entre los conidios y las ascosporas?',
      scenario: 'El hongo produce conidios en el exterior del cuerpo y ascosporas dentro de los peritecios del estroma.',
      options: [
        {
          id: 'A',
          text: 'Conidios: asexuales por mitosis. Ascosporas: sexuales por meiosis.',
          correct: true,
          feedback: 'Correcto. Los conidios son esporas asexuales producidas por mitosis; las ascosporas se forman por meiosis dentro de un asca.'
        },
        {
          id: 'B',
          text: 'Conidios: sexuales por meiosis. Ascosporas: asexuales por mitosis.',
          correct: false,
          feedback: 'Incorrecto. Los nombres están invertidos. Los conidios son la vía asexual y las ascosporas la vía sexual.'
        },
        {
          id: 'C',
          text: 'Ambos son esporas de la hormiga que el hongo recicla.',
          correct: false,
          feedback: 'Incorrecto. Las esporas son células del hongo, no de la hormiga. El hongo las produce para reproducirse y dispersarse.'
        }
      ],
      explanation: 'Conidio: espora asexual formada en un conidióforo por mitosis. Ascospora: espora sexual formada por meiosis dentro de un asca, que está protegida en un peritecio. Ambas sirven para dispersarse, pero tienen distinto origen y distinta diversidad genética.',
      keyIdea: 'Conidios = mitosis = clones. Ascosporas = meiosis = variabilidad.'
    },
    {
      id: 6,
      topic: 'Anatomía funcional',
      stage: 3,
      question: '¿Para qué le sirven al hongo el estroma y los peritecios?',
      scenario: 'De la cabeza de la hormiga brota un tallo oscuro. Dentro de su parte ensanchada hay estructuras con forma de frasco.',
      options: [
        {
          id: 'A',
          text: 'El estroma eleva y sostiene los peritecios; allí ocurre la meiosis y se forman ascosporas.',
          correct: true,
          feedback: 'Correcto. El estroma es tejido fúngico de soporte. Los peritecios son cuerpos fructíferos en forma de frasco que contienen ascos, donde se forman las ascosporas por meiosis.'
        },
        {
          id: 'B',
          text: 'El estroma es el cerebro de la hormiga y los peritecios son sus huevos.',
          correct: false,
          feedback: 'Incorrecto. El estroma es tejido del hongo, no de la hormiga. Los peritecios producen esporas, no huevos.'
        },
        {
          id: 'C',
          text: 'El estroma es una raíz que absorbe nutrientes del suelo.',
          correct: false,
          feedback: 'Incorrecto. El estroma crece hacia arriba y no funciona como una raíz. Su papel principal es sostener y elevar los cuerpos fructíferos.'
        }
      ],
      explanation: 'La forma se explica por la función: el estroma eleva los peritecios, los peritecios protegen los ascos y los ascos producen ascosporas. La altura facilita que las esporas salgan de la capa de aire quieto del suelo y el viento las disperse.',
      keyIdea: 'Estroma = soporte y altura. Peritecios = protección y reproducción sexual.'
    },
    {
      id: 7,
      topic: 'Manipulación conductual',
      stage: 2,
      question: '¿Cómo altera el hongo la conducta de la hormiga?',
      scenario: 'Cortes histológicos muestran hifas alrededor de las fibras musculares, pero no dentro del cerebro. La hormiga camina y muerde una nervadura antes de morir.',
      options: [
        {
          id: 'A',
          text: 'Rodea músculos y libera compuestos que alteran la locomoción sin destruir el cerebro.',
          correct: true,
          feedback: 'Correcto. El hongo no invade el cerebro: forma una red alrededor de las fibras musculares y altera la locomoción y la conducta. La “mordida de la muerte” fija la hormiga al sustrato.'
        },
        {
          id: 'B',
          text: 'Sustituye el cerebro por micelio y mueve el cuerpo como una marioneta.',
          correct: false,
          feedback: 'Incorrecto. Es una idea popular, pero los estudios no muestran invasión cerebral. El hongo manipula músculos y comportamiento sin destruir el sistema nervioso central.'
        },
        {
          id: 'C',
          text: 'La hormiga decide subir voluntariamente para ayudar al hongo.',
          correct: false,
          feedback: 'Incorrecto. La conducta es alterada por el parásito; no es una decisión consciente de la hormiga.'
        }
      ],
      explanation: 'Ophiocordyceps no convierte a la hormiga en un cadáver andante ni le devora el cerebro: modifica su comportamiento y su locomoción, probablemente mediante compuestos que afectan la musculatura y la señalización nerviosa. Esto se conoce como manipulación conductual.',
      keyIdea: 'Manipulación conductual ≠ destrucción del cerebro. El hongo rodea músculos y altera la locomoción.'
    },
    {
      id: 8,
      topic: 'Ecología del comportamiento',
      stage: 3,
      question: '¿Por qué la “mordida de la muerte” ocurre en un sitio específico?',
      scenario: 'Las hormigas infectadas muerden la nervadura de una hoja a unos 25 cm del suelo, en sitios húmedos, frescos y con poca luz directa.',
      options: [
        {
          id: 'A',
          text: 'Ese microambiente favorece el crecimiento del hongo y la dispersión de esporas; la mordida fija el cadáver.',
          correct: true,
          feedback: 'Correcto. La posición elevada, la humedad y la temperatura estable crean un microambiente adecuado para que el hongo fructifique y libere esporas. La mordida mantiene el cuerpo fijo en ese lugar.'
        },
        {
          id: 'B',
          text: 'La hormiga sube para escapar del hongo, así que el hongo pierde.',
          correct: false,
          feedback: 'Incorrecto. La subida y la mordida forman parte de la manipulación: favorecen la reproducción del hongo, no su escape.'
        },
        {
          id: 'C',
          text: 'Es casualidad; la posición no influye en la reproducción.',
          correct: false,
          feedback: 'Incorrecto. La posición es repetible y está relacionada con las condiciones ambientales que necesita el hongo para esporular.'
        }
      ],
      explanation: 'La “mordida de la muerte” ocurre en un microambiente específico: unos 25 cm sobre el suelo, con alta humedad y temperatura adecuada. Allí el estroma puede crecer y las esporas tienen más probabilidades de ser dispersadas por el viento hacia nuevas hormigas.',
      keyIdea: 'La conducta manipulada coloca al hongo en el microambiente óptimo para reproducirse.'
    },
    {
      id: 9,
      topic: 'Física de la dispersión',
      stage: 4,
      question: '¿Por qué un estroma alto aumenta el alcance de las esporas?',
      scenario: 'Las ascosporas son expulsadas activamente desde los peritecios y luego el viento las transporta.',
      options: [
        {
          id: 'A',
          text: 'La altura y la eyección activa superan la gravedad y la capa de aire quieto cerca del suelo.',
          correct: true,
          feedback: 'Correcto. Cerca del suelo hay una capa límite de aire casi quieto. Elevar el estroma y expulsar las esporas activamente les permite entrar en corrientes de aire y viajar más lejos.'
        },
        {
          id: 'B',
          text: 'Las esporas solo caen por gravedad; la altura no cambia nada.',
          correct: false,
          feedback: 'Incorrecto. La gravedad actúa, pero la altura y la eyección activa aumentan el tiempo en el aire y la probabilidad de que el viento las transporte.'
        },
        {
          id: 'C',
          text: 'Las esporas caminan hasta otra hormiga.',
          correct: false,
          feedback: 'Incorrecto. Las esporas no caminan. Se dispersan por el aire, el agua o el contacto, según la especie.'
        }
      ],
      explanation: 'La dispersión es un problema físico: una partícula pequeña que cae cerca del suelo queda atrapada en la capa límite. El estroma alto y el disparo activo de ascosporas las sacan de esa zona y el viento las puede llevar a nuevos hospederos.',
      keyIdea: 'Altura + eyección activa + viento = mayor distancia de dispersión.'
    },
    {
      id: 10,
      topic: 'Co-evolución',
      stage: 4,
      question: '¿Qué indica que Ophiocordyceps infecte principalmente a Camponotus?',
      scenario: 'En el bosque, solo algunas especies de hormigas carpinteras son parasitadas; otros insectos no desarrollan la enfermedad.',
      options: [
        {
          id: 'A',
          text: 'Existe especificidad de hospedero y probable coevolución entre hongo y hormiga.',
          correct: true,
          feedback: 'Correcto. El hongo está adaptado a un hospedero particular. Esa especificidad sugiere una historia de coevolución: el hospedero desarrolla defensas y el parásito responde con nuevas adaptaciones.'
        },
        {
          id: 'B',
          text: 'El hongo puede infectar a cualquier animal, incluidos los humanos.',
          correct: false,
          feedback: 'Incorrecto. Ophiocordyceps tiene especificidad de hospedero y no infecta a humanos. No debe confundirse con un patógeno humano.'
        },
        {
          id: 'C',
          text: 'El hongo es un patógeno de plantas que casualmente vive en insectos.',
          correct: false,
          feedback: 'Incorrecto. Es un hongo parásito de insectos, no un patógeno de plantas. Su hospedero es un artrópodo.'
        }
      ],
      explanation: 'La especificidad de hospedero significa que el parásito reconoce y coloniza solo ciertas especies. Esto reduce el riesgo para otros organismos, pero también hace al hongo vulnerable si su hospedero escasea. La coevolución explica las adaptaciones recíprocas entre ambos.',
      keyIdea: 'Especificidad de hospedero + coevolución = adaptaciones recíprocas.'
    },
    {
      id: 11,
      topic: 'Método científico',
      stage: 3,
      question: '¿Cuál es el mejor diseño para demostrar que el hongo altera la conducta?',
      scenario: 'Un equipo quiere comprobar si la posición elevada de las hormigas se debe a la infección y no al azar.',
      options: [
        {
          id: 'A',
          text: 'Comparar hormigas infectadas y no infectadas, con varias repeticiones, midiendo altura y sustrato.',
          correct: true,
          feedback: 'Correcto. Un buen experimento incluye un grupo control (no infectadas), varias repeticiones y una variable medible. Así se puede atribuir la diferencia a la infección y no a la casualidad.'
        },
        {
          id: 'B',
          text: 'Observar una sola hormiga durante un minuto.',
          correct: false,
          feedback: 'Incorrecto. Una sola observación no permite generalizar ni descartar el azar. Se necesitan controles y repeticiones.'
        },
        {
          id: 'C',
          text: 'Preguntar a los cuidadores qué creen que ocurre.',
          correct: false,
          feedback: 'Incorrecto. Las opiniones pueden orientar hipótesis, pero no reemplazan datos experimentales. La ciencia requiere evidencia medible y verificable.'
        }
      ],
      explanation: 'Un experimento riguroso compara grupos, controla variables y repite las mediciones. Para este caso: grupo infectado vs. no infectado, registro de altura, sustrato y condiciones ambientales, con suficientes individuos para analizar los resultados.',
      keyIdea: 'Grupo control + repetición + variable medible = evidencia confiable.'
    },
    {
      id: 13,
      type: 'open',
      topic: 'Argumentación científica',
      stage: 4,
      question: 'Si el clima cambia de repente o las hormigas desarrollan nuevas defensas, ¿por qué le sirve más al hongo tener pocos descendientes diferentes (reproducción sexual) en lugar de miles de clones idénticos?',
      scenario: 'El hongo puede producir miles de conidios clónicos por mitosis o menos ascosporas por meiosis. El ambiente cambia y las hormigas desarrollan nuevas defensas.',
      minChars: 180,
      requiredKeywords: ['variabilidad', 'recombinación', 'selección natural', 'hospedero', 'ambiente'],
      minKeywords: 2,
      modelAnswer: 'La reproducción sexual mezcla información genética mediante la recombinación durante la meiosis. Así produce descendientes diferentes. Si el clima cambia o las hormigas desarrollan nuevas defensas, algunas de esas combinaciones pueden sobrevivir y dejar más descendientes; la selección natural favorece a las mejor adaptadas. Aunque la vía sexual produce menos descendientes y cuesta más energía, aumenta la probabilidad de que la población del hongo no se extinga cuando el ambiente o el hospedero cambian. La vía asexual, con mitosis y clones, es rápida y útil en ambientes estables, pero no genera esa variedad.',
      keyIdea: 'La variabilidad no garantiza el éxito individual, pero aumenta la probabilidad de que la población sobreviva a un cambio.'
    }
  ];

  /* =======================================================================
     ACTIVIDAD 3 · DISECCIÓN GUIADA
     ======================================================================= */
  const DISSECTION = {
    title: 'Disección virtual: ¿por qué existe cada estructura?',
    intro: 'Modelo: Ophiocordyceps unilateralis, familia Cordycipitaceae (clasificación tradicional; actualmente Ophiocordycipitaceae). Observa la fotografía de una hormiga parasitada. Selecciona una estructura, identifica su función y relaciónala con la fase del ciclo que corresponde. Debes completar las cuatro estructuras.',
    photoCredit: 'Fotografía: Wikimedia Commons, “Complex Ophiocordyceps unilateralis”, CC BY 4.0. Uso educativo.',
    structures: [
      {
        id: 'estroma',
        num: 1,
        name: 'Estroma',
        color: '#ef4444',
        top: '40%',
        left: '46%',
        short: 'Prolongación fúngica que sale de la cabeza de la hormiga.',
        desc: 'Prolongación oscura y alargada que sale de la cabeza de la hormiga y se eleva sobre la hoja. En su extremo se observan estructuras reproductivas.',
        functionOptions: [
          {
            id: 'a',
            text: 'Elevar y sostener los peritecios para facilitar la dispersión de esporas.',
            correct: true,
            feedback: 'Correcto. El estroma es una estructura de soporte y altura: eleva los cuerpos fructíferos y ayuda a que las esporas salgan de la capa de aire quieto del suelo.'
          },
          {
            id: 'b',
            text: 'Alimentar a la hormiga mientras está viva.',
            correct: false,
            feedback: 'Incorrecto. El estroma es tejido reproductivo del hongo. No alimenta a la hormiga; al contrario, el hongo absorbe nutrientes de ella.'
          },
          {
            id: 'c',
            text: 'Ser el cerebro que controla las mandíbulas.',
            correct: false,
            feedback: 'Incorrecto. El estroma no es un cerebro ni tejido nervioso. La manipulación de la conducta ocurre dentro del cuerpo, asociada al micelio y a compuestos del hongo.'
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
        explanation: 'Estroma = soporte. No es el que produce las esporas directamente, pero eleva y protege a los peritecios que sí lo hacen.'
      },
      {
        id: 'peritecio',
        num: 2,
        name: 'Peritecios',
        color: '#f59e0b',
        top: '53%',
        left: '23%',
        short: 'Estructuras pequeñas en el extremo del estroma.',
        desc: 'Estructuras pequeñas, redondeadas o en forma de frasco, agrupadas en el extremo ensanchado del estroma. A simple vista no se distingue su interior.',
        functionOptions: [
          {
            id: 'a',
            text: 'Proteger los ascos y liberar ascosporas producidas por meiosis.',
            correct: true,
            feedback: 'Correcto. Los peritecios son cuerpos fructíferos que protegen los ascos. Allí ocurre la meiosis y se forman las ascosporas.'
          },
          {
            id: 'b',
            text: 'Producir conidios asexuales por mitosis.',
            correct: false,
            feedback: 'Incorrecto. Los conidios se forman en conidióforos. Los peritecios pertenecen a la fase sexual.'
          },
          {
            id: 'c',
            text: 'Digerir la cutícula de la hormiga.',
            correct: false,
            feedback: 'Incorrecto. La digestión y la penetración ocurren en la fase inicial de infección, no en los peritecios.'
          }
        ],
        phaseOptions: [
          {
            id: 'sexual',
            text: 'Fase sexual: meiosis y ascosporas.',
            correct: true,
            feedback: 'Correcto. La meiosis dentro de los ascos genera ascosporas con variabilidad genética.'
          },
          {
            id: 'asexual',
            text: 'Fase asexual: mitosis y conidios.',
            correct: false,
            feedback: 'Incorrecto. Los peritecios son parte de la fase sexual. La fase asexual produce conidios.'
          },
          {
            id: 'none',
            text: 'No se relaciona con la reproducción.',
            correct: false,
            feedback: 'Incorrecto. Los peritecios son estructuras reproductivas especializadas.'
          }
        ],
        explanation: 'Peritecio = protección + meiosis. Los ascos dentro del peritecio producen ascosporas haploides.'
      },
      {
        id: 'micelio',
        num: 3,
        name: 'Micelio',
        color: '#10b981',
        top: '62%',
        left: '53%',
        short: 'Red de filamentos dentro del cuerpo de la hormiga.',
        desc: 'Red de filamentos blanquecinos que se extiende por el interior del cuerpo y alrededor de los tejidos de la hormiga.',
        functionOptions: [
          {
            id: 'a',
            text: 'Absorber nutrientes y formar la red que altera la locomoción.',
            correct: true,
            feedback: 'Correcto. El micelio coloniza el interior, absorbe nutrientes y rodea músculos. Esa red participa en la manipulación de la conducta.'
          },
          {
            id: 'b',
            text: 'Realizar fotosíntesis para producir energía.',
            correct: false,
            feedback: 'Incorrecto. Los hongos no realizan fotosíntesis. Son heterótrofos y absorben nutrientes.'
          },
          {
            id: 'c',
            text: 'Producir ascosporas directamente.',
            correct: false,
            feedback: 'Incorrecto. Las ascosporas se producen por meiosis en los ascos, dentro de los peritecios. El micelio es crecimiento vegetativo.'
          }
        ],
        phaseOptions: [
          {
            id: 'vegetative',
            text: 'Crecimiento vegetativo: mitosis, sin formar gametos.',
            correct: true,
            feedback: 'Correcto. El micelio crece por mitosis. No es una fase sexual; es la red de colonización y absorción.'
          },
          {
            id: 'sexual',
            text: 'Fase sexual: meiosis para formar ascosporas.',
            correct: false,
            feedback: 'Incorrecto. La meiosis ocurre en los ascos de los peritecios, no en el micelio vegetativo.'
          },
          {
            id: 'none',
            text: 'No es tejido fúngico.',
            correct: false,
            feedback: 'Incorrecto. El micelio es la red de hifas del hongo.'
          }
        ],
        explanation: 'Micelio = red de hifas que crece por mitosis. Absorbe nutrientes y coloniza el cuerpo del hospedero.'
      },
      {
        id: 'conidio',
        num: 4,
        name: 'Conidios',
        color: '#3b82f6',
        top: '72%',
        left: '68%',
        short: 'Estructuras reproductivas en el extremo de hifas.',
        desc: 'Estructuras reproductivas pequeñas que se forman en el extremo de hifas especializadas. En la fotografía se observan como puntos claros sobre la hoja.',
        functionOptions: [
          {
            id: 'a',
            text: 'Reproducir asexualmente y colonizar rápidamente nuevos hospederos.',
            correct: true,
            feedback: 'Correcto. Los conidios son esporas asexuales producidas por mitosis. Su ventaja es la velocidad y el bajo costo energético; su desventaja es la falta de variabilidad.'
          },
          {
            id: 'b',
            text: 'Ser el producto de la meiosis.',
            correct: false,
            feedback: 'Incorrecto. Los conidios se producen por mitosis. Las ascosporas son el producto de la meiosis.'
          },
          {
            id: 'c',
            text: 'Ser células del sistema inmune de la hormiga.',
            correct: false,
            feedback: 'Incorrecto. Los conidios son células del hongo, no del sistema inmune del insecto.'
          }
        ],
        phaseOptions: [
          {
            id: 'asexual',
            text: 'Fase asexual: mitosis y clones.',
            correct: true,
            feedback: 'Correcto. Los conidios son la vía asexual: mitosis, clones y colonización rápida.'
          },
          {
            id: 'sexual',
            text: 'Fase sexual: meiosis y variabilidad.',
            correct: false,
            feedback: 'Incorrecto. Los conidios no se forman por meiosis. La fase sexual produce ascosporas.'
          },
          {
            id: 'none',
            text: 'No se relaciona con la reproducción.',
            correct: false,
            feedback: 'Incorrecto. Los conidios son esporas reproductivas asexuales.'
          }
        ],
        explanation: 'Conidio = espora asexual. Se forma por mitosis y permite colonizar rápido, pero no genera variabilidad genética.'
      }
    ]
  };

  /* =======================================================================
     ACTIVIDAD 2 · RUTAS REPRODUCTIVAS
     Seis escenarios. Cada elección suma a una ruta con ascosporas o conidios.
     ======================================================================= */
  const REPRODUCTION_DECISIONS = {
    title: 'Dos rutas reproductivas del hongo',
    intro: 'Ophiocordyceps no elige de forma consciente entre reproducción sexual y asexual: ambas rutas forman parte de su ciclo y dependen de las condiciones del ambiente y del hospedero. Analiza cada escenario, elige una ruta y explica cómo se relaciona con la evidencia. No hay una estrategia mejor en abstracto.',
    minChars: 50,
    scenarios: [
      {
        id: 'estable',
        title: 'Un bosque estable y una colonia conocida',
        scenario: 'La humedad y la temperatura son estables. Las hormigas de la zona pertenecen a una colonia numerosa y genéticamente parecida. El hongo ya colonizó a una hormiga y produce estructuras reproductivas.',
        hintWords: ['mitosis', 'clones', 'ambiente estable'],
        options: [
          {
            id: 'A',
            type: 'asexual',
            text: 'Producir conidios por mitosis: muchas copias idénticas en poco tiempo.',
            feedback: 'La ruta de los conidios produce clones mediante mitosis. Es rápida y de bajo costo, pero no genera nueva variabilidad genética.'
          },
          {
            id: 'B',
            type: 'sexual',
            text: 'Formar estroma y ascosporas por meiosis: menos descendientes, pero diferentes.',
            feedback: 'La ruta de las ascosporas produce menos descendientes y cuesta más energía, pero la recombinación genera combinaciones nuevas.'
          }
        ],
        explanation: 'En condiciones estables y con hospederos abundantes, la ruta de los conidios suele ser rápida y eficiente. La ruta de las ascosporas también es posible, pero su ventaja principal —la variabilidad— no es tan decisiva en un ambiente predecible. Ninguna ruta es “mejor” en abstracto.'
      },
      {
        id: 'nueva-colonia',
        title: 'Una colonia nueva con defensas',
        scenario: 'El hongo se encuentra en una colonia de hormigas que no había parasitado. Algunas obreras reconocen y atacan a la cepa original. El ambiente es húmedo, pero el hospedero es nuevo y variable.',
        hintWords: ['meiosis', 'recombinación', 'defensas', 'variabilidad'],
        options: [
          {
            id: 'A',
            type: 'sexual',
            text: 'Producir ascosporas por meiosis: descendientes con combinaciones nuevas.',
            feedback: 'La meiosis y la recombinación generan variabilidad. Si algunas combinaciones superan las defensas de la colonia, la selección natural puede favorecerlas.'
          },
          {
            id: 'B',
            type: 'asexual',
            text: 'Producir conidios por mitosis: miles de copias idénticas de la misma cepa.',
            feedback: 'Los clones son rápidos, pero si la colonia reconoce esa cepa, todos los descendientes comparten la misma vulnerabilidad.'
          }
        ],
        explanation: 'Ante un hospedero nuevo o que cambia sus defensas, la ruta con meiosis amplía el repertorio de combinaciones. No garantiza el éxito, pero aumenta la probabilidad de que alguna variante sobreviva. La ruta de los conidios sigue siendo posible, aunque la uniformidad genética es un riesgo.'
      },
      {
        id: 'sequia',
        title: 'Sequía y hospederos dispersos',
        scenario: 'Llega una estación seca. Las hormigas son escasas y están separadas por varios metros. Las esporas deben viajar lejos y alguna variante debe resistir las nuevas condiciones.',
        hintWords: ['dispersión', 'estroma', 'variabilidad'],
        options: [
          {
            id: 'A',
            type: 'sexual',
            text: 'Formar un estroma alto y dispersar ascosporas variables.',
            feedback: 'El estroma eleva los peritecios y la eyección activa ayuda a las ascosporas a salir de la capa de aire quieto. La variabilidad aporta combinaciones para un ambiente cambiante.'
          },
          {
            id: 'B',
            type: 'asexual',
            text: 'Liberar conidios clónicos cerca del suelo.',
            feedback: 'Los conidios pueden dispersarse y germinar, pero no generan nueva variabilidad y suelen quedar más cerca del sustrato.'
          }
        ],
        explanation: 'La altura del estroma y la eyección activa ayudan a las ascosporas a salir de la capa de aire quieto; la variabilidad aporta combinaciones para un ambiente cambiante. Los conidios también pueden dispersarse, pero no generan esa variabilidad y suelen quedar más cerca del sustrato.'
      },
      {
        id: 'abundancia',
        title: 'Hospederos abundantes y clima estable',
        scenario: 'En un invernadero hay muchas hormigas susceptibles, alimento abundante y condiciones constantes. La colonia aún no ha desarrollado una respuesta fuerte contra el hongo.',
        hintWords: ['mitosis', 'colonización', 'clones'],
        options: [
          {
            id: 'A',
            type: 'asexual',
            text: 'Producir conidios por mitosis y colonizar rápido.',
            feedback: 'Con hospederos abundantes y condiciones estables, la ruta de los conidios puede multiplicarse rápido y a bajo costo.'
          },
          {
            id: 'B',
            type: 'sexual',
            text: 'Formar estroma y ascosporas por meiosis.',
            feedback: 'La ruta de las ascosporas produce menos descendientes y requiere más tiempo; su ventaja es la variabilidad, que aquí no es el factor principal.'
          }
        ],
        explanation: 'Con hospederos abundantes y condiciones estables, la ruta de los conidios puede multiplicarse rápido y a bajo costo. La ruta de las ascosporas produce menos descendientes y requiere más tiempo; su ventaja es la variabilidad, que aquí no es el factor principal.'
      },
      {
        id: 'dispersion',
        title: 'Cruzar hasta nuevas colonias',
        scenario: 'Una colonia sana se encuentra a dos metros. Las esporas deben superar la capa de aire quieto que rodea el suelo y llegar a nuevos hospederos.',
        hintWords: ['estroma', 'eyección', 'dispersión'],
        options: [
          {
            id: 'A',
            type: 'sexual',
            text: 'Elevar el estroma y expulsar ascosporas activamente.',
            feedback: 'El estroma eleva los peritecios y la eyección activa lanza las ascosporas al aire, lo que aumenta el alcance.'
          },
          {
            id: 'B',
            type: 'asexual',
            text: 'Dejar caer conidios al suelo, justo bajo la hormiga.',
            feedback: 'Los conidios pueden infectar en el mismo sitio, pero la caída pasiva no resuelve por sí sola el cruce a otra colonia.'
          }
        ],
        explanation: 'El estroma eleva los peritecios y la eyección activa lanza las ascosporas al aire, lo que aumenta el alcance. Los conidios pueden infectar en el mismo sitio, pero la caída pasiva no resuelve por sí sola el cruce a otra colonia.'
      },
      {
        id: 'resistencia',
        title: 'Una cepa que ya no funciona',
        scenario: 'Después de varios ciclos con la misma cepa asexual, muchas hormigas de la zona sobreviven a la infección. Aparecen variantes del hongo con combinaciones nuevas.',
        hintWords: ['meiosis', 'recombinación', 'selección natural'],
        options: [
          {
            id: 'A',
            type: 'sexual',
            text: 'Favorecer la ruta de las ascosporas y generar nuevas combinaciones.',
            feedback: 'La variabilidad es materia prima de la evolución. Si la defensa del hospedero reconoce la cepa asexual, la ruta de las ascosporas puede generar combinaciones que la selección natural ponga a prueba.'
          },
          {
            id: 'B',
            type: 'asexual',
            text: 'Insistir con la misma cepa de clones, pero en mayor cantidad.',
            feedback: 'Producir más clones no cambia su información genética. Si la defensa del hospedero reconoce la cepa, aumentar el número no resuelve el problema.'
          }
        ],
        explanation: 'La variabilidad es materia prima de la evolución. Si la defensa del hospedero reconoce la cepa asexual, producir más clones no cambia su información genética. La ruta de las ascosporas puede generar combinaciones que la selección natural ponga a prueba.'
      }
    ]
  };

  /* =======================================================================
     GLOSARIO · 32 TÉRMINOS
     ======================================================================= */
  const GLOSSARY = [
    { term: 'Asca', tag: 'Reproducción', def: 'Célula en forma de saco donde ocurre la meiosis y se forman las ascosporas. Varios ascos se agrupan dentro de los peritecios.' },
    { term: 'Ascospora', tag: 'Reproducción', def: 'Espora haploide producida por meiosis dentro de un asca. Es la vía sexual y aporta variabilidad genética.' },
    { term: 'Apresorio', tag: 'Infección', def: 'Extremo hinchado de la hifa que se adhiere a la cutícula y ayuda a penetrarla mediante presión y enzimas.' },
    { term: 'Biopesticida', tag: 'Ciencia aplicada', def: 'Producto de origen biológico usado para controlar plagas. Debe evaluarse por su especificidad, efectos no objetivo y riesgo de resistencia.' },
    { term: 'Capa límite', tag: 'Dispersión', def: 'Capa de aire casi quieto que rodea la superficie del suelo. Dificulta que partículas pequeñas, como las esporas, se dispersen.' },
    { term: 'Co-evolución', tag: 'Ecología', def: 'Cambio recíproco entre especies que interactúan, por ejemplo un parásito y su hospedero, a lo largo de generaciones.' },
    { term: 'Conidio', tag: 'Reproducción', def: 'Espora asexual producida por mitosis en un conidióforo. Permite colonizar rápidamente y generar clones.' },
    { term: 'Conidióforo', tag: 'Estructura', def: 'Hifa especializada que sostiene y libera conidios.' },
    { term: 'Cordycipitaceae', tag: 'Taxonomía', def: 'Familia de hongos ascomicetos en la que se clasificó tradicionalmente a Ophiocordyceps. La clasificación actual ubica a este género en Ophiocordycipitaceae.' },
    { term: 'Cuerpo fructífero', tag: 'Estructura', def: 'Estructura que produce y protege esporas. En este caso, el estroma con peritecios.' },
    { term: 'Cutícula', tag: 'Infección', def: 'Cubierta externa del insecto, rica en quitina. Es la primera barrera que el hongo debe atravesar.' },
    { term: 'Espora', tag: 'Reproducción', def: 'Célula reproductiva y de dispersión. Puede ser sexual (ascospora) o asexual (conidio), según su origen.' },
    { term: 'Esporulación', tag: 'Reproducción', def: 'Producción y liberación de esporas por parte del hongo.' },
    { term: 'Estroma', tag: 'Estructura', def: 'Masa de tejido fúngico que sostiene los cuerpos fructíferos y eleva las esporas por encima del suelo.' },
    { term: 'Hemocele', tag: 'Anatomía', def: 'Cavidad interna del insecto que contiene hemolinfa y donde circulan nutrientes y células inmunitarias.' },
    { term: 'Hemolinfa', tag: 'Anatomía', def: 'Fluido circulatorio de los insectos. No es sangre de vertebrado, pero transporta nutrientes y participa en la defensa.' },
    { term: 'Hifa', tag: 'Estructura', def: 'Filamento tubular del hongo. Crece por su extremo y puede tener tabiques llamados septos.' },
    { term: 'Hospedero', tag: 'Ecología', def: 'Organismo que aloja a un parásito y le aporta recursos. En este caso, la hormiga Camponotus.' },
    { term: 'Meiosis', tag: 'Genética', def: 'División celular que reduce el número de cromosomas a la mitad y genera variabilidad mediante recombinación.' },
    { term: 'Micelio', tag: 'Estructura', def: 'Red de hifas. Es la unidad de crecimiento y absorción del hongo.' },
    { term: 'Microambiente', tag: 'Ecología', def: 'Condiciones locales de humedad, temperatura y luz que rodean a un organismo.' },
    { term: 'Mitosis', tag: 'Genética', def: 'División celular que produce dos células genéticamente idénticas. Se usa para crecimiento y reproducción asexual.' },
    { term: 'Mordida de la muerte', tag: 'Comportamiento', def: 'Conducta en la que la hormiga infectada muerde una nervadura y queda fija al sustrato antes de morir. Favorece la reproducción del hongo.' },
    { term: 'Ophiocordycipitaceae', tag: 'Taxonomía', def: 'Familia actual de Ophiocordyceps unilateralis. Agrupa hongos parásitos de insectos y otros artrópodos.' },
    { term: 'Parasitismo', tag: 'Ecología', def: 'Relación en la que un organismo vive a costa de otro y le causa daño. Puede ser ectoparásito o endoparásito.' },
    { term: 'Peritecio', tag: 'Estructura', def: 'Cuerpo fructífero en forma de frasco que contiene ascos y ascosporas. Es parte de la fase sexual.' },
    { term: 'Quitina', tag: 'Bioquímica', def: 'Polisacárido que forma la pared celular de los hongos y el exoesqueleto de los artrópodos.' },
    { term: 'Quitinasa', tag: 'Bioquímica', def: 'Enzima que degrada la quitina. Ayuda al hongo a penetrar la cutícula del insecto.' },
    { term: 'Recombinación genética', tag: 'Genética', def: 'Intercambio de fragmentos de ADN durante la meiosis. Es una fuente importante de variabilidad.' },
    { term: 'Saprófito', tag: 'Ecología', def: 'Organismo que obtiene nutrientes de materia orgánica muerta. Muchos hongos son saprófitos.' },
    { term: 'Selección natural', tag: 'Genética', def: 'Proceso por el cual las variantes mejor adaptadas a un ambiente dejan más descendientes.' },
    { term: 'Variabilidad genética', tag: 'Genética', def: 'Diversidad de combinaciones genéticas en una población. Es la materia prima de la evolución.' }
  ];

  const MYTHS = [
    {
      myth: '“El hongo devora el cerebro de la hormiga.”',
      reality: 'Los estudios muestran hifas alrededor de músculos, pero no una invasión del cerebro. El hongo altera la conducta y la locomoción; no destruye el sistema nervioso central.'
    },
    {
      myth: '“La reproducción sexual siempre es mejor que la asexual.”',
      reality: 'No siempre. La asexual es rápida y barata para explotar un ambiente estable; la sexual genera variabilidad y ayuda en ambientes cambiantes. Cada estrategia tiene costos y beneficios.'
    },
    {
      myth: '“Los hongos son plantas.”',
      reality: 'Los hongos forman un reino independiente: son eucariotas heterótrofos con pared de quitina y no realizan fotosíntesis.'
    },
    {
      myth: '“El polvo blanco sobre la hormiga son huevos.”',
      reality: 'Son esporas, probablemente conidios. Los hongos no ponen huevos; producen esporas para reproducirse y dispersarse.'
    },
    {
      myth: '“Cordyceps cura todas las enfermedades.”',
      reality: 'No hay evidencia científica de que cure todas las enfermedades. Algunas especies se estudian por sus compuestos, pero no son un tratamiento general ni deben usarse sin supervisión.'
    },
    {
      myth: '“Si es natural, no puede dañar el ecosistema.”',
      reality: '“Natural” no significa “inocuo”. Un biopesticida puede afectar especies no objetivo; por eso se exigen pruebas de especificidad y evaluación de riesgos.'
    }
  ];

  const SOURCES = [
    'Hughes, D. P., Andersen, S. B., Hywel-Jones, N. L., Himaman, W., Billen, J., & Boomsma, J. J. (2011). Behavioral mechanisms and morphological symptoms of zombie ants dying from fungal infection. BMC Ecology, 11, 13.',
    'Evans, H. C., Elliot, S. L., & Hughes, D. P. (2011). Ophiocordyceps unilateralis: A keystone species for unraveling ecosystem functioning and biodiversity of fungi in tropical forests? Communicative & Integrative Biology, 4(5), 598–602.',
    'de Bekker, C., Quevillon, L. E., Smith, P. B., Fleming, K. R., Ghosh, D., Patterson, A. D., & Hughes, D. P. (2014). Species-specific ant brain manipulation by a specialized fungal parasite. BMC Evolutionary Biology, 14, 166.',
    'Pontoppidan, M.-B., Himaman, W., Hywel-Jones, N. L., Boomsma, J. J., & Hughes, D. P. (2009). Graveyards on the move: the spatio-temporal distribution of dead Ophiocordyceps-infected ants. PLoS ONE, 4(3), e4835.',
    'Hibbett, D. S., et al. (2007). A higher-level phylogenetic classification of the Fungi. Mycological Research, 111(5), 509–547.',
    'Urry, L. A., Cain, M. L., Wasserman, S. A., Minorsky, P. V., & Orr, R. B. (2020). Campbell Biology (12.ª ed.). Pearson. Capítulos de mitosis, meiosis y hongos.',
    'Ministerio de Educación Nacional de Colombia. (2006). Estándares básicos de competencias en ciencias naturales y ciencias sociales. Bogotá: MEN.',
    'Wikimedia Commons. (s. f.). Complex Ophiocordyceps unilateralis [fotografía]. CC BY 4.0. Uso educativo.'
  ];

  /* -----------------------------------------------------------------------
     Distribución pedagógica de la opción correcta
     Las preguntas no deben tener casi todas la respuesta en A. Se reordena
     cada lista y se renumeran las opciones A, B, C, D sin cambiar su contenido.
     ----------------------------------------------------------------------- */
  const CORRECT_POSITION = {
    1: 1,  // B
    2: 2,  // C
    3: 0,  // A
    4: 3,  // D
    5: 0,  // A
    6: 1,  // B
    7: 2,  // C
    8: 1,  // B
    9: 2,  // C
    10: 0, // A
    11: 2  // C
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
