let frame = null;
let previousBehavior = '';

function restoreBehavior() {
  if (previousBehavior !== '') {
    document.documentElement.style.scrollBehavior = previousBehavior;
    previousBehavior = '';
  }
}

export function cancelScrollAnimation() {
  if (frame) {
    cancelAnimationFrame(frame);
    frame = null;
  }
  restoreBehavior();
}

/**
 * Animate to an anchored section with a fixed duration and ease-out.
 *
 * Native `scroll-behavior: smooth` is unreliable on image-heavy pages (the
 * scroll can stall or jump), so the animation is driven frame by frame. The
 * CSS smooth behavior is suspended while the animation runs to avoid the two
 * systems fighting each other.
 */
export function scrollToSection(id, { duration = 520, offset = 96 } = {}) {
  const target = document.getElementById(id);
  if (!target || typeof window === 'undefined') return;

  cancelScrollAnimation();

  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY - offset;
  const distance = targetY - startY;

  if (reduceMotion || duration <= 0 || Math.abs(distance) < 2) {
    previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, targetY);
    restoreBehavior();
    return;
  }

  previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';

  const startTime = performance.now();
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeOutCubic(progress));

    if (progress < 1) {
      frame = requestAnimationFrame(step);
    } else {
      frame = null;
      window.scrollTo(0, targetY);
      restoreBehavior();
    }
  };

  frame = requestAnimationFrame(step);
}

if (typeof window !== 'undefined') {
  // Any deliberate scroll hands control back to the visitor.
  window.addEventListener('wheel', cancelScrollAnimation, { passive: true });
  window.addEventListener('touchstart', cancelScrollAnimation, { passive: true });
}

export default scrollToSection;