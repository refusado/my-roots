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
      <h2 className="text-xl">Recomendações: </h2>
      <PlantsList plants={recommendedPlants} highlight />

      {notRecommendedPlants.length && (
        <>
          <h2 className="text-2xl">Outras plantas: </h2>
          <PlantsList plants={notRecommendedPlants} />
        </>
      )}
    </>
  );
}
