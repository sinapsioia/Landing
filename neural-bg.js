// Neural network background — animated nodes + connecting lines that react to scroll & cursor
(function () {
  const canvas = document.getElementById('neural-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  let nodes = [];
  let mouse = { x: -9999, y: -9999, active: false };
  let scrollY = 0;
  let mode = 'neural'; // 'neural' | 'particles' | 'clean'
  let intensity = 1;   // 0..1

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }

  function seed() {
    const baseDensity = mode === 'clean' ? 0 : (mode === 'particles' ? 0.00008 : 0.00012);
    const count = Math.floor(W * H * baseDensity * intensity);
    nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 0.6,
        hue: Math.random() < 0.55 ? 'cyan' : (Math.random() < 0.7 ? 'violet' : 'magenta'),
        pulse: Math.random() * Math.PI * 2,
      });
    }
  }

  function getColor(hue, alpha) {
    if (hue === 'cyan') return `rgba(0, 242, 255, ${alpha})`;
    if (hue === 'violet') return `rgba(124, 58, 237, ${alpha})`;
    return `rgba(255, 0, 110, ${alpha})`;
  }

  let raf = null;
  let last = performance.now();

  function tick(now) {
    raf = requestAnimationFrame(tick);
    const dt = Math.min(50, now - last); last = now;

    ctx.clearRect(0, 0, W, H);
    if (mode === 'clean' || nodes.length === 0) return;

    const linkDist = mode === 'neural' ? 140 : 90;
    const linkDist2 = linkDist * linkDist;

    // Update positions
    for (const n of nodes) {
      n.x += n.vx * dt * 0.06;
      n.y += n.vy * dt * 0.06;
      n.pulse += dt * 0.002;
      // wrap
      if (n.x < -10) n.x = W + 10;
      if (n.x > W + 10) n.x = -10;
      if (n.y < -10) n.y = H + 10;
      if (n.y > H + 10) n.y = -10;

      // mouse repel/attract
      if (mouse.active) {
        const dx = n.x - mouse.x, dy = n.y - mouse.y;
        const d2 = dx*dx + dy*dy;
        if (d2 < 22500) {
          const f = (1 - d2 / 22500) * 0.05;
          n.x += dx * f * 0.05;
          n.y += dy * f * 0.05;
        }
      }
    }

    // Draw connections (only neural mode)
    if (mode === 'neural') {
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx*dx + dy*dy;
          if (d2 < linkDist2) {
            const alpha = (1 - d2 / linkDist2) * 0.35;
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, getColor(a.hue, alpha));
            grad.addColorStop(1, getColor(b.hue, alpha));
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    }

    // Draw nodes
    for (const n of nodes) {
      const pulse = (Math.sin(n.pulse) + 1) * 0.5;
      const r = n.r + pulse * 0.6;
      ctx.fillStyle = getColor(n.hue, 0.55 + pulse * 0.3);
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fill();
      // glow
      ctx.fillStyle = getColor(n.hue, 0.08);
      ctx.beginPath();
      ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; });
  window.addEventListener('mouseleave', () => { mouse.active = false; });
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  // Public API for tweaks
  window.NeuralBG = {
    setMode(m) { mode = m; seed(); },
    setIntensity(v) { intensity = Math.max(0, Math.min(1, v)); seed(); },
    setAccent(palette) {
      // palette = { c1, c2, c3 } — already applied via CSS vars, just reseed for color shift
      seed();
    },
  };

  resize();
  raf = requestAnimationFrame(tick);
})();
