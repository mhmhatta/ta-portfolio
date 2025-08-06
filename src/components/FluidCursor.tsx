'use client';
import { useEffect } from 'react';
import fluidCursor from '@/hooks/use-FluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && !("ontouchstart" in window)) {
      fluidCursor();
    }
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-0 hidden md:block">
      <canvas id="fluid" className="h-screen w-screen" />
    </div>
  );
};
export default FluidCursor;