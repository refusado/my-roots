'use client';
import { OnboardResponses } from '@/components/onboard';
import { type Plant, plants } from '@/utils/plants';
import { questions } from '@/utils/questions';
import { PlantsList } from './PlantsList';
import { useEffect, useState } from 'react';
import { Preferences } from './Preferences';

export default function Explore() {
  const [filters, setFilters] = useState<OnboardResponses | null>(null);
  const [userTags, setUserTags] = useState<string[]>([]);
  const [recommendedPlants, setRecommendedPlants] = useState<Plant[]>([]);
  const [notRecommendedPlants, setNotRecommendedPlants] = useState<Plant[]>([]);

  useEffect(() => {
    if (!filters) return setUserTags([]);

    questions.forEach(({ id, options }) => {
      const selectedOption = filters[id];
      if (options[selectedOption]) {
        setUserTags((prev) => [...prev, ...options[selectedOption].tags]);
      }
    });
  }, [filters]);

  useEffect(() => {
    setRecommendedPlants([]);
    setNotRecommendedPlants([]);

    if (!userTags) {
      return;
    }

    plants.forEach((plant) => {
      let match = false;

      plant.tags.forEach((tag) => {
        if (userTags.includes(tag)) match = true;
      });

      if (match) {
        setRecommendedPlants((prev) => [...prev, plant]);
      } else {
        setNotRecommendedPlants((prev) => [...prev, plant]);
      }
    });
  }, [userTags]);

  useEffect(() => {
    const clientFilters = localStorage.getItem('clientFilters');

    if (clientFilters) setFilters(JSON.parse(clientFilters));
  }, []);

  function clearPreferences() {
    setFilters(null);
    localStorage.removeItem('clientFilters');
  }

  return (
    <main className="container py-16">
      <h1 className="my-8 font-serif text-5xl sm:w-8/12">
        Escolha a sua próxima contribuição contra o impacto das crises
        climáticas
      </h1>
      <Preferences
        filters={filters}
        clearPreferences={clearPreferences}
        userTags={userTags}
      />

      {recommendedPlants.length ? (
        <>
          <h2 className="text-xl">Recomendações: </h2>
          <PlantsList plants={recommendedPlants} highlight />

          {notRecommendedPlants.length && (
            <>
              <h2 className="text-2xl">Outras plantas: </h2>
              <PlantsList plants={notRecommendedPlants} />
            </>
          )}
        </>
      ) : (
        <PlantsList plants={plants} />
      )}
    </main>
  );
}
