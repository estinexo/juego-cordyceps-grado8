/* =========================================================================
   APLICACIÓN · Lógica de las actividades
   Requiere data.js, audio.js y canvas.js.
   ========================================================================= */
(function () {
  'use strict';

  const D = window.CORDYCEPS_DATA;
  if (!D) {
    console.error('No se encontró CORDYCEPS_DATA. Revisa js/data.js.');
    return;
  }

  const PROFILE_KEY = 'cordyceps_grado8_profile_v1';
  const TOTAL_A1 = D.ACTIVITY1.length;
  const TOTAL_MC = D.ACTIVITY1.filter(function (question) { return question.type !== 'open'; }).length;
  const TOTAL_DEC = D.REPRODUCTION_DECISIONS.scenarios.length;
  const TOTAL_A2 = D.DISSECTION.structures.length;
  const MIN_JUSTIFY = 40;
  const MIN_DECISION_JUSTIFY = D.REPRODUCTION_DECISIONS.minChars;

  const state = {
    profile: null,
    a1Index: 0,
    answers: {},
    selectedOption: null,
    openDraft: {},
    justDraft: {},
    a1Finished: false,
    reviewOpen: false,
    decisionIndex: 0,
    decisionSelected: null,
    decisionAnswers: {},
    decisionDraft: {},
    decisionFinished: false,
    a2Selected: null,
    a2Picks: {},
    a2Answers: {},
    a2Completed: new Set(),
    a2Attempts: {},
    a2Celebrated: false,
    startedAt: Date.now(),
    timerId: null,
    visualStage: 0
  };

  const els = {};

  /* ------------------------------- Utilidades ------------------------------- */
  function $(selector, root) {
    return (root || document).querySelector(selector);
  }

  function $$(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function normalizeText(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (character) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[character];
    });
  }

  function slug(value) {
    return normalizeText(value)
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '')
      .slice(0, 48) || 'estudiante';
  }

  function formatDuration(totalSeconds) {
    const safe = Math.max(0, Math.floor(totalSeconds));
    const hours = Math.floor(safe / 3600);
    const minutes = Math.floor((safe % 3600) / 60);
    const seconds = safe % 60;
    if (hours > 0) {
      return [hours, minutes, seconds].map(function (part) {
        return String(part).padStart(2, '0');
      }).join(':');
    }
    return String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
  }

  function currentQuestion() {
    return D.ACTIVITY1[state.a1Index];
  }

  function answeredCount() {
    return Object.keys(state.answers).length;
  }

  function justifiedCount() {
    return D.ACTIVITY1.filter(function (question) {
      const answer = state.answers[question.id];
      return question.type !== 'open' && answer && String(answer.text || '').trim().length >= MIN_JUSTIFY;
    }).length;
  }

  function correctCount() {
    return Object.keys(state.answers).reduce(function (count, key) {
      return count + (state.answers[key].correct ? 1 : 0);
    }, 0);
  }

  function pad(text, width) {
    const value = String(text == null ? '' : text);
    return value + ' '.repeat(Math.max(0, width - value.length));
  }

  /* --------------------------------- Arranque -------------------------------- */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    cacheElements();
    loadProfile();
    bindEvents();
    renderStaticContent();
    renderStepper();
    renderStructureTabs();
    updateMarkers();
    renderGlossary();
    updateA1Chips();
    renderDecisionScenario(false);
    updateDecisionProgress();
    updateA2Progress();
    renderQuestion(false);

    if (window.CordycepsCanvas) {
      window.CordycepsCanvas.start();
    }

    if (state.profile) {
      updateProfileUI();
      startTimer();
    } else {
      openProfileModal(false);
    }
  }

  function cacheElements() {
    els.profileModal = $('#profileModal');
    els.profileForm = $('#profileForm');
    els.profileName = $('#profileName');
    els.profileCourse = $('#profileCourse');
    els.profileError = $('#profileError');
    els.profileCancel = $('#profileCancel');
    els.profileSubmit = $('#profileSubmit');
    els.profileTitle = $('#profileTitle');
    els.profileChip = $('#profileChip');
    els.profileDisplayName = $('#profileDisplayName');
    els.profileDisplayMeta = $('#profileDisplayMeta');
    els.elapsedTime = $('#elapsedTime');
    els.soundBtn = $('#soundBtn');
    els.downloadBtn = $('#downloadBtn');
    els.resetBtn = $('#resetBtn');

    els.tab1Status = $('#tab1Status');
    els.tabDecisionStatus = $('#tabDecisionStatus');
    els.tab2Status = $('#tab2Status');
    els.tab3Status = $('#tab3Status');

    els.a1ScoreChip = $('#a1ScoreChip');
    els.a1AnsweredChip = $('#a1AnsweredChip');
    els.a1JustifyChip = $('#a1JustifyChip');
    els.a1Workspace = $('#a1Workspace');
    els.qTopic = $('#qTopic');
    els.qCounter = $('#qCounter');
    els.qProgress = $('#qProgress');
    els.qProgressFill = $('#qProgressFill');
    els.qTitle = $('#qTitle');
    els.qScenario = $('#qScenario');
    els.optionsList = $('#optionsList');
    els.justifyAnswer = $('#justifyAnswer');
    els.justifyText = $('#justifyText');
    els.justifyCounter = $('#justifyCounter');
    els.justifyHint = $('#justifyHint');
    els.openAnswer = $('#openAnswer');
    els.openText = $('#openText');
    els.openCounter = $('#openCounter');
    els.openKeywords = $('#openKeywords');
    els.conceptChips = $('#conceptChips');
    els.qFeedback = $('#qFeedback');
    els.checkBtn = $('#checkBtn');
    els.nextBtn = $('#nextBtn');
    els.canvasCaption = $('#canvasCaption');
    els.stageStepper = $('#stageStepper');
    els.hintCard = $('#hintCard');
    els.hintText = $('#hintText');
    els.activity1Result = $('#activity1Result');
    els.resultContent = $('#resultContent');
    els.goA2Btn = $('#goA2Btn');
    els.downloadResultBtn = $('#downloadResultBtn');
    els.reviewBtn = $('#reviewBtn');
    els.reviewList = $('#reviewList');

    els.decisionWorkspace = $('#decisionWorkspace');
    els.decisionProgressChip = $('#decisionProgressChip');
    els.decisionPathChip = $('#decisionPathChip');
    els.decisionScenarioTag = $('#decisionScenarioTag');
    els.decisionCounter = $('#decisionCounter');
    els.decisionProgress = $('#decisionProgress');
    els.decisionProgressFill = $('#decisionProgressFill');
    els.decisionTitle = $('#decisionTitle');
    els.decisionScenario = $('#decisionScenario');
    els.decisionOptions = $('#decisionOptions');
    els.decisionJustifyBox = $('#decisionJustifyBox');
    els.decisionJustify = $('#decisionJustify');
    els.decisionJustifyCounter = $('#decisionJustifyCounter');
    els.decisionJustifyHint = $('#decisionJustifyHint');
    els.decisionHintChips = $('#decisionHintChips');
    els.decisionFeedback = $('#decisionFeedback');
    els.confirmDecisionBtn = $('#confirmDecisionBtn');
    els.nextDecisionBtn = $('#nextDecisionBtn');
    els.decisionResult = $('#decisionResult');
    els.decisionResultContent = $('#decisionResultContent');
    els.routeAsexualCount = $('#routeAsexualCount');
    els.routeSexualCount = $('#routeSexualCount');
    els.routeSexualFill = $('#routeSexualFill');
    els.routeAsexualFill = $('#routeAsexualFill');
    els.routeStatus = $('#routeStatus');
    els.routeHistory = $('#routeHistory');
    els.routeHistoryCount = $('#routeHistoryCount');
    els.goA3Btn = $('#goA3Btn');
    els.downloadDecisionBtn = $('#downloadDecisionBtn');
    els.restartDecisionBtn = $('#restartDecisionBtn');

    els.a2ProgressChip = $('#a2ProgressChip');
    els.a2Counter = $('#a2Counter');
    els.a2Progress = $('#a2Progress');
    els.a2ProgressFill = $('#a2ProgressFill');
    els.structureTabs = $('#structureTabs');
    els.structureEmpty = $('#structureEmpty');
    els.structureWorkspace = $('#structureWorkspace');
    els.structureNumber = $('#structureNumber');
    els.structureName = $('#structureName');
    els.structureDesc = $('#structureDesc');
    els.functionOptions = $('#functionOptions');
    els.phaseOptions = $('#phaseOptions');
    els.structureFeedback = $('#structureFeedback');
    els.checkStructureBtn = $('#checkStructureBtn');
    els.nextStructureBtn = $('#nextStructureBtn');
    els.activity2Result = $('#activity2Result');
    els.a2ResultContent = $('#a2ResultContent');
    els.downloadA2Btn = $('#downloadA2Btn');
    els.backA1Btn = $('#backA1Btn');
    els.photoCredit = $('#photoCredit');

    els.glossarySearch = $('#glossarySearch');
    els.glossaryFilters = $('#glossaryFilters');
    els.glossaryGrid = $('#glossaryGrid');
    els.glossaryCount = $('#glossaryCount');
    els.principlesList = $('#principlesList');
    els.mythsList = $('#mythsList');
    els.sourcesList = $('#sourcesList');
  }

  /* ---------------------------- Datos del estudiante -------------------------- */
  function loadProfile() {
    try {
      const raw = window.localStorage.getItem(PROFILE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.name === 'string') {
        state.profile = {
          name: parsed.name.trim(),
          course: (parsed.course || '8°').trim()
        };
        // Elimina el número de identificación de perfiles guardados con versiones anteriores.
        if (Object.prototype.hasOwnProperty.call(parsed, 'id')) {
          saveProfile();
        }
      }
    } catch (error) {
      state.profile = null;
    }
  }

  function saveProfile() {
    try {
      window.localStorage.setItem(PROFILE_KEY, JSON.stringify(state.profile));
    } catch (error) {
      /* Si el navegador bloquea localStorage, la sesión sigue funcionando. */
    }
  }

  function updateProfileUI() {
    if (!state.profile) {
      els.profileDisplayName.textContent = 'Sin identificar';
      els.profileDisplayMeta.textContent = 'Escribe tu nombre y curso';
      return;
    }
    els.profileDisplayName.textContent = state.profile.name;
    els.profileDisplayMeta.textContent = 'Curso ' + state.profile.course;
  }

  function openProfileModal(isEdit) {
    els.profileModal.hidden = false;
    document.body.classList.add('modal-open');
    els.profileError.hidden = true;
    els.profileError.textContent = '';

    if (state.profile) {
      els.profileName.value = state.profile.name;
      els.profileCourse.value = state.profile.course;
      els.profileTitle.textContent = isEdit ? 'Edita tus datos' : 'Confirma tus datos';
      els.profileSubmit.textContent = 'Continuar actividad →';
      els.profileCancel.hidden = false;
    } else {
      els.profileName.value = '';
      els.profileCourse.value = '8°';
      els.profileTitle.textContent = 'Escribe tus datos para comenzar';
      els.profileSubmit.textContent = 'Comenzar actividad →';
      els.profileCancel.hidden = true;
    }

    window.setTimeout(function () {
      els.profileName.focus();
    }, 40);
  }

  function closeProfileModal() {
    if (!state.profile) return;
    els.profileModal.hidden = true;
    document.body.classList.remove('modal-open');
    els.profileChip.focus();
  }

  function handleProfileSubmit(event) {
    event.preventDefault();
    const name = els.profileName.value.trim().replace(/\s+/g, ' ');
    const course = els.profileCourse.value.trim() || '8°';

    let error = '';
    if (name.length < 4 || !/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/.test(name)) {
      error = 'Escribe tu nombre completo (mínimo 4 caracteres y al menos una letra).';
    } else if (course.length < 1) {
      error = 'Escribe el curso (por ejemplo, 8°B).';
    }

    if (error) {
      els.profileError.textContent = error;
      els.profileError.hidden = false;
      (name.length < 4 ? els.profileName : els.profileCourse).focus();
      return;
    }

    state.profile = { name: name, course: course };
    saveProfile();
    updateProfileUI();
    els.profileModal.hidden = true;
    document.body.classList.remove('modal-open');

    if (!state.timerId) {
      startTimer();
    }

    window.CordycepsAudio.correct();
    els.profileChip.focus();
  }

  function trapModalFocus(event) {
    if (els.profileModal.hidden) return;

    if (event.key === 'Escape') {
      if (state.profile) {
        event.preventDefault();
        closeProfileModal();
      }
      return;
    }

    if (event.key !== 'Tab') return;
    const focusable = $$('button, input, textarea, select, a[href]', els.profileModal).filter(function (element) {
      return !element.disabled && element.offsetParent !== null;
    });
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  /* ---------------------------------- Tiempo --------------------------------- */
  function startTimer() {
    state.startedAt = Date.now();
    if (state.timerId) window.clearInterval(state.timerId);
    updateElapsed();
    state.timerId = window.setInterval(updateElapsed, 1000);
  }

  function updateElapsed() {
    const seconds = Math.floor((Date.now() - state.startedAt) / 1000);
    els.elapsedTime.textContent = formatDuration(seconds);
  }

  /* ---------------------------------- Vistas --------------------------------- */
  function showView(name) {
    $$('.view').forEach(function (view) {
      const isTarget = view.id === 'view-' + name;
      view.hidden = !isTarget;
      view.classList.toggle('is-active', isTarget);
    });

    $$('.tab-btn').forEach(function (button) {
      const isTarget = button.dataset.view === name;
      button.classList.toggle('is-active', isTarget);
      button.setAttribute('aria-pressed', isTarget ? 'true' : 'false');
    });

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }

  /* ------------------------------ Contenido estático ------------------------- */
  function renderStaticContent() {
    els.photoCredit.textContent = D.DISSECTION.photoCredit;

    els.principlesList.innerHTML = D.KEY_PRINCIPLES.map(function (principle) {
      return '<li>' + escapeHtml(principle) + '</li>';
    }).join('');

    els.mythsList.innerHTML = D.MYTHS.map(function (myth) {
      return '<div class="myth-item"><strong>' + escapeHtml(myth.myth) + '</strong><p>' + escapeHtml(myth.reality) + '</p></div>';
    }).join('');

    els.sourcesList.innerHTML = D.SOURCES.map(function (source) {
      return '<li>' + escapeHtml(source) + '</li>';
    }).join('');

    els.tab3Status.textContent = D.GLOSSARY.length + ' términos';
    els.glossaryCount.textContent = D.GLOSSARY.length + ' términos';
  }

  /* ---------------------------------- Canvas --------------------------------- */
  function renderStepper() {
    els.stageStepper.innerHTML = '';
    D.STAGES.forEach(function (stage, index) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'step';
      button.textContent = stage.name;
      button.title = stage.short;
      button.addEventListener('click', function () {
        updateStageDisplay(index);
        window.CordycepsAudio.click();
      });
      els.stageStepper.appendChild(button);
    });
  }

  function updateStageDisplay(index) {
    state.visualStage = index;
    if (window.CordycepsCanvas) {
      window.CordycepsCanvas.setStage(index);
    }
    $$('.step', els.stageStepper).forEach(function (button, buttonIndex) {
      button.classList.toggle('is-active', buttonIndex === index);
    });
    const stage = D.STAGES[index];
    els.canvasCaption.innerHTML = '<strong>' + escapeHtml(stage.short) + '</strong> — ' + escapeHtml(stage.desc);
  }

  /* -------------------------------- Actividad 1 ------------------------------ */
  function updateA1Chips() {
    const answered = answeredCount();
    const correct = correctCount();
    els.a1ScoreChip.textContent = 'Aciertos: ' + correct;
    els.a1AnsweredChip.textContent = 'Respondidas: ' + answered + ' / ' + TOTAL_A1;
    els.a1JustifyChip.textContent = 'Justificaciones: ' + justifiedCount() + ' / ' + TOTAL_MC;

    if (state.a1Finished) {
      els.tab1Status.textContent = 'Completada';
      $('.tab-btn[data-view="actividad1"]').classList.add('is-complete');
    } else {
      els.tab1Status.textContent = answered + ' / ' + TOTAL_A1;
      $('.tab-btn[data-view="actividad1"]').classList.remove('is-complete');
    }
  }

  function renderQuestion(focusTitle) {
    const question = currentQuestion();
    if (!question) return;

    const answer = state.answers[question.id];
    state.selectedOption = answer ? answer.optionId : state.selectedOption;

    els.qTopic.textContent = question.topic;
    els.qCounter.textContent = 'Pregunta ' + (state.a1Index + 1) + ' de ' + TOTAL_A1;
    els.qTitle.textContent = question.question;
    els.qScenario.textContent = question.scenario;

    const answered = answeredCount();
    els.qProgressFill.style.width = (answered / TOTAL_A1 * 100) + '%';
    els.qProgress.setAttribute('aria-valuenow', String(answered));
    els.qProgress.setAttribute('aria-valuemax', String(TOTAL_A1));

    updateStageDisplay(question.stage);
    updateA1Chips();

    const label = $('.hint-label', els.hintCard);
    label.textContent = answer ? 'Idea clave' : 'Pista científica';
    els.hintText.textContent = answer ? question.keyIdea : question.hint;

    els.optionsList.innerHTML = '';
    els.qFeedback.hidden = true;
    els.qFeedback.innerHTML = '';
    els.nextBtn.hidden = true;
    els.checkBtn.hidden = false;
    els.checkBtn.disabled = true;

    const justifyDraft = state.justDraft[question.id] || '';
    els.justifyText.value = answer ? (answer.text || '') : justifyDraft;
    els.justifyText.disabled = !!answer;
    els.justifyText.readOnly = !!answer;
    els.justifyAnswer.hidden = question.type === 'open' || !!answer || !state.selectedOption;

    if (question.type === 'open') {
      els.optionsList.hidden = true;
      els.openAnswer.hidden = false;
      renderOpenQuestion(question, answer);
    } else {
      els.openAnswer.hidden = true;
      els.optionsList.hidden = false;
      renderOptions(question, answer);
      updateJustifyMeta(question);
    }

    if (answer) {
      els.checkBtn.hidden = true;
      els.nextBtn.hidden = false;
      els.nextBtn.textContent = state.a1Index === TOTAL_A1 - 1
        ? 'Ver resultados de la actividad →'
        : 'Siguiente pregunta →';

      if (question.type === 'open') {
        showOpenSuccess(question);
      } else {
        showOptionFeedback(question, answer);
      }
    } else if (question.type === 'open') {
      updateOpenMeta(question, false);
    }

    if (focusTitle) {
      els.qTitle.setAttribute('tabindex', '-1');
      els.qTitle.focus({ preventScroll: true });
    }
  }

  function renderOptions(question, answer) {
    question.options.forEach(function (option) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'option';
      button.dataset.optionId = option.id;
      button.setAttribute('aria-pressed', answer && answer.optionId === option.id ? 'true' : 'false');
      button.innerHTML = '<span class="option-letter">' + option.id + '</span>' +
        '<span class="option-text">' + escapeHtml(option.text) + '</span>';

      if (answer) {
        button.disabled = true;
        if (option.correct) {
          button.classList.add('is-correct');
        } else if (answer.optionId === option.id) {
          button.classList.add('is-wrong');
        } else {
          button.classList.add('is-dim');
        }
      } else {
        if (state.selectedOption === option.id) {
          button.classList.add('is-selected');
        }
        button.addEventListener('click', function () {
          selectOption(option.id, button);
        });
      }

      els.optionsList.appendChild(button);
    });
  }

  function selectOption(optionId, button) {
    const question = currentQuestion();
    if (state.answers[question.id]) return;

    state.selectedOption = optionId;
    $$('.option', els.optionsList).forEach(function (optionButton) {
      const isSelected = optionButton === button;
      optionButton.classList.toggle('is-selected', isSelected);
      optionButton.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    });
    els.justifyAnswer.hidden = false;
    updateJustifyMeta(question);
    window.CordycepsAudio.click();
  }

  function updateJustifyMeta(question) {
    const text = els.justifyText.value.trim();
    els.justifyCounter.textContent = text.length + ' / ' + MIN_JUSTIFY + ' caracteres mínimos';
    els.justifyCounter.classList.toggle('is-ok', text.length >= MIN_JUSTIFY);
    els.justifyHint.textContent = text.length >= MIN_JUSTIFY
      ? 'Justificación suficiente para registrar la respuesta.'
      : 'Escribe al menos una oración completa.';
    els.justifyHint.classList.toggle('is-ok', text.length >= MIN_JUSTIFY);

    if (!state.answers[question.id]) {
      els.checkBtn.disabled = !state.selectedOption || text.length < MIN_JUSTIFY;
    }
  }

  function showOptionFeedback(question, answer) {
    const selected = question.options.find(function (option) { return option.id === answer.optionId; });
    const correct = question.options.find(function (option) { return option.correct; });
    if (!selected || !correct) return;

    if (answer.correct) {
      setFeedback(els.qFeedback, 'correct', '✅ Correcto',
        '<p>' + escapeHtml(question.explanation) + '</p>',
        '<div class="feedback-extra"><strong>Tu justificación:</strong> ' + escapeHtml(answer.text) +
        '<br><br><strong>Idea clave:</strong> ' + escapeHtml(question.keyIdea) + '</div>');
    } else {
      setFeedback(els.qFeedback, 'wrong', '❌ Revisa esta idea',
        '<p><strong>Tu elección:</strong> ' + escapeHtml(selected.text) + '</p>' +
        '<p>' + escapeHtml(selected.feedback) + '</p>',
        '<div class="feedback-extra"><strong>Tu justificación:</strong> ' + escapeHtml(answer.text) +
        '<br><br><strong>Respuesta correcta (' + correct.id + '):</strong> ' +
        escapeHtml(correct.text) + '<br><br>' + escapeHtml(question.explanation) + '</div>');
    }
  }

  function setFeedback(element, type, title, bodyHtml, extraHtml) {
    element.className = 'feedback is-' + type;
    element.innerHTML = '<p class="feedback-title">' + title + '</p>' + bodyHtml + (extraHtml || '');
    element.hidden = false;
    element.setAttribute('tabindex', '-1');
  }

  function renderOpenQuestion(question, answer) {
    const draft = answer ? answer.text : (state.openDraft[question.id] || '');
    els.openText.value = draft;
    els.openText.disabled = !!answer;
    els.openText.readOnly = !!answer;

    els.conceptChips.innerHTML = question.requiredKeywords.map(function (keyword) {
      return '<button class="concept-chip" type="button" data-word="' + escapeHtml(keyword) + '">' + escapeHtml(keyword) + '</button>';
    }).join('');
    els.conceptChips.hidden = !!answer;

    $$('.concept-chip', els.conceptChips).forEach(function (chip) {
      chip.addEventListener('click', function () {
        if (els.openText.disabled) return;
        const word = chip.dataset.word;
        const current = els.openText.value;
        const separator = current && !/\s$/.test(current) ? ' ' : '';
        els.openText.value = current + separator + word;
        state.openDraft[question.id] = els.openText.value;
        els.openText.focus();
        updateOpenMeta(question, false);
        window.CordycepsAudio.click();
      });
    });

    els.openText.oninput = function () {
      if (els.openText.disabled) return;
      state.openDraft[question.id] = els.openText.value;
      updateOpenMeta(question, false);
      if (els.qFeedback.classList.contains('is-info')) {
        els.qFeedback.hidden = true;
      }
    };

    updateOpenMeta(question, !!answer);
  }

  function detectKeywords(question, text) {
    const normalized = normalizeText(text);
    return question.requiredKeywords.filter(function (keyword) {
      return normalized.indexOf(normalizeText(keyword)) !== -1;
    });
  }

  function updateOpenMeta(question, answered) {
    const text = els.openText.value.trim();
    const found = detectKeywords(question, text);

    els.openCounter.textContent = text.length + ' / ' + question.minChars + ' caracteres mínimos';
    els.openCounter.classList.toggle('is-ok', text.length >= question.minChars);

    if (answered) {
      els.openKeywords.textContent = 'Criterios cumplidos: ' + found.length + ' conceptos clave';
      els.openKeywords.classList.add('is-ok');
    } else {
      els.openKeywords.textContent = 'Conceptos detectados: ' + found.length + ' / ' + question.requiredKeywords.length +
        ' (mínimo ' + question.minKeywords + ')';
      els.openKeywords.classList.toggle('is-ok', found.length >= question.minKeywords);
      els.checkBtn.disabled = text.length < question.minChars;
    }
  }

  function evaluateOpen(question) {
    if (state.answers[question.id]) return;
    const text = els.openText.value.trim();
    if (text.length < question.minChars) {
      setFeedback(els.qFeedback, 'info', '🔎 Falta desarrollar la idea',
        '<p>Escribe al menos ' + question.minChars + ' caracteres. Una buena argumentación incluye una afirmación y su justificación científica.</p>');
      return;
    }

    const found = detectKeywords(question, text);
    if (found.length < question.minKeywords) {
      const missing = question.requiredKeywords.filter(function (keyword) {
        return found.indexOf(keyword) === -1;
      });
      setFeedback(els.qFeedback, 'info', '🔎 Aún puedes integrar más conceptos',
        '<p>Tu texto menciona ' + found.length + ' de los conceptos clave. Integra al menos ' + question.minKeywords + ' para cerrar la pregunta.</p>' +
        '<p>Puedes relacionar: ' + missing.map(function (keyword) { return '<strong>' + escapeHtml(keyword) + '</strong>'; }).join(', ') + '.</p>');
      updateOpenMeta(question, false);
      window.CordycepsAudio.click();
      return;
    }

    state.answers[question.id] = {
      correct: true,
      optionId: null,
      text: text
    };
    state.openDraft[question.id] = text;
    window.CordycepsAudio.correct();
    renderQuestion(false);
    focusFeedback();
  }

  function showOpenSuccess(question) {
    setFeedback(els.qFeedback, 'correct', '✅ Argumentación registrada',
      '<p>' + escapeHtml(question.modelAnswer) + '</p>',
      '<div class="feedback-extra"><strong>Idea clave:</strong> ' + escapeHtml(question.keyIdea) +
      '<br><br><em>Tu respuesta quedó guardada para el informe. El docente puede revisarla y ampliarla.</em></div>');
  }

  function focusFeedback() {
    window.setTimeout(function () {
      els.qFeedback.focus({ preventScroll: true });
    }, 60);
  }

  function checkAnswer() {
    const question = currentQuestion();
    if (!question || state.answers[question.id]) return;

    if (question.type === 'open') {
      evaluateOpen(question);
      return;
    }

    if (!state.selectedOption) return;
    const justification = els.justifyText.value.trim();
    if (justification.length < MIN_JUSTIFY) {
      setFeedback(els.qFeedback, 'info', '✍️ Falta justificar',
        '<p>Antes de comprobar, explica por qué elegiste esa opción. Escribe al menos ' +
        MIN_JUSTIFY + ' caracteres e incluye una idea científica.</p>');
      els.justifyText.focus();
      return;
    }

    const option = question.options.find(function (candidate) {
      return candidate.id === state.selectedOption;
    });
    if (!option) return;

    state.answers[question.id] = {
      correct: !!option.correct,
      optionId: option.id,
      text: justification
    };

    if (option.correct) {
      window.CordycepsAudio.correct();
    } else {
      window.CordycepsAudio.wrong();
    }

    renderQuestion(false);
    focusFeedback();
  }

  function nextQuestion() {
    if (state.a1Index < TOTAL_A1 - 1) {
      state.a1Index += 1;
      state.selectedOption = null;
      renderQuestion(true);
    } else {
      finishActivity1();
    }
  }

  function finishActivity1() {
    state.a1Finished = true;
    els.a1Workspace.hidden = true;
    els.activity1Result.hidden = false;
    els.reviewList.hidden = true;
    els.reviewList.innerHTML = '';
    state.reviewOpen = false;
    els.reviewBtn.textContent = 'Revisar mis respuestas';

    const correct = correctCount();
    const percent = Math.round(correct / TOTAL_A1 * 100);
    const openQuestion = D.ACTIVITY1.find(function (question) {
      return question.type === 'open';
    });
    const openAnswered = !!(openQuestion && state.answers[openQuestion.id]);
    let message = 'Revisa el glosario y vuelve a intentarlo: cada error es una oportunidad para ajustar una idea.';
    if (percent >= 85) {
      message = 'Dominio sólido: distingues mitosis, meiosis, estructuras y consecuencias ecológicas.';
    } else if (percent >= 70) {
      message = 'Buen trabajo: comprendes las ideas centrales y puedes mejorar algunos detalles.';
    } else if (percent >= 50) {
      message = 'Vas por buen camino: revisa las preguntas en las que confundiste fases o funciones.';
    }

    els.resultContent.innerHTML =
      '<div class="result-hero">' +
        '<span class="result-badge" aria-hidden="true">✓</span>' +
        '<div><h3>Actividad 1 finalizada</h3><p>Ya no hay más preguntas: la ruta de ' + TOTAL_A1 + ' preguntas está completa.</p></div>' +
        '<div class="result-score"><strong>' + correct + ' / ' + TOTAL_A1 + '</strong><span>' + percent + '% de aciertos</span></div>' +
      '</div>' +
      '<div class="result-grid">' +
        '<div class="result-stat"><span>Aciertos</span><strong>' + correct + ' de ' + TOTAL_A1 + '</strong></div>' +
        '<div class="result-stat"><span>Preguntas respondidas</span><strong>' + answeredCount() + ' de ' + TOTAL_A1 + '</strong></div>' +
        '<div class="result-stat"><span>Justificaciones</span><strong>' + justifiedCount() + ' de ' + TOTAL_MC + '</strong></div>' +
        '<div class="result-stat"><span>Pregunta abierta</span><strong>' + (openAnswered ? 'Cumplida' : 'Pendiente') + '</strong></div>' +
      '</div>' +
      '<p class="result-note">' + escapeHtml(message) + ' Las justificaciones y la pregunta abierta quedan en el informe para la revisión del docente.</p>';

    els.activity1Result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.CordycepsAudio.complete();
    updateA1Chips();

    if (state.a2Completed.size === TOTAL_A2) {
      els.tab2Status.textContent = 'Completada';
    }
  }

  function renderReview() {
    const items = D.ACTIVITY1.map(function (question, index) {
      const answer = state.answers[question.id];
      let body = '';
      let statusClass = 'is-wrong';
      let statusText = 'Sin responder';

      if (answer && answer.correct) {
        statusClass = 'is-correct';
        statusText = 'Correcta';
      } else if (answer) {
        statusText = 'Incorrecta';
      }

      if (question.type === 'open') {
        body = answer
          ? '<p><strong>Tu argumentación:</strong> ' + escapeHtml(answer.text) + '</p><p><strong>Respuesta modelo:</strong> ' + escapeHtml(question.modelAnswer) + '</p>'
          : '<p>No registraste una argumentación.</p>';
      } else {
        const chosen = answer ? question.options.find(function (option) { return option.id === answer.optionId; }) : null;
        const correct = question.options.find(function (option) { return option.correct; });
        body = '<p><strong>Tu respuesta:</strong> ' + (chosen ? escapeHtml(chosen.id + '. ' + chosen.text) : 'Sin responder') + '</p>' +
          '<p><strong>Tu justificación:</strong> ' + (answer && answer.text ? escapeHtml(answer.text) : 'Sin justificación registrada') + '</p>' +
          '<p><strong>Respuesta correcta:</strong> ' + escapeHtml(correct.id + '. ' + correct.text) + '</p>' +
          '<p>' + escapeHtml(question.explanation) + '</p>';
      }

      return '<div class="review-item ' + statusClass + '">' +
        '<strong>' + (index + 1) + '. ' + escapeHtml(question.question) + ' · ' + statusText + '</strong>' +
        body +
      '</div>';
    });

    els.reviewList.innerHTML = items.join('');
  }

  /* ---------------------- Actividad 2 · Decisiones reproductivas -------------- */
  function currentDecision() {
    return D.REPRODUCTION_DECISIONS.scenarios[state.decisionIndex];
  }

  function decisionAnsweredCount() {
    return Object.keys(state.decisionAnswers).length;
  }

  function decisionTypeLabel(type) {
    return type === 'sexual' ? 'Sexual' : 'Asexual';
  }

  function getDecisionRoute() {
    const answers = Object.keys(state.decisionAnswers).map(function (key) {
      return state.decisionAnswers[key];
    });
    const sexual = answers.filter(function (answer) { return answer.type === 'sexual'; }).length;
    const asexual = answers.filter(function (answer) { return answer.type === 'asexual'; }).length;
    let route = 'sin definir';
    if (sexual > asexual) {
      route = 'sexual';
    } else if (asexual > sexual) {
      route = 'asexual';
    } else if (sexual > 0) {
      route = 'mixta';
    }
    return {
      sexual: sexual,
      asexual: asexual,
      total: sexual + asexual,
      route: route
    };
  }

  function routeLabel(route) {
    if (route === 'sexual') return 'Ruta sexual';
    if (route === 'asexual') return 'Ruta asexual';
    if (route === 'mixta') return 'Ruta alternante';
    return 'Ruta en construcción';
  }

  function updateDecisionProgress() {
    const answered = decisionAnsweredCount();
    const route = getDecisionRoute();

    els.decisionProgressChip.textContent = answered + ' / ' + TOTAL_DEC + ' decisiones';
    els.decisionCounter.textContent = answered + ' de ' + TOTAL_DEC + ' completados';
    els.decisionProgressFill.style.width = (answered / TOTAL_DEC * 100) + '%';
    els.decisionProgress.setAttribute('aria-valuenow', String(answered));
    els.decisionProgress.setAttribute('aria-valuemax', String(TOTAL_DEC));
    els.decisionPathChip.textContent = route.total
      ? routeLabel(route.route)
      : 'Ruta en construcción';

    if (state.decisionFinished) {
      els.tabDecisionStatus.textContent = 'Completada';
      $('.tab-btn[data-view="decisiones"]').classList.add('is-complete');
    } else {
      els.tabDecisionStatus.textContent = answered + ' / ' + TOTAL_DEC;
      $('.tab-btn[data-view="decisiones"]').classList.remove('is-complete');
    }

    updateDecisionSidebar(route);
  }

  function updateDecisionSidebar(route) {
    const currentRoute = route || getDecisionRoute();
    const answered = currentRoute.total;
    const total = answered || 1;
    const sexualWidth = answered ? (currentRoute.sexual / total * 100) : 0;
    const asexualWidth = answered ? (currentRoute.asexual / total * 100) : 0;

    els.routeSexualCount.textContent = String(currentRoute.sexual);
    els.routeAsexualCount.textContent = String(currentRoute.asexual);
    els.routeSexualFill.style.width = sexualWidth + '%';
    els.routeAsexualFill.style.width = asexualWidth + '%';
    els.routeHistoryCount.textContent = answered + ' / ' + TOTAL_DEC;

    if (!answered) {
      els.routeStatus.textContent = 'Aún no hay decisiones. Elige una estrategia y justifícala.';
    } else if (state.decisionFinished) {
      els.routeStatus.textContent = 'Ruta final: ' + routeLabel(currentRoute.route).toLowerCase() +
        ' (' + currentRoute.sexual + ' sexuales · ' + currentRoute.asexual + ' asexuales).';
    } else if (currentRoute.sexual === currentRoute.asexual) {
      els.routeStatus.textContent = 'Empate parcial: ' + currentRoute.sexual + ' sexuales y ' +
        currentRoute.asexual + ' asexuales. Aún quedan escenarios.';
    } else if (currentRoute.sexual > currentRoute.asexual) {
      els.routeStatus.textContent = 'Ventaja parcial sexual: ' + currentRoute.sexual + ' frente a ' +
        currentRoute.asexual + '. Aún quedan escenarios.';
    } else {
      els.routeStatus.textContent = 'Ventaja parcial asexual: ' + currentRoute.asexual + ' frente a ' +
        currentRoute.sexual + '. Aún quedan escenarios.';
    }

    const history = D.REPRODUCTION_DECISIONS.scenarios.map(function (scenario, index) {
      const answer = state.decisionAnswers[scenario.id];
      if (!answer) {
        return '<li class="route-pending"><strong>' + (index + 1) + '. ' + escapeHtml(scenario.title) +
          '</strong><span>Pendiente</span></li>';
      }
      return '<li class="is-' + answer.type + '"><strong>' + (index + 1) + '. ' + escapeHtml(scenario.title) +
        '</strong><span>' + decisionTypeLabel(answer.type) + '</span></li>';
    });

    els.routeHistory.innerHTML = history.length
      ? history.join('')
      : '<li class="route-empty">Tus elecciones aparecerán aquí.</li>';
  }

  function renderDecisionScenario(focusTitle) {
    const scenario = currentDecision();
    if (!scenario) return;

    const answer = state.decisionAnswers[scenario.id];
    const selectedId = answer ? answer.optionId : state.decisionSelected;

    els.decisionScenarioTag.textContent = 'Escenario ' + (state.decisionIndex + 1);
    els.decisionCounter.textContent = decisionAnsweredCount() + ' de ' + TOTAL_DEC + ' completados';
    els.decisionTitle.textContent = scenario.title;
    els.decisionScenario.textContent = scenario.scenario;

    els.decisionOptions.innerHTML = '';
    scenario.options.forEach(function (option) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'option';
      button.dataset.optionId = option.id;
      button.setAttribute('aria-pressed', selectedId === option.id ? 'true' : 'false');
      button.innerHTML = '<span class="option-letter">' + option.id + '</span>' +
        '<span class="option-text"><span class="decision-type is-' + option.type + '">' +
        decisionTypeLabel(option.type) + '</span>' + escapeHtml(option.text) + '</span>';

      if (answer) {
        button.disabled = true;
        if (option.correct) {
          button.classList.add('is-correct');
        } else if (answer.optionId === option.id) {
          button.classList.add('is-wrong');
        } else {
          button.classList.add('is-dim');
        }
      } else {
        if (state.decisionSelected === option.id) {
          button.classList.add('is-selected');
        }
        button.addEventListener('click', function () {
          selectDecisionOption(option.id, button);
        });
      }

      els.decisionOptions.appendChild(button);
    });

    els.decisionJustify.value = answer ? answer.text : (state.decisionDraft[scenario.id] || '');
    els.decisionJustify.disabled = !!answer;
    els.decisionJustify.readOnly = !!answer;
    els.decisionJustifyBox.hidden = !!answer;

    els.decisionHintChips.innerHTML = scenario.hintWords.map(function (word) {
      return '<button class="concept-chip" type="button" data-word="' + escapeHtml(word) + '">' +
        escapeHtml(word) + '</button>';
    }).join('');

    $$('.concept-chip', els.decisionHintChips).forEach(function (chip) {
      chip.addEventListener('click', function () {
        if (els.decisionJustify.disabled) return;
        const word = chip.dataset.word;
        const current = els.decisionJustify.value;
        const separator = current && !/\s$/.test(current) ? ' ' : '';
        els.decisionJustify.value = current + separator + word;
        state.decisionDraft[scenario.id] = els.decisionJustify.value;
        els.decisionJustify.focus();
        updateDecisionJustifyMeta();
        window.CordycepsAudio.click();
      });
    });

    els.decisionFeedback.hidden = true;
    els.decisionFeedback.innerHTML = '';
    if (answer) {
      showDecisionFeedback(scenario, answer);
    }

    els.confirmDecisionBtn.hidden = !!answer;
    els.nextDecisionBtn.hidden = !answer;
    els.nextDecisionBtn.textContent = state.decisionIndex === TOTAL_DEC - 1
      ? 'Ver mi ruta reproductiva →'
      : 'Siguiente escenario →';

    updateDecisionJustifyMeta();
    updateDecisionProgress();

    if (focusTitle) {
      els.decisionTitle.setAttribute('tabindex', '-1');
      els.decisionTitle.focus({ preventScroll: true });
    }
  }

  function updateDecisionJustifyMeta() {
    const text = els.decisionJustify.value.trim();
    els.decisionJustifyCounter.textContent = text.length + ' / ' + MIN_DECISION_JUSTIFY + ' caracteres mínimos';
    els.decisionJustifyCounter.classList.toggle('is-ok', text.length >= MIN_DECISION_JUSTIFY);
    els.decisionJustifyHint.textContent = text.length >= MIN_DECISION_JUSTIFY
      ? 'Justificación suficiente para registrar la decisión.'
      : 'Incluye al menos una idea científica.';
    els.decisionJustifyHint.classList.toggle('is-ok', text.length >= MIN_DECISION_JUSTIFY);

    const scenario = currentDecision();
    if (scenario && !state.decisionAnswers[scenario.id]) {
      els.confirmDecisionBtn.disabled = !state.decisionSelected || text.length < MIN_DECISION_JUSTIFY;
    }
  }

  function selectDecisionOption(optionId, button) {
    const scenario = currentDecision();
    if (!scenario || state.decisionAnswers[scenario.id]) return;

    state.decisionSelected = optionId;
    $$('.option', els.decisionOptions).forEach(function (optionButton) {
      const isSelected = optionButton === button;
      optionButton.classList.toggle('is-selected', isSelected);
      optionButton.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    });
    els.decisionJustifyBox.hidden = false;
    updateDecisionJustifyMeta();
    window.CordycepsAudio.click();
  }

  function showDecisionFeedback(scenario, answer) {
    const chosen = scenario.options.find(function (option) {
      return option.id === answer.optionId;
    });
    if (!chosen) return;

    setFeedback(els.decisionFeedback, chosen.correct ? 'correct' : 'wrong',
      chosen.correct ? '✅ Decisión coherente con el escenario' : '🔎 Decisión posible, pero menos ajustada',
      '<p><strong>Elegiste:</strong> ' + escapeHtml(chosen.text) + '</p>' +
      '<p>' + escapeHtml(chosen.feedback) + '</p>',
      '<div class="feedback-extra"><strong>Tu justificación:</strong> ' + escapeHtml(answer.text) +
      '<br><br><strong>Por qué:</strong> ' + escapeHtml(scenario.explanation) + '</div>');
  }

  function confirmDecision() {
    const scenario = currentDecision();
    if (!scenario || state.decisionAnswers[scenario.id]) return;
    if (!state.decisionSelected) return;

    const text = els.decisionJustify.value.trim();
    if (text.length < MIN_DECISION_JUSTIFY) {
      setFeedback(els.decisionFeedback, 'info', '✍️ Falta justificar la decisión',
        '<p>Escribe al menos ' + MIN_DECISION_JUSTIFY +
        ' caracteres. Explica por qué esa estrategia es adecuada en este escenario e incluye una idea científica.</p>');
      els.decisionJustify.focus();
      return;
    }

    const chosen = scenario.options.find(function (option) {
      return option.id === state.decisionSelected;
    });
    if (!chosen) return;

    state.decisionAnswers[scenario.id] = {
      optionId: chosen.id,
      type: chosen.type,
      correct: !!chosen.correct,
      text: text
    };
    state.decisionDraft[scenario.id] = text;

    renderDecisionScenario(false);
    updateDecisionProgress();
    if (chosen.correct) {
      window.CordycepsAudio.correct();
    } else {
      window.CordycepsAudio.wrong();
    }
    focusDecisionFeedback();
  }

  function focusDecisionFeedback() {
    window.setTimeout(function () {
      els.decisionFeedback.focus({ preventScroll: true });
    }, 60);
  }

  function nextDecision() {
    if (state.decisionIndex < TOTAL_DEC - 1) {
      state.decisionIndex += 1;
      state.decisionSelected = null;
      renderDecisionScenario(true);
    } else {
      finishDecisionActivity();
    }
  }

  function finishDecisionActivity() {
    state.decisionFinished = true;
    els.decisionWorkspace.hidden = true;
    els.decisionResult.hidden = false;
    updateDecisionProgress();

    const route = getDecisionRoute();
    const aligned = Object.keys(state.decisionAnswers).filter(function (key) {
      return state.decisionAnswers[key].correct;
    }).length;
    const dominant = route.route === 'sexual' ? route.sexual : route.asexual;
    const dominantLabel = route.route === 'sexual' ? 'decisiones sexuales' : 'decisiones asexuales';
    let routeMessage = 'En esta simulación, tus decisiones combinaron ambas estrategias. Esa flexibilidad puede ser útil cuando el ambiente cambia.';
    if (route.route === 'sexual') {
      routeMessage = 'En esta simulación, tus decisiones priorizaron la reproducción sexual: más variabilidad y más costo. Esa apuesta puede ayudar cuando el hospedero o el ambiente cambian.';
    } else if (route.route === 'asexual') {
      routeMessage = 'En esta simulación, tus decisiones priorizaron la reproducción asexual: rapidez y clones, pero menos variabilidad. Esa apuesta funciona mejor cuando el ambiente es estable y los hospederos son abundantes.';
    }

    const list = D.REPRODUCTION_DECISIONS.scenarios.map(function (scenario, index) {
      const answer = state.decisionAnswers[scenario.id];
      if (!answer) return '';
      const chosen = scenario.options.find(function (option) {
        return option.id === answer.optionId;
      });
      return '<li><strong>' + (index + 1) + '. ' + escapeHtml(scenario.title) + ':</strong> ' +
        '<span class="decision-type is-' + answer.type + '">' + decisionTypeLabel(answer.type) + '</span>' +
        escapeHtml(chosen ? chosen.text : '') +
        '<br><em>Justificación:</em> ' + escapeHtml(answer.text) + '</li>';
    }).join('');

    els.decisionResultContent.innerHTML =
      '<div class="result-hero">' +
        '<span class="result-badge" aria-hidden="true">✓</span>' +
        '<div><h3>Actividad 2 finalizada</h3><p>Tu ruta reproductiva: <strong>' +
          routeLabel(route.route) + '</strong>.</p></div>' +
        '<div class="result-score"><strong>' + dominant + ' / ' + TOTAL_DEC + '</strong><span>' +
          dominantLabel + '</span></div>' +
      '</div>' +
      '<div class="result-grid">' +
        '<div class="result-stat"><span>Ruta resultante</span><strong>' + routeLabel(route.route) + '</strong></div>' +
        '<div class="result-stat"><span>Decisiones tomadas</span><strong>' + route.total + ' de ' + TOTAL_DEC + '</strong></div>' +
        '<div class="result-stat"><span>Ajuste al escenario</span><strong>' + aligned + ' de ' + TOTAL_DEC + '</strong></div>' +
      '</div>' +
      '<p class="result-note">' + escapeHtml(routeMessage) +
        ' El ajuste al escenario no es una nota: es una pista para comparar tus decisiones con la estrategia que mejor encaja en cada ambiente.</p>' +
      '<ul class="result-list">' + list + '</ul>';

    window.CordycepsAudio.complete();
    els.decisionResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function resetDecisionActivity() {
    state.decisionIndex = 0;
    state.decisionSelected = null;
    state.decisionAnswers = {};
    state.decisionDraft = {};
    state.decisionFinished = false;

    els.decisionResult.hidden = true;
    els.decisionResultContent.innerHTML = '';
    els.decisionWorkspace.hidden = false;
    renderDecisionScenario(false);
    updateDecisionProgress();
    showView('decisiones');
    window.CordycepsAudio.click();
  }

  /* -------------------------------- Actividad 3 · Disección ------------------- */
  function updateA2Progress() {
    const completed = state.a2Completed.size;
    els.a2ProgressChip.textContent = completed + ' / ' + TOTAL_A2 + ' estructuras';
    els.a2Counter.textContent = completed + ' de ' + TOTAL_A2 + ' completadas';
    els.a2ProgressFill.style.width = (completed / TOTAL_A2 * 100) + '%';
    els.a2Progress.setAttribute('aria-valuenow', String(completed));
    els.a2Progress.setAttribute('aria-valuemax', String(TOTAL_A2));

    if (completed === TOTAL_A2) {
      els.tab2Status.textContent = 'Completada';
      $('.tab-btn[data-view="actividad2"]').classList.add('is-complete');
    } else {
      els.tab2Status.textContent = completed + ' / ' + TOTAL_A2;
      $('.tab-btn[data-view="actividad2"]').classList.remove('is-complete');
    }
  }

  function renderStructureTabs() {
    els.structureTabs.innerHTML = '';
    D.DISSECTION.structures.forEach(function (structure) {
      const completed = state.a2Completed.has(structure.id);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'structure-tab' +
        (state.a2Selected === structure.id ? ' is-active' : '') +
        (completed ? ' is-complete' : '');
      button.setAttribute('aria-pressed', state.a2Selected === structure.id ? 'true' : 'false');
      button.innerHTML =
        '<span class="structure-tab-dot" style="background:' + structure.color + '">' + (completed ? '✓' : structure.num) + '</span>' +
        '<span>' + escapeHtml(structure.name) + '</span>';
      button.addEventListener('click', function () {
        selectStructure(structure.id);
      });
      els.structureTabs.appendChild(button);
    });
  }

  function updateMarkers() {
    $$('.marker').forEach(function (marker) {
      const id = marker.dataset.structure;
      marker.classList.toggle('is-active', state.a2Selected === id);
      marker.classList.toggle('is-complete', state.a2Completed.has(id));
    });
  }

  function selectStructure(id) {
    state.a2Selected = id;
    renderStructureTabs();
    updateMarkers();
    els.structureEmpty.hidden = true;
    els.structureWorkspace.hidden = false;
    renderStructureWorkspace();
    window.CordycepsAudio.click();
  }

  function renderStructureWorkspace() {
    const structure = D.DISSECTION.structures.find(function (item) {
      return item.id === state.a2Selected;
    });
    if (!structure) return;

    const completed = state.a2Completed.has(structure.id);
    const answer = state.a2Answers[structure.id];
    const picks = state.a2Picks[structure.id] || {
      functionId: answer ? answer.functionId : null,
      phaseId: answer ? answer.phaseId : null
    };

    els.structureNumber.textContent = structure.num;
    els.structureNumber.style.background = structure.color;
    els.structureName.textContent = structure.name;
    els.structureDesc.textContent = structure.desc;

    buildGuidedOptions(els.functionOptions, structure.functionOptions, picks.functionId, completed, 'functionId', structure.id);
    buildGuidedOptions(els.phaseOptions, structure.phaseOptions, picks.phaseId, completed, 'phaseId', structure.id);

    els.structureFeedback.hidden = true;
    els.structureFeedback.innerHTML = '';

    if (completed) {
      const correctFunction = structure.functionOptions.find(function (option) { return option.correct; });
      const correctPhase = structure.phaseOptions.find(function (option) { return option.correct; });
      els.checkStructureBtn.hidden = true;
      els.nextStructureBtn.hidden = false;
      els.nextStructureBtn.textContent = state.a2Completed.size === TOTAL_A2
        ? 'Ver resultado de la actividad →'
        : 'Siguiente estructura →';
      setFeedback(els.structureFeedback, 'correct', '✅ Estructura completada',
        '<p><strong>Función:</strong> ' + escapeHtml(correctFunction.text) + '</p>' +
        '<p><strong>Fase:</strong> ' + escapeHtml(correctPhase.text) + '</p>',
        '<div class="feedback-extra">' + escapeHtml(structure.explanation) + '</div>');
    } else {
      els.checkStructureBtn.hidden = false;
      els.nextStructureBtn.hidden = true;
      els.checkStructureBtn.disabled = !(picks.functionId && picks.phaseId);
    }
  }

  function buildGuidedOptions(container, options, selectedId, disabled, field, structureId) {
    container.innerHTML = '';

    options.forEach(function (option) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'option';
      button.setAttribute('aria-pressed', selectedId === option.id ? 'true' : 'false');
      button.innerHTML = '<span class="option-letter">' + option.id.toUpperCase() + '</span>' +
        '<span class="option-text">' + escapeHtml(option.text) + '</span>';

      if (disabled) {
        button.disabled = true;
        if (option.correct) {
          button.classList.add('is-correct');
        } else {
          button.classList.add('is-dim');
        }
      } else {
        if (selectedId === option.id) {
          button.classList.add('is-selected');
        }
        button.addEventListener('click', function () {
          const picks = state.a2Picks[structureId] || { functionId: null, phaseId: null };
          picks[field] = option.id;
          state.a2Picks[structureId] = picks;
          renderStructureWorkspace();
          window.CordycepsAudio.click();
        });
      }

      container.appendChild(button);
    });
  }

  function checkStructure() {
    const structure = D.DISSECTION.structures.find(function (item) {
      return item.id === state.a2Selected;
    });
    if (!structure || state.a2Completed.has(structure.id)) return;

    const picks = state.a2Picks[structure.id];
    if (!picks || !picks.functionId || !picks.phaseId) return;

    const chosenFunction = structure.functionOptions.find(function (option) { return option.id === picks.functionId; });
    const chosenPhase = structure.phaseOptions.find(function (option) { return option.id === picks.phaseId; });

    if (!chosenFunction || !chosenPhase) return;

    if (chosenFunction.correct && chosenPhase.correct) {
      state.a2Answers[structure.id] = {
        functionId: picks.functionId,
        phaseId: picks.phaseId,
        attempts: (state.a2Attempts[structure.id] || 0) + 1
      };
      state.a2Completed.add(structure.id);
      state.a2Attempts[structure.id] = (state.a2Attempts[structure.id] || 0) + 1;

      updateA2Progress();
      renderStructureTabs();
      updateMarkers();
      renderStructureWorkspace();
      window.CordycepsAudio.correct();
      maybeFinishActivity2();
      return;
    }

    state.a2Attempts[structure.id] = (state.a2Attempts[structure.id] || 0) + 1;

    let detail = '';
    if (!chosenFunction.correct) {
      detail += '<p><strong>Función:</strong> ' + escapeHtml(chosenFunction.feedback) + '</p>';
    }
    if (!chosenPhase.correct) {
      detail += '<p><strong>Fase:</strong> ' + escapeHtml(chosenPhase.feedback) + '</p>';
    }

    setFeedback(els.structureFeedback, 'wrong', '🔎 Revisa una de las dos decisiones',
      detail,
      '<div class="feedback-extra">Vuelve a intentarlo. Puedes cambiar solo la decisión que no corresponde.</div>');
    window.CordycepsAudio.wrong();
  }

  function nextStructure() {
    const structures = D.DISSECTION.structures;
    const currentIndex = structures.findIndex(function (structure) {
      return structure.id === state.a2Selected;
    });

    let candidate = null;
    for (let offset = 1; offset <= structures.length; offset++) {
      const index = (currentIndex + offset) % structures.length;
      if (!state.a2Completed.has(structures[index].id)) {
        candidate = structures[index];
        break;
      }
    }

    if (candidate) {
      selectStructure(candidate.id);
      els.structureWorkspace.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      maybeFinishActivity2();
      els.activity2Result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function maybeFinishActivity2() {
    if (state.a2Completed.size < TOTAL_A2) return;

    updateA2Progress();
    els.activity2Result.hidden = false;

    const list = D.DISSECTION.structures.map(function (structure) {
      const answer = state.a2Answers[structure.id];
      if (!answer) return '';
      const fn = structure.functionOptions.find(function (option) { return option.id === answer.functionId; });
      const ph = structure.phaseOptions.find(function (option) { return option.id === answer.phaseId; });
      return '<li><strong>' + escapeHtml(structure.name) + ':</strong> ' +
        escapeHtml(fn ? fn.text : '') + ' · ' + escapeHtml(ph ? ph.text : '') + '</li>';
    }).join('');

    els.a2ResultContent.innerHTML =
      '<div class="result-hero">' +
        '<span class="result-badge" aria-hidden="true">✓</span>' +
        '<div><h3>Actividad 3 finalizada</h3><p>Completaste las ' + TOTAL_A2 + ' estructuras de la disección virtual.</p></div>' +
        '<div class="result-score"><strong>' + TOTAL_A2 + ' / ' + TOTAL_A2 + '</strong><span>estructuras</span></div>' +
      '</div>' +
      '<div class="result-grid">' +
        '<div class="result-stat"><span>Estructuras</span><strong>' + TOTAL_A2 + ' de ' + TOTAL_A2 + '</strong></div>' +
        '<div class="result-stat"><span>Decisiones</span><strong>Función + fase</strong></div>' +
        '<div class="result-stat"><span>Informe</span><strong>Listo para descargar</strong></div>' +
      '</div>' +
      '<p class="result-note">La forma de cada estructura se explica por su función: el estroma eleva, los peritecios protegen la meiosis, el micelio coloniza y absorbe, y los conidios dispersan clones. Puedes repasar cualquier estructura con las tarjetas de arriba.</p>' +
      '<ul class="result-list">' + list + '</ul>';

    if (!state.a2Celebrated) {
      state.a2Celebrated = true;
      window.CordycepsAudio.complete();
    }
  }

  /* --------------------------------- Glosario -------------------------------- */
  let glossaryTag = 'Todos';
  let glossaryQuery = '';

  function renderGlossary() {
    const query = normalizeText(glossaryQuery);
    const tags = ['Todos'].concat(
      Array.from(new Set(D.GLOSSARY.map(function (entry) { return entry.tag; }))).sort()
    );

    els.glossaryFilters.innerHTML = tags.map(function (tag) {
      return '<button class="filter-chip' + (tag === glossaryTag ? ' is-active' : '') +
        '" type="button" data-tag="' + escapeHtml(tag) + '">' + escapeHtml(tag) + '</button>';
    }).join('');

    $$('.filter-chip', els.glossaryFilters).forEach(function (button) {
      button.addEventListener('click', function () {
        glossaryTag = button.dataset.tag;
        renderGlossary();
      });
    });

    const filtered = D.GLOSSARY.filter(function (entry) {
      const matchesTag = glossaryTag === 'Todos' || entry.tag === glossaryTag;
      const haystack = normalizeText(entry.term + ' ' + entry.def + ' ' + entry.tag);
      return matchesTag && (!query || haystack.indexOf(query) !== -1);
    });

    els.glossaryGrid.innerHTML = filtered.length
      ? filtered.map(function (entry) {
          return '<article class="glossary-card">' +
            '<h3>' + escapeHtml(entry.term) + '<span class="tag">' + escapeHtml(entry.tag) + '</span></h3>' +
            '<p>' + escapeHtml(entry.def) + '</p>' +
          '</article>';
        }).join('')
      : '<p class="empty-result">No hay términos que coincidan con “' + escapeHtml(glossaryQuery) + '”. Prueba otra palabra o cambia la categoría.</p>';

    els.glossaryCount.textContent = filtered.length + ' de ' + D.GLOSSARY.length + ' términos';
  }

  /* ------------------------------- Informe .txt ------------------------------ */
  function buildReport() {
    const now = new Date();
    const dateText = now.toLocaleString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    const elapsed = formatDuration(Math.floor((Date.now() - state.startedAt) / 1000));
    const correct = correctCount();
    const percent = Math.round(correct / TOTAL_A1 * 100);
    const line = '='.repeat(78);
    const thin = '-'.repeat(78);

    let text = line + '\n';
    text += 'INFORME DE LABORATORIO · OPHIOCORDYCEPS UNILATERALIS\n';
    text += 'Biología · Grado 8° · Ciclo sexual y asexual\n';
    text += line + '\n\n';
    text += pad('NOMBRE COMPLETO', 24) + ': ' + (state.profile ? state.profile.name : 'Sin identificar') + '\n';
    text += pad('CURSO', 24) + ': ' + (state.profile ? state.profile.course : 'Sin curso') + '\n';
    text += pad('FECHA Y HORA', 24) + ': ' + dateText + '\n';
    text += pad('TIEMPO DE SESIÓN', 24) + ': ' + elapsed + '\n';
    const decisionRoute = getDecisionRoute();
    text += pad('ESTADO ACTIVIDAD 1', 24) + ': ' + (state.a1Finished ? 'FINALIZADA' : 'EN PROGRESO') + '\n';
    text += pad('PUNTAJE ACTIVIDAD 1', 24) + ': ' + correct + ' / ' + TOTAL_A1 + ' (' + percent + '%)\n';
    text += pad('JUSTIFICACIONES', 24) + ': ' + justifiedCount() + ' / ' + TOTAL_MC + '\n';
    text += pad('ESTADO ACTIVIDAD 2', 24) + ': ' + decisionAnsweredCount() + ' / ' + TOTAL_DEC + ' decisiones\n';
    text += pad('RUTA REPRODUCTIVA', 24) + ': ' + (decisionRoute.route === 'sin definir' ? 'sin definir' : routeLabel(decisionRoute.route)) + '\n';
    text += pad('ESTADO ACTIVIDAD 3', 24) + ': ' + state.a2Completed.size + ' / ' + TOTAL_A2 + ' estructuras\n\n';

    text += thin + '\n';
    text += 'ACTIVIDAD 1 · CICLO DE VIDA, GENÉTICA Y REPRODUCCIÓN\n';
    text += thin + '\n\n';

    if (answeredCount() === 0) {
      text += 'Todavía no se han respondido preguntas.\n\n';
    }

    D.ACTIVITY1.forEach(function (question, index) {
      const answer = state.answers[question.id];
      text += '[PREGUNTA ' + (index + 1) + '] ' + question.topic.toUpperCase() + '\n';
      text += question.question + '\n';
      text += 'Escenario: ' + question.scenario + '\n';

      if (question.type === 'open') {
        if (answer) {
          text += 'RESPUESTA DEL ESTUDIANTE:\n"' + answer.text + '"\n';
          text += 'EVALUACIÓN: cumple los criterios de conceptos clave (revisión docente recomendada).\n';
          text += 'RESPUESTA MODELO: ' + question.modelAnswer + '\n';
        } else {
          text += 'RESPUESTA DEL ESTUDIANTE: sin responder.\n';
        }
      } else {
        const chosen = answer ? question.options.find(function (option) { return option.id === answer.optionId; }) : null;
        const correctOption = question.options.find(function (option) { return option.correct; });
        text += 'RESPUESTA: ' + (chosen ? 'Opción ' + chosen.id + ' · ' + chosen.text : 'Sin responder') + '\n';
        text += 'RESULTADO: ' + (answer ? (answer.correct ? 'CORRECTA' : 'INCORRECTA') : 'SIN RESPONDER') + '\n';
        if (answer && answer.text) {
          text += 'JUSTIFICACIÓN DEL ESTUDIANTE:\n"' + answer.text + '"\n';
        }
        if (answer && !answer.correct) {
          text += 'RESPUESTA CORRECTA: Opción ' + correctOption.id + ' · ' + correctOption.text + '\n';
        }
        text += 'EXPLICACIÓN: ' + question.explanation + '\n';
      }
      text += '\n';
    });

    text += thin + '\n';
    text += 'ACTIVIDAD 2 · DECISIONES REPRODUCTIVAS\n';
    text += thin + '\n\n';
    text += 'RUTA RESULTANTE: ' + (decisionRoute.route === 'sin definir'
      ? 'SIN DEFINIR (actividad incompleta)'
      : routeLabel(decisionRoute.route).toUpperCase()) + '\n';
    text += 'DECISIONES SEXUALES: ' + decisionRoute.sexual + ' / ' + TOTAL_DEC + '\n';
    text += 'DECISIONES ASEXUALES: ' + decisionRoute.asexual + ' / ' + TOTAL_DEC + '\n\n';

    D.REPRODUCTION_DECISIONS.scenarios.forEach(function (scenario, index) {
      const answer = state.decisionAnswers[scenario.id];
      text += '[ESCENARIO ' + (index + 1) + '] ' + scenario.title.toUpperCase() + '\n';
      text += 'SITUACIÓN: ' + scenario.scenario + '\n';
      if (answer) {
        const chosen = scenario.options.find(function (option) {
          return option.id === answer.optionId;
        });
        text += 'ELECCIÓN: ' + (chosen ? chosen.text : '') + ' (' + decisionTypeLabel(answer.type) + ')\n';
        text += 'JUSTIFICACIÓN DEL ESTUDIANTE:\n"' + answer.text + '"\n';
        text += 'AJUSTE AL ESCENARIO: ' + (answer.correct ? 'coherente' : 'menos ajustada') + '\n';
        text += 'EXPLICACIÓN: ' + scenario.explanation + '\n';
      } else {
        text += 'ESTADO: pendiente\n';
      }
      text += '\n';
    });

    text += thin + '\n';
    text += 'ACTIVIDAD 3 · DISECCIÓN FUNCIONAL\n';
    text += thin + '\n\n';

    D.DISSECTION.structures.forEach(function (structure) {
      const answer = state.a2Answers[structure.id];
      text += '[' + structure.num + '] ' + structure.name.toUpperCase() + '\n';
      if (answer) {
        const fn = structure.functionOptions.find(function (option) { return option.id === answer.functionId; });
        const ph = structure.phaseOptions.find(function (option) { return option.id === answer.phaseId; });
        text += 'ESTADO: completada\n';
        text += 'FUNCIÓN ELEGIDA: ' + (fn ? fn.text : '') + '\n';
        text += 'FASE ELEGIDA: ' + (ph ? ph.text : '') + '\n';
        text += 'EXPLICACIÓN: ' + structure.explanation + '\n';
      } else {
        text += 'ESTADO: pendiente\n';
      }
      text += '\n';
    });

    text += thin + '\n';
    text += 'SÍNTESIS CONCEPTUAL\n';
    text += thin + '\n';
    text += '1. Mitosis: produce células genéticamente idénticas; sostiene el crecimiento y la\n';
    text += '   reproducción asexual (conidios, gemación).\n';
    text += '2. Meiosis: reduce el número de cromosomas y genera variabilidad por recombinación;\n';
    text += '   en este hongo ocurre en los ascos dentro de los peritecios (ascosporas).\n';
    text += '3. Estructura y función: el estroma eleva, los peritecios protegen la meiosis, el\n';
    text += '   micelio coloniza y absorbe, y los conidios dispersan clones.\n';
    text += '4. Manipulación conductual: el hongo altera la locomoción y la conducta sin destruir\n';
    text += '   el cerebro; la “mordida de la muerte” fija la hormiga en un microambiente adecuado.\n';
    text += '5. Ciencia aplicada: un biopesticida requiere evaluación de especificidad, efectos no\n';
    text += '   objetivo y riesgo de resistencia antes de su liberación.\n';
    text += '6. Reproducción y ambiente: la vía asexual suele favorecerse en ambientes estables y\n';
    text += '   con hospederos abundantes; la sexual aporta variabilidad y dispersión cuando el\n';
    text += '   ambiente o el hospedero cambian. No hay una estrategia mejor en abstracto.\n\n';

    text += thin + '\n';
    text += 'FUENTES PRINCIPALES\n';
    text += thin + '\n';
    D.SOURCES.slice(0, 6).forEach(function (source, index) {
      text += (index + 1) + '. ' + source + '\n';
    });
    text += '\n';
    text += 'OBSERVACIONES DEL DOCENTE:\n';
    text += '______________________________________________________________________________\n';
    text += '______________________________________________________________________________\n';
    text += '______________________________________________________________________________\n\n';
    text += 'Firma del estudiante: ______________________________    Firma del docente: ______________________________\n';

    return text;
  }

  function downloadText(filename, content) {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  function downloadReport() {
    if (!state.profile) {
      openProfileModal(false);
      return;
    }
    const filename = 'Informe_Ophiocordyceps_' + slug(state.profile.name) + '_' + slug(state.profile.course) + '.txt';
    downloadText(filename, buildReport());
    window.CordycepsAudio.click();
  }

  /* ---------------------------------- Reset ---------------------------------- */
  function resetAll() {
    const confirmed = window.confirm('¿Reiniciar las actividades? Se borrarán tus respuestas, pero conservarás tu nombre y curso.');
    if (!confirmed) return;

    state.a1Index = 0;
    state.answers = {};
    state.selectedOption = null;
    state.openDraft = {};
    state.justDraft = {};
    state.a1Finished = false;
    state.reviewOpen = false;
    state.decisionIndex = 0;
    state.decisionSelected = null;
    state.decisionAnswers = {};
    state.decisionDraft = {};
    state.decisionFinished = false;
    state.a2Selected = null;
    state.a2Picks = {};
    state.a2Answers = {};
    state.a2Completed = new Set();
    state.a2Attempts = {};
    state.a2Celebrated = false;

    els.a1Workspace.hidden = false;
    els.activity1Result.hidden = true;
    els.reviewList.hidden = true;
    els.reviewList.innerHTML = '';
    els.reviewBtn.textContent = 'Revisar mis respuestas';

    els.decisionResult.hidden = true;
    els.decisionResultContent.innerHTML = '';
    els.decisionWorkspace.hidden = false;

    els.activity2Result.hidden = true;
    els.structureEmpty.hidden = false;
    els.structureWorkspace.hidden = true;
    els.structureFeedback.hidden = true;

    renderDecisionScenario(false);
    updateDecisionProgress();
    renderStructureTabs();
    updateMarkers();
    updateA2Progress();
    updateA1Chips();
    renderQuestion(false);
    showView('actividad1');
    startTimer();
    window.CordycepsAudio.click();
  }

  /* --------------------------------- Eventos -------------------------------- */
  function bindEvents() {
    els.profileForm.addEventListener('submit', handleProfileSubmit);
    els.profileChip.addEventListener('click', function () {
      openProfileModal(true);
    });
    els.profileCancel.addEventListener('click', closeProfileModal);
    els.profileModal.addEventListener('keydown', trapModalFocus);

    $$('.tab-btn').forEach(function (button) {
      button.addEventListener('click', function () {
        showView(button.dataset.view);
      });
    });

    els.checkBtn.addEventListener('click', checkAnswer);
    els.nextBtn.addEventListener('click', nextQuestion);
    els.justifyText.addEventListener('input', function () {
      const question = currentQuestion();
      if (!question || question.type === 'open' || state.answers[question.id]) return;
      state.justDraft[question.id] = els.justifyText.value;
      updateJustifyMeta(question);
    });
    els.goA2Btn.addEventListener('click', function () {
      showView('decisiones');
    });
    els.goA3Btn.addEventListener('click', function () {
      showView('actividad2');
    });
    els.backA1Btn.addEventListener('click', function () {
      showView('decisiones');
    });
    els.confirmDecisionBtn.addEventListener('click', confirmDecision);
    els.nextDecisionBtn.addEventListener('click', nextDecision);
    els.decisionJustify.addEventListener('input', function () {
      const scenario = currentDecision();
      if (!scenario || state.decisionAnswers[scenario.id]) return;
      state.decisionDraft[scenario.id] = els.decisionJustify.value;
      updateDecisionJustifyMeta();
    });
    els.restartDecisionBtn.addEventListener('click', resetDecisionActivity);
    els.downloadBtn.addEventListener('click', downloadReport);
    els.downloadResultBtn.addEventListener('click', downloadReport);
    els.downloadA2Btn.addEventListener('click', downloadReport);
    els.downloadDecisionBtn.addEventListener('click', downloadReport);

    els.reviewBtn.addEventListener('click', function () {
      state.reviewOpen = !state.reviewOpen;
      if (state.reviewOpen) {
        renderReview();
        els.reviewList.hidden = false;
        els.reviewBtn.textContent = 'Ocultar revisión';
      } else {
        els.reviewList.hidden = true;
        els.reviewBtn.textContent = 'Revisar mis respuestas';
      }
    });

    $$('.marker').forEach(function (marker) {
      marker.addEventListener('click', function () {
        selectStructure(marker.dataset.structure);
      });
    });

    els.checkStructureBtn.addEventListener('click', checkStructure);
    els.nextStructureBtn.addEventListener('click', nextStructure);

    els.glossarySearch.addEventListener('input', function () {
      glossaryQuery = els.glossarySearch.value;
      renderGlossary();
    });

    els.soundBtn.addEventListener('click', function () {
      const enabled = window.CordycepsAudio.toggle();
      els.soundBtn.textContent = enabled ? '🔊' : '🔇';
      els.soundBtn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
      els.soundBtn.title = enabled ? 'Desactivar sonidos' : 'Activar sonidos';
    });

    els.resetBtn.addEventListener('click', resetAll);

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !els.profileModal.hidden && state.profile) {
        closeProfileModal();
      }
    });
  }
})();
