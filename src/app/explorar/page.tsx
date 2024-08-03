'use client';
import { OnboardResponses } from '@/components/onboard';
import { type Plant, plants } from '@/utils/plants';
import { questions } from '@/utils/questions';
import { PlantsList } from './PlantsList';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

  const renderPreferences = () => {
    console.log(userTags);

    if (filters)
      return (
        <>
          <p className="mb-3">Suas preferências: </p>
          <ul className="mb-10 flex flex-wrap gap-2">
            <li>
              <button
                className="flex cursor-pointer items-center gap-1 rounded-full border border-white/20 bg-white/5 px-4 py-1"
                onClick={clearPreferences}
              >
                <span className="text-xs">✖</span> Limpar
              </button>
            </li>
            {userTags.map((tag, i) => (
              <li
                key={i}
                className="cursor-default rounded-full border border-white/20 px-4 py-1"
              >
                {tag}
              </li>
            ))}
          </ul>
        </>
      );

    return (
      <p className="mb-8">
        <Link href="/#onboard" className="text-blue-500 hover:underline">
          Complete o onboarding aqui
        </Link>{' '}
        para encontrar as plantas ideias para você
      </p>
    );
  };

  return (
    <main className="container">
      <h1 className="my-8 text-2xl">
        Encontre a melhor maneira de tornar o mundo mais verde
      </h1>
      {renderPreferences()}

      {recommendedPlants.length ? (
        <>
          <h2 className="text-xl">Recomendações: </h2>
          <PlantsList plants={recommendedPlants} />

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
