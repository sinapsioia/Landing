// Parallax + scroll effects engine — fancy multi-layer scroll fx

(function() {
  let scrollY = 0;
  let raf = null;
  const targets = [];

  function register(el, opts) {
    targets.push({ el, ...opts });
  }

  function update() {
    raf = null;
    const vh = window.innerHeight;

    for (const t of targets) {
      const rect = t.el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const progress = (vh / 2 - center) / vh; // -1..1 roughly

      if (t.kind === 'translateY') {
        const y = progress * (t.speed || 30);
        t.el.style.transform = `translate3d(0, ${y}px, 0)`;
      } else if (t.kind === 'scale') {
        // scale based on distance from viewport center
        const dist = Math.abs(progress);
        const s = 1 - dist * 0.05;
        t.el.style.transform = `scale(${Math.max(0.94, Math.min(1, s))})`;
      } else if (t.kind === 'rotate') {
        const r = progress * (t.speed || 8);
        t.el.style.transform = `rotate(${r}deg)`;
      } else if (t.kind === 'fade') {
        const dist = Math.abs(progress);
        t.el.style.opacity = Math.max(0.3, 1 - dist * 0.6);
      } else if (t.kind === 'blur') {
        const dist = Math.abs(progress);
        t.el.style.filter = `blur(${dist * 4}px)`;
      }
    }

    // Header progress bar
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = Math.min(1, Math.max(0, scrollY / max));
    const bar = document.getElementById('scroll-progress');
    if (bar) bar.style.transform = `scaleX(${p})`;
  }

  function onScroll() {
    scrollY = window.scrollY;
    if (!raf) raf = requestAnimationFrame(update);
  }

  function refresh() {
    targets.length = 0;
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const kind = el.dataset.parallax;
      const speed = parseFloat(el.dataset.speed || '30');
      register(el, { kind, speed });
    });
    update();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { if (!raf) raf = requestAnimationFrame(update); });

  // Initial setup once DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(refresh, 200));
  } else {
    setTimeout(refresh, 200);
  }
  // Also refresh when content updates (after React renders)
  setTimeout(refresh, 800);
  setTimeout(refresh, 2000);

  window.SinapsioParallax = { refresh };
})();
