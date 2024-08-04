import { useEffect, useState } from 'react';
import { PlantsList } from './List';
import { type Plant, plants } from '@/utils/plants';

export function Explorer({ userTags }: { userTags: string[] }) {
  const [recommendedPlants, setRecommendedPlants] = useState<Plant[]>([]);
  const [notRecommendedPlants, setNotRecommendedPlants] = useState<Plant[]>([]);

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

  if (!recommendedPlants.length) return <PlantsList plants={plants} />;

  return (
    <>
      <h2 className="mb-2 text-2xl">Recomendadas para você</h2>
      <PlantsList plants={recommendedPlants} highlight />

      {notRecommendedPlants.length && (
        <>
          <hr className="mb-8 h-[2px] bg-amber-900/60" />
          <h2 className="mb-2 text-2xl">
            Outras plantas que você pode gostar{' '}
          </h2>
          <PlantsList plants={notRecommendedPlants} />
        </>
      )}
    </>
  );
}
