/* =========================================================================
   VISUALIZADOR DEL CICLO · Canvas 2D
   Dibuja cinco estadios del ciclo de Ophiocordyceps.
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
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 1 + Math.random() * 2.5,
        speedY: 0.2 + Math.random() * 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        alpha: 0.2 + Math.random() * 0.6
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
      ctx.globalAlpha = p.alpha * 0.4;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }

  function drawSpore() {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, cy + 90, canvas.width, 110);
    ctx.fillStyle = '#334155';
    ctx.fillRect(0, cy + 90, canvas.width, 4);

    ctx.fillStyle = '#64748b';
    ctx.font = '12px monospace';
    ctx.fillText('EXOESQUELETO DE LA HORMIGA (QUITINA)', 40, cy + 120);

    const sporeY = cy + 50 + Math.sin(animTime * 2) * 3;
    ctx.save();
    ctx.shadowColor = '#10b981';
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#065f46';
    ctx.beginPath();
    ctx.ellipse(cx, sporeY, 45, 65, 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.lineWidth = 4;
    ctx.strokeStyle = '#10b981';
    ctx.stroke();

    ctx.fillStyle = '#34d399';
    ctx.beginPath();
    ctx.ellipse(cx - 5, sporeY - 8, 16, 20, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(cx + 15, sporeY + 20, 7, 0, Math.PI * 2);
    ctx.arc(cx - 18, sporeY + 25, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '12px sans-serif';
    ctx.fillText('Núcleo haploide (ADN fúngico)', cx + 60, sporeY - 10);
    ctx.strokeStyle = '#64748b';
    ctx.beginPath();
    ctx.moveTo(cx + 10, sporeY - 8);
    ctx.lineTo(cx + 55, sporeY - 10);
    ctx.stroke();
  }

  function drawHypha() {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, cy + 70, canvas.width, 130);
    ctx.fillStyle = '#334155';
    ctx.fillRect(0, cy + 70, canvas.width, 6);

    ctx.fillStyle = '#64748b';
    ctx.font = '12px monospace';
    ctx.fillText('CAPA DE QUITINA PERFORADA POR QUITINASAS', 40, cy + 110);

    const sporeY = cy + 20;
    ctx.fillStyle = '#065f46';
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(cx - 80, sporeY, 35, 50, 0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx - 55, sporeY + 25);
    ctx.bezierCurveTo(cx - 20, sporeY + 40, cx - 10, cy + 50, cx, cy + 70);
    ctx.lineTo(cx + 25, cy + 130);
    ctx.lineTo(cx + 10, cy + 135);
    ctx.bezierCurveTo(cx - 15, cy + 80, cx - 35, sporeY + 55, cx - 75, sporeY + 35);
    ctx.closePath();
    ctx.fillStyle = '#059669';
    ctx.fill();
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.strokeStyle = '#064e3b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - 40, sporeY + 38);
    ctx.lineTo(cx - 30, sporeY + 52);
    ctx.moveTo(cx - 15, cy + 58);
    ctx.lineTo(cx + 5, cy + 68);
    ctx.stroke();

    ctx.save();
    ctx.globalAlpha = 0.5 + Math.sin(animTime * 4) * 0.2;
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(cx + 20, cy + 130, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.fillStyle = '#6ee7b7';
    ctx.font = '11px sans-serif';
    ctx.fillText('Enzimas digestivas (quitinasa / proteasa)', cx + 50, cy + 135);
  }

  function drawMycelium() {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#7f1d1d';
    for (let i = 0; i < 7; i++) {
      ctx.fillRect(40, 60 + i * 45, canvas.width - 80, 26);
      ctx.fillStyle = '#991b1b';
      ctx.fillRect(40, 68 + i * 45, canvas.width - 80, 4);
      ctx.fillStyle = '#7f1d1d';
    }

    ctx.fillStyle = '#fca5a5';
    ctx.font = '11px monospace';
    ctx.fillText('FIBRAS MUSCULARES DEL HOSPEDERO', 50, 45);

    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    function drawBranch(x, y, length, angle, depth) {
      if (depth <= 0) return;
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      ctx.fillStyle = '#065f46';
      ctx.beginPath();
      ctx.arc(endX, endY, 3, 0, Math.PI * 2);
      ctx.fill();

      const sway = Math.sin(animTime + depth) * 0.1;
      drawBranch(endX, endY, length * 0.72, angle - 0.45 + sway, depth - 1);
      drawBranch(endX, endY, length * 0.72, angle + 0.45 + sway, depth - 1);
    }

    drawBranch(cx, canvas.height - 30, 65, -Math.PI / 2, 5);
    drawBranch(cx - 140, canvas.height - 30, 55, -Math.PI / 2.3, 4);
    drawBranch(cx + 140, canvas.height - 30, 55, -Math.PI / 1.8, 4);

    const pulseY = cy + Math.sin(animTime * 3) * 60;
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(cx, pulseY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fef3c7';
    ctx.font = '11px sans-serif';
    ctx.fillText('Señales químicas del hongo', cx + 15, pulseY + 4);
  }

  function drawStroma() {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    ctx.fillStyle = '#064e3b';
    ctx.beginPath();
    ctx.moveTo(0, cy - 80);
    ctx.quadraticCurveTo(cx, cy - 60, canvas.width, cy - 90);
    ctx.lineTo(canvas.width, cy - 110);
    ctx.quadraticCurveTo(cx, cy - 80, 0, cy - 120);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = '#34d399';
    ctx.font = '11px monospace';
    ctx.fillText('ENVÉS DE LA HOJA · MICROAMBIENTE HÚMEDO', 40, cy - 125);

    ctx.fillStyle = '#1c1917';
    ctx.strokeStyle = '#44403c';
    ctx.lineWidth = 3;

    const antX = cx - 30;
    const antY = cy - 40;
    ctx.beginPath();
    ctx.ellipse(antX, antY, 22, 18, -0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(antX - 10, antY - 12);
    ctx.lineTo(antX - 5, cy - 70);
    ctx.moveTo(antX + 5, antY - 14);
    ctx.lineTo(antX + 2, cy - 70);
    ctx.stroke();

    ctx.fillStyle = '#292524';
    ctx.beginPath();
    ctx.ellipse(antX + 35, antY + 20, 20, 14, 0.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(antX + 85, antY + 45, 34, 22, 0.7, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#44403c';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(antX + 25, antY + 20); ctx.lineTo(antX + 20, antY - 10); ctx.lineTo(antX + 25, cy - 65);
    ctx.moveTo(antX + 40, antY + 25); ctx.lineTo(antX + 50, antY); ctx.lineTo(antX + 60, cy - 65);
    ctx.moveTo(antX + 50, antY + 30); ctx.lineTo(antX + 75, antY + 15); ctx.lineTo(antX + 90, cy - 65);
    ctx.stroke();

    ctx.save();
    ctx.shadowColor = '#f59e0b';
    ctx.shadowBlur = 15;
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(antX, antY - 10);
    ctx.quadraticCurveTo(antX - 30, antY + 60, antX - 45, antY + 140);
    ctx.stroke();

    ctx.fillStyle = '#b45309';
    ctx.beginPath();
    ctx.ellipse(antX - 42, antY + 110, 16, 26, -0.3, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#fef3c7';
    for (let p = 0; p < 8; p++) {
      ctx.beginPath();
      ctx.arc(antX - 45 + (p % 3) * 6, antY + 95 + p * 4, 1.8, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    ctx.fillStyle = '#fcd34d';
    ctx.font = '12px sans-serif';
    ctx.fillText('Estroma con peritecios (cuerpo fructífero)', antX - 210, antY + 120);
    ctx.strokeStyle = '#b45309';
    ctx.beginPath();
    ctx.moveTo(antX - 58, antY + 115);
    ctx.lineTo(antX - 68, antY + 115);
    ctx.stroke();
  }

  function drawDispersal() {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    ctx.fillStyle = '#064e3b';
    ctx.fillRect(0, 20, canvas.width, 30);

    ctx.fillStyle = '#292524';
    ctx.beginPath();
    ctx.ellipse(cx - 50, 80, 25, 14, 0.4, 0, Math.PI * 2);
    ctx.ellipse(cx - 15, 100, 30, 18, 0.6, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(cx - 70, 70);
    ctx.quadraticCurveTo(cx - 90, 130, cx - 80, 180);
    ctx.stroke();

    ctx.fillStyle = '#d97706';
    ctx.beginPath();
    ctx.ellipse(cx - 80, 165, 18, 28, 0.2, 0, Math.PI * 2);
    ctx.fill();

    for (let s = 0; s < 50; s++) {
      const angle = 0.5 + (s * 0.05);
      const dist = ((animTime * 140 + s * 12) % 260);
      const sx = cx - 80 + Math.cos(angle) * dist + (s % 5) * 8;
      const sy = 165 + Math.sin(angle) * dist + dist * 0.6;

      ctx.fillStyle = s % 2 === 0 ? '#10b981' : '#f59e0b';
      ctx.beginPath();
      ctx.arc(sx, sy, 2 + (s % 3), 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = '#1c1917';
    ctx.fillRect(0, canvas.height - 40, canvas.width, 40);
    ctx.fillStyle = '#78716c';
    ctx.font = '11px monospace';
    ctx.fillText('SUELO DEL BOSQUE · ZONA DE CONTAGIO', 30, canvas.height - 15);

    ctx.fillStyle = '#44403c';
    const antWalkX = (animTime * 40) % canvas.width;
    ctx.fillRect(antWalkX, canvas.height - 30, 12, 6);
    ctx.fillRect(antWalkX + 14, canvas.height - 28, 8, 4);

    ctx.fillStyle = '#a7f3d0';
    ctx.font = '13px sans-serif';
    ctx.fillText('Eyección activa de ascosporas', cx + 10, 180);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText('El viento las transporta a nuevas hormigas', cx + 10, 200);

    /* La variable cy se mantiene para conservar la composición del dibujo. */
    void cy;
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
