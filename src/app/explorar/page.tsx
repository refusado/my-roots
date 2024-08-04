'use client';

import { OnboardResponses } from '@/components/onboard';
import { questions } from '@/utils/questions';
import { useEffect, useState } from 'react';
import { Preferences } from './Preferences';
import { UserImpact } from './UserImpact';
import { Explorer } from '@/components/plants/Explorer';
import { SavesContextProvider } from './saves-context';
import { TbPlant2 } from 'react-icons/tb';
import { CgClose } from 'react-icons/cg';
import { useMouseTracker } from '@/components/MouseTracker';

export default function Explore() {
  const [filters, setFilters] = useState<OnboardResponses | null>(null);
  const [userTags, setUserTags] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isAsideActive, setIsAsideActive] = useState(false);
  const { setSmallBg, setFilter, setBackground } = useMouseTracker();

  useEffect(() => {
    const clientFilters = localStorage.getItem('clientFilters');
    setIsMobile(window.innerWidth <= 1024);

    if (clientFilters) setFilters(JSON.parse(clientFilters));

    const windowResizeHandler: (this: Window, ev: UIEvent) => void = (e) => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', windowResizeHandler);
    return () => window.removeEventListener('resize', windowResizeHandler);
  }, []);

  useEffect(() => {
    if (!filters) return setUserTags([]);

    questions.forEach(({ id, options }) => {
      const selectedOption = filters[id];
      if (options[selectedOption]) {
        setUserTags((prev) => [...prev, ...options[selectedOption].tags]);
      }
    });
  }, [filters]);

  function clearPreferences() {
    setFilters(null);
    localStorage.removeItem('clientFilters');
  }

  return (
    <div
      onMouseEnter={() => {
        setSmallBg('black');
        setBackground('');
      }}
      className={'container flex overflow-x-hidden py-28'}
    >
      <SavesContextProvider>
        <main className="w-full">
          <h1 className="mb-8 font-serif text-5xl text-amber-950">
            Escolha a sua próxima contribuição contra o impacto das crises
            climáticas
          </h1>
          <section className="">
            <Preferences
              filters={filters}
              clearPreferences={clearPreferences}
              userTags={userTags}
            />
          </section>
          <section className="">
            <Explorer userTags={userTags} />
          </section>
        </main>
        {!isMobile || (isMobile && isAsideActive) ? (
          <section
            onMouseEnter={() => setFilter('invert(150%)')}
            onMouseLeave={() => setFilter('brightness(1.25)')}
            className="fixed inset-0 z-10 min-h-screen overflow-y-auto bg-black/80 px-4 py-28 lg:static lg:w-4/12 lg:overflow-y-visible lg:bg-transparent lg:p-0"
          >
            <aside className="w-full rounded-3xl border-2 border-green-900/20 bg-grass4 py-20 shadow-xl lg:-mt-20 lg:rounded-[9999px_9999px_75rem_75rem] lg:py-40">
              <UserImpact />
            </aside>
          </section>
        ) : null}
      </SavesContextProvider>
      <div className="fixed bottom-6 right-6 z-20 flex items-center gap-4 lg:hidden">
        <p className="btn-fade flex-center relative ml-3 rounded-full bg-white p-3 shadow-md">
          Confira como está sendo seu impacto ambiental aqui
          <span className="absolute left-full -z-10 size-7 -translate-x-6 rotate-45 rounded-lg bg-inherit shadow-md"></span>
        </p>
        <button
          onClick={() => setIsAsideActive(!isAsideActive)}
          className="flex-center size-16 shrink-0 rounded-full bg-green-500 p-2.5 shadow-lg"
        >
          {isAsideActive ? (
            <CgClose className="m-0.5 size-full opacity-70" />
          ) : (
            <TbPlant2 className="size-full opacity-70" />
          )}
        </button>
      </div>
    </div>
  );
}
