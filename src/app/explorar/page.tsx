'use client';

import { OnboardResponses } from '@/components/onboard';
import { questions } from '@/utils/questions';
import { useEffect, useState } from 'react';
import { Preferences } from './Preferences';
import { UserImpact } from './UserImpact';
import { Explorer } from '@/components/plants/Explorer';
import { SavesContextProvider } from './saves-context';
import { TbPlant2 } from 'react-icons/tb';

export default function Explore() {
  const [filters, setFilters] = useState<OnboardResponses | null>(null);
  const [userTags, setUserTags] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isAsideActive, setIsAsideActive] = useState(false);

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
    <div className={'container flex overflow-x-hidden bg-white py-28'}>
      <SavesContextProvider>
        <main className="w-full">
          <h1 className="mb-8 bg-yellow-500 font-serif text-5xl">
            Escolha a sua próxima contribuição contra o impacto das crises
            climáticas
          </h1>
          <section className="bg-red-500">
            <Preferences
              filters={filters}
              clearPreferences={clearPreferences}
              userTags={userTags}
            />
          </section>
          <section className="bg-blue-500">
            <Explorer userTags={userTags} />
          </section>
        </main>
        {!isMobile || (isMobile && isAsideActive) ? (
          <section className="fixed inset-0 z-10 min-h-screen overflow-y-auto bg-black/80 px-4 py-28 lg:static lg:w-4/12 lg:bg-transparent lg:p-0">
            <aside className="min-h-full w-full bg-grass4">
              <UserImpact />
            </aside>
          </section>
        ) : null}
      </SavesContextProvider>
      <div className="fixed bottom-6 right-6 z-20 flex items-center gap-4 lg:hidden">
        <p className="btn-fade flex-center relative bg-white p-3">
          Confira como está sendo seu impacto ambiental aqui
          <span className="absolute left-full size-4 -translate-x-1/2 rotate-45 bg-inherit"></span>
        </p>
        <button
          onClick={() => setIsAsideActive(!isAsideActive)}
          className="flex-center size-20 shrink-0 rounded-full bg-red-500 p-3.5"
        >
          <TbPlant2 className="size-full opacity-70" />
        </button>
      </div>
    </div>
  );
}
