import { useEffect, useState } from 'react';

export function useWindowSize() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
