import { useEffect } from 'react';
import Lenis from 'lenis';

// Hook to initialize Lenis smooth scrolling once
export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      gestureDirection: 'vertical',
      lerp: 0.08,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      // @ts-ignore lenis internal
      if (lenis.destroy) lenis.destroy();
    };
  }, []);
};
