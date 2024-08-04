'use client';

import { OnboardResponses } from '@/components/onboard';
import { questions } from '@/utils/questions';
import { useEffect, useState } from 'react';
import { Preferences } from './Preferences';
import { UserSaves } from './UserSaves';
import { Explorer } from '@/components/plants/Explorer';

export default function Explore() {
  const [filters, setFilters] = useState<OnboardResponses | null>(null);
  const [userTags, setUserTags] = useState<string[]>([]);

  useEffect(() => {
    const clientFilters = localStorage.getItem('clientFilters');

    if (clientFilters) setFilters(JSON.parse(clientFilters));
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
    <div className="container flex bg-white">
      <main className="w-full">
        <h1 className="my-8 bg-yellow-500 font-serif text-5xl">
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
      <section className="h-screen w-4/12 bg-purple-500">
        <UserSaves />
      </section>
    </div>
  );
}
