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
      desc: 'Las hifas crecen y forman una red de micelio dentro del cuerpo de la pupa. Absorbe nutrientes y coloniza los tejidos del hospedero.'
    },
    {
      id: 3,
      name: 'Estroma y peritecios',
      short: 'Estroma (fase sexual)',
      desc: 'El hongo forma estromas anaranjados que salen del cuerpo de la pupa. Dentro de los peritecios, la meiosis produce ascosporas variables.'
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
    'Cordyceps militaris pertenece a la familia Cordycipitaceae y parasita larvas y pupas de lepidópteros; no manipula la conducta de hormigas.',
    'El estroma eleva los peritecios y la forma del cuerpo fructífero se relaciona con la dispersión de las ascosporas.'
  ];

  /* =======================================================================
     ACTIVIDAD 1 · 12 PREGUNTAS CON FINAL DEFINIDO
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
      topic: 'Germinación e infección',
      stage: 1,
      question: '¿Cómo atraviesa la espora la cutícula de la pupa?',
      scenario: 'Una ascospora queda sobre la cutícula de una pupa de polilla. Para infectar debe adherirse, germinar y entrar sin ser eliminada por las defensas del insecto.',
      options: [
        {
          id: 'A',
          text: 'Espera a que la pupa la coma y luego crece en el intestino.',
          correct: false,
          feedback: 'Incorrecto. La espora no necesita ser ingerida: germina sobre la cutícula y la penetra activamente.'
        },
        {
          id: 'B',
          text: 'Se adhiere, forma un tubo germinativo y un apresorio; luego penetra con presión y enzimas.',
          correct: true,
          feedback: 'Correcto. La espora germina, el apresorio se fija a la cutícula y la hifa entra con presión y enzimas como quitinasas y proteasas.'
        },
        {
          id: 'C',
          text: 'Entra por las alas y se convierte en una célula sanguínea.',
          correct: false,
          feedback: 'Incorrecto. El hongo no se transforma en una célula del insecto. Forma hifas y coloniza los tejidos.'
        },
        {
          id: 'D',
          text: 'Se disuelve en la hemolinfa sin germinar.',
          correct: false,
          feedback: 'Incorrecto. La espora debe germinar para producir hifas; si se disuelve sin germinar, no infecta.'
        }
      ],
      explanation: 'La germinación convierte una espora en una hifa. El apresorio es una estructura de anclaje y penetración; la combinación de presión y enzimas permite entrar sin necesidad de que la pupa coma la espora.',
      keyIdea: 'Germinación → tubo germinativo → apresorio → penetración por presión y enzimas.'
    },
    {
      id: 3,
      topic: 'Estructuras del hongo',
      stage: 2,
      question: '¿Cuál es la diferencia biológica entre una hifa y un micelio en este proceso de infección?',
      scenario: 'Al observar al microscopio el tejido de la pupa infectada, se distingue una estructura invasiva. Imagina dos vistas: la primera muestra un único tubo microscópico penetrando un tejido; la segunda muestra una extensa red de estos tubos colonizando el cuerpo del insecto para absorber sus nutrientes.',
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
      id: 4,
      topic: 'Genética celular',
      stage: 3,
      question: 'Basándote en el esquema y los procesos celulares, ¿cuál es la diferencia clave entre las esporas producidas en un conidióforo (mitosis) y las producidas en el peritecio (meiosis)?',
      scenario: 'Cordyceps militaris puede producir conidios en conidióforos, donde células haploides (n) se dividen por mitosis, o formar estromas con peritecios, donde ocurre la meiosis.',
      options: [
        {
          id: 'A',
          text: 'Las esporas del conidióforo son clones (n → n), mientras que la meiosis en el peritecio genera ascosporas con variabilidad genética (2n → n).',
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
          text: 'Ambas divisiones producen clones genéticamente idénticos, pero la mitosis ocurre dentro de la pupa y la meiosis exclusivamente en el exterior para dispersarse.',
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
      explanation: 'Mitosis: una célula n produce dos células n idénticas; es la base de los clones. Meiosis: una célula 2n produce células n con recombinación; genera variabilidad. En C. militaris, los conidios son la vía asexual y las ascosporas la vía sexual.',
      keyIdea: 'Conidios = mitosis = clones. Ascosporas = meiosis = variabilidad.'
    },
    {
      id: 5,
      topic: 'Reproducción fúngica',
      stage: 3,
      question: '¿Cuál es la diferencia entre un conidio y una ascospora?',
      scenario: 'En el laboratorio se observan dos tipos de esporas: unas se forman en la punta de hifas especializadas y otras dentro de sacos llamados ascos, protegidos en peritecios.',
      options: [
        {
          id: 'A',
          text: 'El conidio es una espora asexual formada por mitosis; la ascospora es sexual y se forma por meiosis dentro de un asca.',
          correct: true,
          feedback: 'Correcto. El conidio se produce por mitosis en un conidióforo; la ascospora se forma por meiosis dentro de un asca.'
        },
        {
          id: 'B',
          text: 'El conidio es una espora sexual formada por meiosis; la ascospora es asexual y se forma por mitosis.',
          correct: false,
          feedback: 'Incorrecto. Los nombres están invertidos. Los conidios son la vía asexual y las ascosporas la vía sexual.'
        },
        {
          id: 'C',
          text: 'Ambos son esporas de la pupa que el hongo recicla.',
          correct: false,
          feedback: 'Incorrecto. Las esporas son células del hongo, no de la pupa. El hongo las produce para reproducirse y dispersarse.'
        },
        {
          id: 'D',
          text: 'No hay diferencia: ambos se forman por mitosis en el estroma.',
          correct: false,
          feedback: 'Incorrecto. Solo los conidios se forman por mitosis; las ascosporas se forman por meiosis dentro de los ascos.'
        }
      ],
      explanation: 'Conidio: espora asexual formada en un conidióforo por mitosis. Ascospora: espora sexual formada por meiosis dentro de un asca, que está protegida en un peritecio. Ambas sirven para dispersarse, pero tienen distinto origen y distinta diversidad genética.',
      keyIdea: 'Conidios = mitosis = clones. Ascosporas = meiosis = variabilidad.'
    },
    {
      id: 6,
      topic: 'Anatomía funcional',
      stage: 3,
      question: '¿Qué relación hay entre el estroma y los peritecios?',
      scenario: 'Del cuerpo de una pupa emerge un cuerpo fructífero naranja. En su superficie se ven puntos pequeños; al microscopio, esos puntos contienen sacos con ascosporas.',
      options: [
        {
          id: 'A',
          text: 'El estroma produce directamente las ascosporas; los peritecios son la pupa.',
          correct: false,
          feedback: 'Incorrecto. El estroma sostiene y eleva los peritecios; las ascosporas se producen dentro de los ascos, en los peritecios.'
        },
        {
          id: 'B',
          text: 'El estroma sostiene y eleva los peritecios; dentro de los peritecios, los ascos producen ascosporas por meiosis.',
          correct: true,
          feedback: 'Correcto. El estroma es la estructura de soporte y altura; los peritecios protegen los ascos donde ocurre la meiosis.'
        },
        {
          id: 'C',
          text: 'El estroma es el cerebro del insecto; los peritecios son sus huevos.',
          correct: false,
          feedback: 'Incorrecto. El estroma es tejido del hongo, no del insecto. Los peritecios producen esporas, no huevos.'
        },
        {
          id: 'D',
          text: 'Los peritecios sostienen el estroma; el estroma produce conidios por mitosis.',
          correct: false,
          feedback: 'Incorrecto. La relación es la contraria: el estroma sostiene los peritecios. Además, los conidios se producen en conidióforos, no en el estroma.'
        }
      ],
      explanation: 'La forma se explica por la función: el estroma eleva los peritecios, los peritecios protegen los ascos y los ascos producen ascosporas. La altura facilita que las esporas salgan de la capa de aire quieto del suelo y el viento las disperse.',
      keyIdea: 'Estroma = soporte y altura. Peritecios = protección y reproducción sexual.'
    },
    {
      id: 7,
      topic: 'Ciclo de vida',
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
      id: 8,
      topic: 'Ecología del hongo',
      stage: 2,
      question: '¿Por qué C. militaris suele encontrarse en el suelo y la hojarasca?',
      scenario: 'Los cuerpos fructíferos emergen cerca de pupas enterradas, en sitios húmedos, frescos y con materia orgánica en descomposición.',
      options: [
        {
          id: 'A',
          text: 'Porque necesita luz solar directa para fotosintetizar.',
          correct: false,
          feedback: 'Incorrecto. El hongo no fotosintetiza; no necesita luz solar directa para producir alimento.'
        },
        {
          id: 'B',
          text: 'Porque la humedad y la temperatura estable favorecen la germinación y el crecimiento; la pupa es el hospedero.',
          correct: true,
          feedback: 'Correcto. El microambiente húmedo y fresco favorece la germinación de esporas y el crecimiento del micelio; la pupa aporta nutrientes.'
        },
        {
          id: 'C',
          text: 'Porque el viento lo entierra para protegerlo.',
          correct: false,
          feedback: 'Incorrecto. El viento dispersa esporas, no entierra cuerpos fructíferos. El suelo húmedo ofrece condiciones adecuadas.'
        },
        {
          id: 'D',
          text: 'Porque solo crece sobre plásticos y metales.',
          correct: false,
          feedback: 'Incorrecto. Es un hongo que parasita insectos y crece en ambientes con materia orgánica; no se alimenta de plásticos o metales.'
        }
      ],
      explanation: 'El microambiente húmedo y fresco favorece la germinación de esporas y el crecimiento del micelio. La pupa enterrada aporta nutrientes; el hongo no fotosintetiza.',
      keyIdea: 'Humedad + temperatura estable + hospedero = condiciones para crecer.'
    },
    {
      id: 9,
      topic: 'Física de la dispersión',
      stage: 4,
      question: '¿Qué adaptación ayuda a que las ascosporas salgan de la capa de aire quieto y se dispersen?',
      scenario: 'El estroma eleva los peritecios por encima del suelo. En la madurez, las ascosporas son expulsadas activamente y el viento las transporta.',
      options: [
        {
          id: 'A',
          text: 'Que las esporas caminen hasta otra pupa.',
          correct: false,
          feedback: 'Incorrecto. Las esporas no caminan; son partículas microscópicas que dependen del viento y de la eyección activa.'
        },
        {
          id: 'B',
          text: 'Que el estroma sea subterráneo y no se eleve.',
          correct: false,
          feedback: 'Incorrecto. Un estroma subterráneo dificultaría la dispersión. La altura ayuda a salir de la capa de aire quieto.'
        },
        {
          id: 'C',
          text: 'La altura del estroma y la eyección activa de ascosporas, que las sacan de la capa límite.',
          correct: true,
          feedback: 'Correcto. El estroma eleva los peritecios y la eyección activa lanza las ascosporas al aire, fuera de la capa límite del suelo.'
        },
        {
          id: 'D',
          text: 'Que las esporas sean más grandes que una hoja.',
          correct: false,
          feedback: 'Incorrecto. Las esporas son microscópicas. Un tamaño mayor no garantiza dispersión y no corresponde a este hongo.'
        }
      ],
      explanation: 'La dispersión es un problema físico: una partícula pequeña que cae cerca del suelo queda atrapada en la capa límite. El estroma alto y el disparo activo de ascosporas las sacan de esa zona y el viento las puede llevar a nuevos hospederos.',
      keyIdea: 'Altura + eyección activa + viento = mayor distancia de dispersión.'
    },
    {
      id: 10,
      topic: 'Co-evolución',
      stage: 4,
      question: '¿Qué indica que C. militaris infecte principalmente pupas de lepidópteros y no humanos?',
      scenario: 'En el bosque, solo ciertas pupas de mariposas y polillas desarrollan la infección; otros insectos y los seres humanos no son hospederos.',
      options: [
        {
          id: 'A',
          text: 'Que el hongo tiene especificidad de hospedero y probable coevolución con los lepidópteros.',
          correct: true,
          feedback: 'Correcto. La especificidad de hospedero indica que el hongo reconoce y coloniza solo ciertos grupos; la coevolución explica adaptaciones recíprocas.'
        },
        {
          id: 'B',
          text: 'Que el hongo puede infectar cualquier animal, pero prefiere a las pupas.',
          correct: false,
          feedback: 'Incorrecto. La especificidad de hospedero implica que no infecta a cualquier animal. Los humanos no son hospederos.'
        },
        {
          id: 'C',
          text: 'Que el hongo es un patógeno humano peligroso.',
          correct: false,
          feedback: 'Incorrecto. C. militaris no es un patógeno humano. Su hospedero son insectos, principalmente pupas de lepidópteros.'
        },
        {
          id: 'D',
          text: 'Que el hongo es un patógeno de plantas que vive en insectos.',
          correct: false,
          feedback: 'Incorrecto. Es un hongo parásito de insectos, no un patógeno de plantas. Su hospedero es un artrópodo.'
        }
      ],
      explanation: 'La especificidad de hospedero significa que el parásito reconoce y coloniza solo ciertos grupos. Esto reduce el riesgo para otros organismos, pero también hace al hongo vulnerable si su hospedero escasea. La coevolución explica las adaptaciones recíprocas entre ambos.',
      keyIdea: 'Especificidad de hospedero + coevolución = adaptaciones recíprocas.'
    },
    {
      id: 11,
      topic: 'Método científico',
      stage: 3,
      question: '¿Cuál es el mejor diseño para comprobar si la temperatura afecta el crecimiento del estroma?',
      scenario: 'Un equipo quiere saber si distintas temperaturas cambian la velocidad con que C. militaris forma estromas sobre pupas.',
      options: [
        {
          id: 'A',
          text: 'Observar un solo estroma durante un minuto.',
          correct: false,
          feedback: 'Incorrecto. Una sola observación y un solo individuo no permiten comparar ni repetir. No hay grupo control.'
        },
        {
          id: 'B',
          text: 'Comparar grupos de pupas infectadas a varias temperaturas, con repeticiones, midiendo el tiempo hasta la aparición del estroma.',
          correct: true,
          feedback: 'Correcto. Se comparan grupos, se controlan variables, se repite y se mide una variable observable: el tiempo hasta el estroma.'
        },
        {
          id: 'C',
          text: 'Preguntar a una persona si cree que el calor ayuda.',
          correct: false,
          feedback: 'Incorrecto. Una opinión puede orientar una hipótesis, pero no reemplaza datos experimentales medibles.'
        },
        {
          id: 'D',
          text: 'Cambiar temperatura y humedad al mismo tiempo, sin grupo control.',
          correct: false,
          feedback: 'Incorrecto. Si cambian dos variables a la vez, no se sabe cuál causó el efecto. Falta un grupo control y control de variables.'
        }
      ],
      explanation: 'Un experimento riguroso compara grupos, controla variables, repite mediciones y usa una variable medible. Para este caso: varias temperaturas, grupos replicados, misma humedad y sustrato, y registro del tiempo hasta la aparición del estroma.',
      keyIdea: 'Grupo control + repetición + variable medible = evidencia confiable.'
    },
    {
      id: 12,
      type: 'open',
      topic: 'Argumentación científica',
      stage: 4,
      question: 'Si el clima cambia de repente o las pupas desarrollan nuevas defensas, ¿por qué le sirve al hongo tener pocos descendientes diferentes (reproducción sexual) en lugar de miles de clones idénticos?',
      scenario: 'C. militaris puede producir miles de conidios clónicos por mitosis o menos ascosporas por meiosis. El ambiente cambia y las pupas desarrollan nuevas defensas.',
      minChars: 180,
      requiredKeywords: ['variabilidad', 'recombinación', 'selección natural', 'hospedero', 'ambiente'],
      minKeywords: 2,
      modelAnswer: 'La reproducción sexual mezcla información genética mediante la recombinación durante la meiosis. Así produce descendientes diferentes. Si el clima cambia o las pupas desarrollan nuevas defensas, algunas de esas combinaciones pueden sobrevivir y dejar más descendientes; la selección natural favorece a las mejor adaptadas. Aunque la vía sexual produce menos descendientes y cuesta más energía, aumenta la probabilidad de que la población del hongo no se extinga cuando el ambiente o el hospedero cambian. La vía asexual, con mitosis y clones, es rápida y útil en ambientes estables, pero no genera esa variedad.',
      keyIdea: 'La variabilidad no garantiza el éxito individual, pero aumenta la probabilidad de que la población sobreviva a un cambio.'
    }
  ];

  /* =======================================================================
     ACTIVIDAD 3 · DISECCIÓN GUIADA
     ======================================================================= */
  const DISSECTION = {
    title: 'Disección virtual: ¿por qué existe cada estructura?',
    intro: 'Modelo: Cordyceps militaris, familia Cordycipitaceae. Observa la fotografía de una pupa parasitada. Selecciona una estructura, identifica su función y relaciónala con la fase del ciclo que corresponde. Debes completar las cuatro estructuras.',
    photoCredit: 'Fotografía: Wikimedia Commons, “Puppen-Kernkeule Cordyceps militaris”, Holger Krisp, CC BY 3.0. Uso educativo.',
    structures: [
      {
        id: 'estroma',
        num: 1,
        name: 'Estroma',
        color: '#f97316',
        top: '30.6%',
        left: '26.3%',
        short: 'Cuerpo fructífero naranja que se eleva sobre el sustrato.',
        desc: 'Estructura alargada y anaranjada que sale del cuerpo de la pupa y se eleva sobre el sustrato. Su superficie está cubierta de pequeños puntos.',
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
        explanation: 'Estroma = soporte y altura. No produce las esporas directamente, pero eleva y protege los peritecios que sí lo hacen.',
        keyIdea: 'Estroma = soporte y altura.'
      },
      {
        id: 'peritecio',
        num: 2,
        name: 'Peritecios',
        color: '#facc15',
        top: '11.1%',
        left: '16.3%',
        short: 'Puntos pequeños en la superficie del estroma.',
        desc: 'Estructuras pequeñas, redondeadas o en forma de frasco, agrupadas en la superficie del estroma. A simple vista no se distingue su interior.',
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
        explanation: 'Peritecio = protección + meiosis. Los ascos dentro del peritecio producen ascosporas haploides.',
        keyIdea: 'Peritecio = protección + meiosis.'
      },
      {
        id: 'micelio',
        num: 3,
        name: 'Micelio',
        color: '#10b981',
        top: '69.4%',
        left: '39.6%',
        short: 'Red de filamentos en el interior de la pupa y en la base.',
        desc: 'Red de filamentos blanquecinos que se extiende por el interior del cuerpo y alrededor de los tejidos de la pupa.',
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
        explanation: 'Micelio = red de hifas que crece por mitosis. Absorbe nutrientes y coloniza el cuerpo del hospedero.',
        keyIdea: 'Micelio = red de hifas que coloniza.'
      },
      {
        id: 'pupa',
        num: 4,
        name: 'Pupa hospedera',
        color: '#3b82f6',
        top: '66.7%',
        left: '77.1%',
        short: 'Cuerpo segmentado del que emergen los estromas.',
        desc: 'Cuerpo segmentado y parduzco del que emergen los cuerpos fructíferos. Conserva restos de tejido y está rodeado de tierra.',
        functionOptions: [
          {
            id: 'a',
            text: 'Aportar nutrientes y un sitio de desarrollo al hongo.',
            correct: true,
            feedback: 'Correcto. La pupa es el hospedero: aporta nutrientes y un ambiente interno donde el hongo se desarrolla.'
          },
          {
            id: 'b',
            text: 'Ser el órgano reproductor del hongo.',
            correct: false,
            feedback: 'Incorrecto. La pupa es el hospedero, no un órgano del hongo. Los órganos reproductores son el estroma y los peritecios.'
          },
          {
            id: 'c',
            text: 'Producir ascosporas por meiosis.',
            correct: false,
            feedback: 'Incorrecto. Las ascosporas se producen en los ascos del hongo; la pupa no las produce.'
          }
        ],
        phaseOptions: [
          {
            id: 'host',
            text: 'Hospedero: no es una fase del hongo; es el organismo parasitado.',
            correct: true,
            feedback: 'Correcto. La pupa no es una fase del hongo: es el hospedero que el hongo coloniza y del que obtiene nutrientes.'
          },
          {
            id: 'sexual',
            text: 'Fase sexual del hongo.',
            correct: false,
            feedback: 'Incorrecto. La fase sexual ocurre en el estroma y los peritecios del hongo, no en la pupa.'
          },
          {
            id: 'asexual',
            text: 'Fase asexual del hongo.',
            correct: false,
            feedback: 'Incorrecto. La fase asexual produce conidios en conidióforos. La pupa es el hospedero.'
          }
        ],
        explanation: 'La pupa es el hospedero; el hongo la coloniza y absorbe sus nutrientes. No es una estructura fúngica ni una fase del hongo.',
        keyIdea: 'Pupa = hospedero, no estructura del hongo.'
      }
    ]
  };

  /* =======================================================================
     ACTIVIDAD 2 · RUTAS REPRODUCTIVAS
     Seis escenarios. Cada elección suma a una ruta con ascosporas o conidios.
     ======================================================================= */
  const REPRODUCTION_DECISIONS = {
    title: 'Dos rutas reproductivas del hongo',
    intro: 'Cordyceps militaris no elige de forma consciente entre reproducción sexual y asexual: ambas rutas forman parte de su ciclo y dependen de las condiciones del ambiente y del hospedero. Analiza cada escenario, elige una ruta y explica cómo se relaciona con la evidencia. No hay una estrategia mejor en abstracto.',
    minChars: 50,
    scenarios: [
      {
        id: 'estable',
        title: 'Un bosque estable y pupas abundantes',
        scenario: 'La humedad y la temperatura son estables. En la hojarasca hay muchas pupas de lepidópteros y el hongo ya colonizó a una de ellas. Las condiciones son predecibles.',
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
        id: 'nueva-poblacion',
        title: 'Una población nueva con defensas',
        scenario: 'El hongo llega a un parche de pupas que no había parasitado. Algunas pupas reconocen y neutralizan la cepa original. El ambiente es húmedo, pero el hospedero es nuevo y variable.',
        hintWords: ['meiosis', 'recombinación', 'defensas', 'variabilidad'],
        options: [
          {
            id: 'A',
            type: 'sexual',
            text: 'Producir ascosporas por meiosis: descendientes con combinaciones nuevas.',
            feedback: 'La meiosis y la recombinación generan variabilidad. Si algunas combinaciones superan las defensas de las pupas, la selección natural puede favorecerlas.'
          },
          {
            id: 'B',
            type: 'asexual',
            text: 'Producir conidios por mitosis: miles de copias idénticas de la misma cepa.',
            feedback: 'Los clones son rápidos, pero si las pupas reconocen esa cepa, todos los descendientes comparten la misma vulnerabilidad.'
          }
        ],
        explanation: 'Ante un hospedero nuevo o que cambia sus defensas, la ruta con meiosis amplía el repertorio de combinaciones. No garantiza el éxito, pero aumenta la probabilidad de que alguna variante sobreviva. La ruta de los conidios sigue siendo posible, aunque la uniformidad genética es un riesgo.'
      },
      {
        id: 'sequia',
        title: 'Sequía y pupas dispersas',
        scenario: 'Llega una estación seca. Las pupas son escasas y están separadas por varios metros. Las esporas deben viajar lejos y alguna variante debe resistir las nuevas condiciones.',
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
        title: 'Pupas abundantes y clima estable',
        scenario: 'En un invernadero hay muchas pupas susceptibles, alimento abundante y condiciones constantes. Las pupas aún no han desarrollado una respuesta fuerte contra el hongo.',
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
        title: 'Cruzar hasta nuevos parches de pupas',
        scenario: 'Un parche de pupas se encuentra a dos metros. Las esporas deben superar la capa de aire quieto que rodea el suelo y llegar a nuevos hospederos.',
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
            text: 'Dejar caer conidios al suelo, justo bajo la pupa.',
            feedback: 'Los conidios pueden infectar en el mismo sitio, pero la caída pasiva no resuelve por sí sola el cruce a otro parche.'
          }
        ],
        explanation: 'El estroma eleva los peritecios y la eyección activa lanza las ascosporas al aire, lo que aumenta el alcance. Los conidios pueden infectar en el mismo sitio, pero la caída pasiva no resuelve por sí sola el cruce a otro parche.'
      },
      {
        id: 'resistencia',
        title: 'Una cepa que ya no funciona',
        scenario: 'Después de varios ciclos con la misma cepa asexual, muchas pupas de la zona sobreviven a la infección. Aparecen variantes del hongo con combinaciones nuevas.',
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
     GLOSARIO · 33 TÉRMINOS
     ======================================================================= */
  const GLOSSARY = [
    { term: 'Asca', tag: 'Reproducción', def: 'Célula en forma de saco donde ocurre la meiosis y se forman las ascosporas. Varios ascos se agrupan dentro de los peritecios.' },
    { term: 'Ascospora', tag: 'Reproducción', def: 'Espora haploide producida por meiosis dentro de un asca. Es la vía sexual y aporta variabilidad genética.' },
    { term: 'Apresorio', tag: 'Infección', def: 'Extremo hinchado de la hifa que se adhiere a la cutícula y ayuda a penetrarla mediante presión y enzimas.' },
    { term: 'Capa límite', tag: 'Dispersión', def: 'Capa de aire casi quieto que rodea la superficie del suelo. Dificulta que partículas pequeñas, como las esporas, se dispersen.' },
    { term: 'Co-evolución', tag: 'Ecología', def: 'Cambio recíproco entre especies que interactúan, por ejemplo un hongo parásito y las pupas de lepidópteros que infecta, a lo largo de generaciones.' },
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
    { term: 'Meiosis', tag: 'Genética', def: 'División celular que reduce el número de cromosomas a la mitad y genera variabilidad mediante recombinación.' },
    { term: 'Micelio', tag: 'Estructura', def: 'Red de hifas. Es la unidad de crecimiento y absorción del hongo.' },
    { term: 'Microambiente', tag: 'Ecología', def: 'Condiciones locales de humedad, temperatura y luz que rodean a un organismo.' },
    { term: 'Mitosis', tag: 'Genética', def: 'División celular que produce dos células genéticamente idénticas. Se usa para crecimiento y reproducción asexual.' },
    { term: 'Parasitismo', tag: 'Ecología', def: 'Relación en la que un organismo vive a costa de otro y le causa daño. Puede ser ectoparásito o endoparásito.' },
    { term: 'Peritecio', tag: 'Estructura', def: 'Cuerpo fructífero en forma de frasco que contiene ascos y ascosporas. Es parte de la fase sexual.' },
    { term: 'Pupa', tag: 'Ecología', def: 'Etapa de desarrollo de insectos holometábolos. En esta actividad, el hospedero del que emergen los estromas.' },
    { term: 'Quitina', tag: 'Bioquímica', def: 'Polisacárido que forma la pared celular de los hongos y el exoesqueleto de los artrópodos.' },
    { term: 'Quitinasa', tag: 'Bioquímica', def: 'Enzima que degrada la quitina. Ayuda al hongo a penetrar la cutícula del insecto.' },
    { term: 'Recombinación genética', tag: 'Genética', def: 'Intercambio de fragmentos de ADN durante la meiosis. Es una fuente importante de variabilidad.' },
    { term: 'Saprófito', tag: 'Ecología', def: 'Organismo que obtiene nutrientes de materia orgánica muerta. Muchos hongos son saprófitos.' },
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
      reality: 'No siempre. La asexual es rápida y barata para explotar un ambiente estable; la sexual genera variabilidad y ayuda en ambientes cambiantes. Cada estrategia tiene costos y beneficios.'
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
