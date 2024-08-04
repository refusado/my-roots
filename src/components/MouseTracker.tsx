'use client';

import { useMousePosition } from '@/utils/useMousePosition';
import { useWindowSize } from '@/utils/useWindowSize';
import { motion, useSpring } from 'framer-motion';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

type MouseContext = {
  increase: () => void;
  superIncrease: () => void;
  decrease: () => void;
  setBackground: Dispatch<SetStateAction<string>>;
  setSmallBg: Dispatch<SetStateAction<string>>;
  setFilter: Dispatch<SetStateAction<string>>;
  setZIndex: Dispatch<SetStateAction<number>>;
};
const MouseTrackerContext = createContext<MouseContext>({
  increase: () => {},
  superIncrease: () => {},
  decrease: () => {},
  setBackground: () => {},
  setSmallBg: () => {},
  setFilter: () => {},
  setZIndex: () => {},
});

export function useMouseTracker() {
  return useContext(MouseTrackerContext);
}

export function MouseTrackerProvider({ children }: { children: ReactNode }) {
  const { width } = useWindowSize();

  const { x, y } = useMousePosition();
  const [background, setBackground] = useState('');
  const [smallBg, setSmallBg] = useState('');
  const [filter, setFilter] = useState('brightness(1.25)');
  const [increased, setIncreased] = useState(45);
  const [zIndex, setZIndex] = useState(50);

  const increase = () => setIncreased(100);
  const superIncrease = () => setIncreased(200);
  const decrease = () => setIncreased(45);

  const size = increased;

  const spring = {
    mass: 0.6,
    damping: 20,
    stiffness: 300,
  };

  const smoothX = useSpring(x, spring);
  const smoothY = useSpring(y, spring);

  useEffect(() => {
    smoothX.set(x - size / 2);
    smoothY.set(y - size / 2);
  }, [x, y, size, smoothX, smoothY]);

  return (
    <MouseTrackerContext.Provider
      value={{
        increase,
        superIncrease,
        decrease,
        setBackground,
        setSmallBg,
        setFilter,
        setZIndex,
      }}
    >
      {width > 992 && (
        <>
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-10 rounded-full"
            style={{
              zIndex,
              position: 'fixed',
              background: background,
              backdropFilter: filter,
              x: smoothX,
              y: smoothY,
            }}
            animate={{
              width: size,
              height: size,
            }}
            transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
          ></motion.div>
          <div
            style={{
              position: 'fixed',
              width: 20,
              height: 20,
              transform: `translate(${x - 10}px, ${y - 10}px)`,
              zIndex: zIndex + 1,
              opacity: 0.25,
              background: smallBg,
            }}
            className="pointer-events-none left-0 top-0 rounded-full"
          ></div>
        </>
      )}
      {children}
    </MouseTrackerContext.Provider>
  );
}
