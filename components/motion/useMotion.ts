import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scanMotionTargets, startMotion } from './engine';

/** Mount once inside the router: starts the engine and rescans on every route change. */
export const useMotion = (): void => {
  const { pathname } = useLocation();
  useEffect(() => {
    startMotion();
    // Wait a frame so the new route's DOM is in place before scanning.
    const id = requestAnimationFrame(scanMotionTargets);
    return () => cancelAnimationFrame(id);
  }, [pathname]);
};
