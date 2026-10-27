/* =========================================================================
   VISUALIZADOR DEL CICLO · Canvas 2D
   Dibuja cinco estadios del ciclo de Cordyceps militaris.
   No usa imágenes externas: todo se genera con formas y texto.
   ========================================================================= */
(function () {
  'use strict';

  const canvas = document.getElementById('bioCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let activeVisualStage = 0;
  let animFrame = null;
  let animTime = 0;
  let particles = [];
  let running = false;

  function initParticles() {
    particles = [];
    for (let i = 0; i < 36; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 1 + Math.random() * 2.2,
        speedY: 0.15 + Math.random() * 0.65,
        speedX: (Math.random() - 0.5) * 0.35,
        alpha: 0.15 + Math.random() * 0.5
      });
    }
  }

  function drawBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#0e181c';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    ctx.fillStyle = '#10b981';
    particles.forEach(function (p) {
      p.y += p.speedY;
      p.x += p.speedX;
      if (p.y > canvas.height) p.y = 0;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;

      ctx.save();
      ctx.globalAlpha = p.alpha * 0.35;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }

  function soil(y) {
    ctx.fillStyle = '#1c1917';
    ctx.fillRect(0, y, canvas.width, canvas.height - y);
    ctx.fillStyle = '#3f2a1a';
    ctx.fillRect(0, y, canvas.width, 5);

    ctx.fillStyle = '#57534e';
    for (let i = 0; i < 22; i++) {
      const x = (i * 47 + 11) % canvas.width;
      const yy = y + 18 + (i * 13) % 72;
      ctx.fillRect(x, yy, 8 + (i % 4) * 5, 2);
    }
  }

  function drawPupa(cx, cy, rx, ry, angle, cutaway) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle || 0);

    ctx.fillStyle = cutaway ? '#3b2418' : '#5b3724';
    ctx.strokeStyle = '#a16207';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = cutaway ? '#7c2d12' : '#8b5a2b';
    ctx.lineWidth = 1.5;
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath();
      ctx.ellipse(i * (rx / 3.4), 0, rx * 0.2, ry * 0.94, 0, -Math.PI / 2, Math.PI / 2);
      ctx.stroke();
    }

    ctx.fillStyle = '#3f2a1a';
    ctx.beginPath();
    ctx.ellipse(-rx * 0.82, 0, rx * 0.2, ry * 0.64, 0, 0, Math.PI * 2);
    ctx.fill();

    if (cutaway) {
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(0, 0, rx * 0.9, ry * 0.82, 0, 0, Math.PI * 2);
      ctx.clip();

      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-rx * 0.7, 0);
      ctx.bezierCurveTo(-rx * 0.3, -ry * 0.5, rx * 0.1, ry * 0.4, rx * 0.55, -ry * 0.1);
      ctx.moveTo(-rx * 0.2, -ry * 0.55);
      ctx.bezierCurveTo(0, -ry * 0.1, rx * 0.3, -ry * 0.3, rx * 0.6, ry * 0.35);
      ctx.moveTo(-rx * 0.45, ry * 0.45);
      ctx.bezierCurveTo(-rx * 0.1, ry * 0.2, rx * 0.2, ry * 0.65, rx * 0.7, ry * 0.45);
      ctx.stroke();

      ctx.fillStyle = '#a7f3d0';
      for (let i = 0; i < 9; i++) {
        const a = i * 0.8;
        ctx.beginPath();
        ctx.arc(Math.cos(a) * rx * 0.55, Math.sin(a) * ry * 0.58, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    ctx.restore();
  }

  function drawStromaShape(x, y, height, lean, dots) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(lean || 0);

    const width = Math.max(10, height * 0.16);
    const grad = ctx.createLinearGradient(-width, 0, width, 0);
    grad.addColorStop(0, '#c2410c');
    grad.addColorStop(0.45, '#f97316');
    grad.addColorStop(1, '#fdba74');

    ctx.fillStyle = grad;
    ctx.strokeStyle = '#9a3412';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-width * 0.55, 0);
    ctx.bezierCurveTo(-width * 1.25, -height * 0.42, -width * 0.7, -height * 0.82, -width * 0.45, -height);
    ctx.quadraticCurveTo(0, -height * 1.12, width * 0.45, -height);
    ctx.bezierCurveTo(width * 0.7, -height * 0.82, width * 1.25, -height * 0.42, width * 0.55, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = 'rgba(255, 237, 213, 0.35)';
    ctx.beginPath();
    ctx.ellipse(-width * 0.22, -height * 0.55, width * 0.18, height * 0.25, 0.15, 0, Math.PI * 2);
    ctx.fill();

    if (dots) {
      ctx.fillStyle = '#7c2d12';
      for (let i = 0; i < 14; i++) {
        const px = Math.sin(i * 2.3) * width * 0.42;
        const py = -height * (0.48 + (i % 7) * 0.07);
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.restore();
  }

  function label(text, x, y, color, align) {
    ctx.fillStyle = color || '#cbd5e1';
    ctx.font = '12px monospace';
    ctx.textAlign = align || 'left';
    ctx.fillText(text, x, y);
    ctx.textAlign = 'left';
  }

  function drawSporeShape(x, y, r, color) {
    ctx.save();
    ctx.shadowColor = color || '#10b981';
    ctx.shadowBlur = 16;
    ctx.fillStyle = color || '#065f46';
    ctx.strokeStyle = '#a7f3d0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(x, y, r * 0.7, r, 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  function drawSpore() {
    const w = canvas.width;
    const h = canvas.height;
    const groundY = h - 105;

    soil(groundY);
    drawPupa(w * 0.62, groundY - 28, 62, 34, 0.04, false);

    const sporeX = w * 0.28 + Math.sin(animTime * 1.4) * 10;
    const sporeY = h * 0.32 + Math.sin(animTime * 2) * 6;
    drawSporeShape(sporeX, sporeY, 16, '#10b981');

    ctx.strokeStyle = 'rgba(16, 185, 129, 0.35)';
    ctx.setLineDash([4, 6]);
    ctx.beginPath();
    ctx.moveTo(sporeX + 16, sporeY + 18);
    ctx.quadraticCurveTo(sporeX + 55, h * 0.5, w * 0.6, groundY - 52);
    ctx.stroke();
    ctx.setLineDash([]);

    label('Ascospora haploide (n)', sporeX + 34, sporeY - 12, '#6ee7b7');
    label('Pupa de lepidóptero', w * 0.62 - 58, groundY + 34, '#fcd34d');
    label('SUELO Y HOJARASCA · INICIO DEL CICLO', 20, h - 16, '#78716c');
  }

  function drawHypha() {
    const w = canvas.width;
    const h = canvas.height;
    const surfaceY = h * 0.58;

    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, surfaceY, w, h - surfaceY);
    ctx.fillStyle = '#334155';
    ctx.fillRect(0, surfaceY, w, 6);

    label('CUTÍCULA DE LA PUPA (QUITINA)', 24, surfaceY + 24, '#94a3b8');

    const sx = w * 0.34;
    const sy = h * 0.3;
    drawSporeShape(sx, sy, 15, '#10b981');

    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(sx, sy + 14);
    ctx.bezierCurveTo(sx + 10, sy + 54, sx + 52, surfaceY - 28, sx + 56, surfaceY + 2);
    ctx.stroke();

    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.ellipse(sx + 56, surfaceY + 10, 13, 9, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(sx + 62, surfaceY + 16);
    ctx.bezierCurveTo(sx + 86, surfaceY + 34, sx + 92, surfaceY + 66, sx + 108, surfaceY + 76);
    ctx.stroke();

    ctx.save();
    ctx.globalAlpha = 0.45 + Math.sin(animTime * 4) * 0.2;
    ctx.fillStyle = '#fbbf24';
    for (let i = 0; i < 12; i++) {
      const a = i * 1.7;
      ctx.beginPath();
      ctx.arc(sx + 70 + Math.cos(a) * (16 + (i % 4) * 5), surfaceY + 30 + Math.sin(a) * 15, 2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    label('Tubo germinativo', sx + 20, sy + 66, '#6ee7b7');
    label('Apresorio + enzimas (quitinasa / proteasa)', sx + 88, surfaceY + 104, '#fcd34d');
    label('La hifa perfora la cutícula', 24, h - 22, '#78716c');
  }

  function drawMycelium() {
    const w = canvas.width;
    const h = canvas.height;

    drawPupa(w * 0.5, h * 0.48, 125, 74, -0.02, true);

    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.5 - 118, h * 0.48);
    ctx.bezierCurveTo(w * 0.36, h * 0.28, w * 0.28, h * 0.62, w * 0.16, h * 0.5);
    ctx.moveTo(w * 0.5 + 95, h * 0.42);
    ctx.bezierCurveTo(w * 0.72, h * 0.3, w * 0.82, h * 0.55, w * 0.9, h * 0.4);
    ctx.moveTo(w * 0.5, h * 0.48 + 62);
    ctx.bezierCurveTo(w * 0.42, h * 0.74, w * 0.56, h * 0.8, w * 0.62, h * 0.9);
    ctx.stroke();

    label('Micelio: red de hifas', w * 0.14, h * 0.24, '#6ee7b7');
    label('Coloniza tejidos y absorbe nutrientes', w * 0.14, h * 0.24 + 19, '#94a3b8');
    label('INTERIOR DE LA PUPA', 20, h - 18, '#78716c');
  }

  function drawStroma() {
    const w = canvas.width;
    const h = canvas.height;
    const groundY = h - 78;

    soil(groundY);
    drawPupa(w * 0.54, groundY - 18, 78, 36, 0.02, false);

    drawStromaShape(w * 0.48, groundY - 30, 170, -0.08, true);
    drawStromaShape(w * 0.6, groundY - 28, 132, 0.12, true);

    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(w * 0.48 + 12, groundY - 150);
    ctx.lineTo(w * 0.2, groundY - 178);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(w * 0.6 + 10, groundY - 110);
    ctx.lineTo(w * 0.94, groundY - 140);
    ctx.stroke();

    label('Estroma (cuerpo fructífero)', w * 0.12, groundY - 182, '#fdba74');
    label('Peritecios (puntos)', w * 0.96, groundY - 146, '#fde68a', 'right');
    label('La altura ayuda a dispersar las ascosporas', 20, h - 16, '#78716c');
  }

  function drawDispersal() {
    const w = canvas.width;
    const h = canvas.height;
    const groundY = h - 72;

    soil(groundY);

    drawStromaShape(w * 0.3, groundY - 8, 190, -0.03, true);
    drawPupa(w * 0.26, groundY - 8, 50, 24, 0.02, false);

    ctx.strokeStyle = 'rgba(148, 163, 184, 0.55)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.2, 70 + i * 28);
      ctx.bezierCurveTo(w * 0.42, 40 + i * 28, w * 0.58, 100 + i * 28, w * 0.86, 58 + i * 28);
      ctx.stroke();
    }

    for (let s = 0; s < 36; s++) {
      const phase = (animTime * 0.55 + s * 0.11) % 1;
      const sx = w * 0.32 + phase * (w * 0.55) + Math.sin(s * 1.7) * 16;
      const sy = 160 - phase * 110 + Math.sin(s * 2.1 + animTime) * 18;
      ctx.fillStyle = s % 3 === 0 ? '#f59e0b' : '#34d399';
      ctx.beginPath();
      ctx.arc(sx, sy, 2 + (s % 3), 0, Math.PI * 2);
      ctx.fill();
    }

    drawSporeShape(w * 0.78, h * 0.28, 9, '#f59e0b');
    label('Eyección activa de ascosporas', w * 0.42, groundY - 46, '#fcd34d');
    label('El viento las transporta a nuevas pupas', w * 0.42, groundY - 27, '#94a3b8');
    label('NUEVOS HOSPEDEROS · NUEVO CICLO', 20, h - 16, '#78716c');
  }

  function draw() {
    drawBackground();

    if (activeVisualStage === 0) drawSpore();
    else if (activeVisualStage === 1) drawHypha();
    else if (activeVisualStage === 2) drawMycelium();
    else if (activeVisualStage === 3) drawStroma();
    else drawDispersal();
  }

  function frame() {
    animTime += 0.03;
    draw();
    if (!reduceMotion) {
      animFrame = requestAnimationFrame(frame);
    } else {
      running = false;
    }
  }

  function start() {
    if (running) return;
    initParticles();
    running = true;
    if (reduceMotion) {
      draw();
      running = false;
    } else {
      animFrame = requestAnimationFrame(frame);
    }
  }

  function setStage(index) {
    const safeIndex = Math.max(0, Math.min(4, Number(index) || 0));
    activeVisualStage = safeIndex;
    if (reduceMotion) draw();
  }

  function getStage() {
    return activeVisualStage;
  }

  window.CordycepsCanvas = {
    start: start,
    setStage: setStage,
    getStage: getStage
  };
})();
