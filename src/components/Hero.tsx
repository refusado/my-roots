'use client';

import { CgChevronDoubleDown } from 'react-icons/cg';
import { useMouseTracker } from './MouseTracker';
import { motion } from 'framer-motion';

export function Hero() {
  const { increase, decrease, superIncrease, setSmallBg } = useMouseTracker();

  return (
    <section
      onMouseEnter={() => setSmallBg('white')}
      onMouseLeave={() => setSmallBg('black')}
      className="relative -mt-[4.4rem] text-grass1/90"
    >
      <div className="absolute inset-0 -z-10 bg-black"></div>
      <div className="hero-fade">
        <div className="absolute inset-0 -z-10 bg-green-800 bg-hero-image bg-cover opacity-40 backdrop-brightness-90"></div>
      </div>
      <div className="container relative flex min-h-screen flex-col items-center justify-evenly px-2 pt-20 text-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.25,
              duration: 0.5,
            },
          }}
          className="cursor-defaultfont-serif w-fit max-w-4xl text-4xl md:text-6xl"
          onMouseEnter={superIncrease}
          onMouseLeave={decrease}
        >
          Sabia que{' '}
          <span className="border-b-2 border-yellow-500/60 bg-gradient-to-t from-yellow-100 via-green-50 to-green-50 bg-clip-text text-transparent md:border-b-[3px]">
            você pode fazer a diferença
          </span>{' '}
          no combate ao aquecimento global?
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 0.5,
            },
          }}
          className="w-fit max-w-2xl px-2 text-lg"
        >
          <span className="block rounded-full bg-amber-950/30">
            Diminua o impacto das crises climáticas tornando o mundo mais verde!
          </span>
          Nós te ajudamos a construir um jardim em casa hoje mesmo, seja com uma
          platinha de mesa no seu apertamento ou em um grande quintal!
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.75,
              duration: 0.5,
            },
          }}
          className="flex flex-col items-center gap-3 text-yellow-300/70"
        >
          <a
            onMouseEnter={increase}
            onMouseLeave={decrease}
            href="#onboard"
            className="peer rounded-full bg-dark-grass2/50 px-8 py-3 backdrop-brightness-95 hover:bg-dark-grass3/60"
          >
            Continuar
          </a>
          <CgChevronDoubleDown className="size-5 duration-200 peer-hover:translate-y-2" />
        </motion.div>
      </div>
    </section>
  );
}
