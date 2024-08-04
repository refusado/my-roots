'use client';

import { useEffect, useState } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const updatePosition: (e: MouseEvent) => void = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return position;
}
