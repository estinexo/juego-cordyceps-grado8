/* =========================================================================
   AUDIO · Sonidos cortos generados con Web Audio API.
   Sin archivos externos. Se activan con el primer clic del usuario.
   ========================================================================= */
(function () {
  'use strict';

  let ctx = null;
  let enabled = true;

  function init() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      ctx = new AudioCtx();
    }
    if (ctx.state === 'suspended') {
      ctx.resume().catch(function () {});
    }
    return ctx;
  }

  function tone(freq, type, duration, gainValue) {
    if (!enabled) return;
    try {
      const audio = init();
      if (!audio) return;
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(freq, audio.currentTime);
      gain.gain.setValueAtTime(typeof gainValue === 'number' ? gainValue : 0.06, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + duration);
      osc.connect(gain);
      gain.connect(audio.destination);
      osc.start();
      osc.stop(audio.currentTime + duration);
    } catch (error) {
      /* El audio es opcional: si falla, la actividad sigue funcionando. */
    }
  }

  window.CordycepsAudio = {
    click: function () { tone(480, 'sine', 0.07, 0.035); },
    correct: function () {
      tone(660, 'sine', 0.15, 0.06);
      window.setTimeout(function () { tone(880, 'triangle', 0.2, 0.05); }, 110);
    },
    wrong: function () {
      tone(220, 'sawtooth', 0.16, 0.035);
      window.setTimeout(function () { tone(180, 'sawtooth', 0.2, 0.03); }, 110);
    },
    complete: function () {
      tone(523.25, 'sine', 0.14, 0.05);
      window.setTimeout(function () { tone(659.25, 'sine', 0.14, 0.05); }, 120);
      window.setTimeout(function () { tone(783.99, 'sine', 0.28, 0.05); }, 240);
    },
    toggle: function () {
      enabled = !enabled;
      if (enabled) tone(600, 'sine', 0.1, 0.04);
      return enabled;
    },
    isEnabled: function () { return enabled; }
  };
})();
