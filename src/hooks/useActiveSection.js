import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Scroll-spy for an anchored table of contents.
 *
 * The active entry follows the last section whose top has crossed the sticky
 * header offset. Clicking an entry locks that entry in place so the spy cannot
 * flip back to the previous section while the smooth scroll is still running;
 * the lock is released as soon as the visitor scrolls manually.
 */
export function useActiveSection(ids, offset = 120) {
  const key = ids.join('|');
  const hashId = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
  const initialId = hashId && ids.includes(hashId) ? hashId : ids[0] || '';

  const [activeId, setActiveId] = useState(initialId);
  // A deep link (#section) opens with that entry locked in place.
  const lockRef = useRef(initialId !== ids[0] ? initialId : null);

  const lockTo = useCallback((id) => {
    lockRef.current = id;
    setActiveId(id);
  }, []);

  useEffect(() => {
    const list = key ? key.split('|') : [];
    if (list.length === 0) return undefined;

    let frame = 0;

    const update = () => {
      frame = 0;

      if (lockRef.current) {
        setActiveId(lockRef.current);
        return;
      }

      let current = list[0];

      for (const id of list) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top - offset <= 0) {
          current = id;
        } else {
          break;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = list[list.length - 1];

      setActiveId(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const releaseLock = () => {
      lockRef.current = null;
    };

    frame = window.requestAnimationFrame(update);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // Any deliberate user interaction hands control back to the spy.
    window.addEventListener('mousedown', releaseLock, { passive: true });
    window.addEventListener('touchstart', releaseLock, { passive: true });
    window.addEventListener('wheel', releaseLock, { passive: true });
    window.addEventListener('keydown', releaseLock);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('mousedown', releaseLock);
      window.removeEventListener('touchstart', releaseLock);
      window.removeEventListener('wheel', releaseLock);
      window.removeEventListener('keydown', releaseLock);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [key, offset]);

  return [activeId, setActiveId, lockTo];
}

export default useActiveSection;