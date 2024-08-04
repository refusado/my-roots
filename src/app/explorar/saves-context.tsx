import { Plant, plants } from '@/utils/plants';
import { createContext, ReactNode, useEffect, useState } from 'react';

export const savesContext = createContext<{
  removePlant: (plant: Plant) => void;
  addPlant: (plant: Plant) => void;
  storedPlants: Plant[];
}>({
  removePlant: () => {},
  addPlant: () => {},
  storedPlants: [],
});

export function SavesContextProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Plant[]>([]);

  useEffect(() => {
    const clientPlants = localStorage.getItem('clientPlants');

    if (clientPlants) {
      try {
        const storedPlantsId: string[] = JSON.parse(clientPlants);

        const storedPlantsData = plants.filter(({ id }) =>
          storedPlantsId.includes(id),
        );
        setData(storedPlantsData);
      } catch (error) {
        console.error('Failed parsing clientPlants', error);
      }
    } else localStorage.setIem('clientPlants', JSON.stringify([]));
  }, []);

  function saveClientPlant({ id }: Plant) {
    const clientPlants = localStorage.getItem('clientPlants');

    if (clientPlants) {
      try {
        const storedPlantsId: string[] = JSON.parse(clientPlants);

        if (storedPlantsId.find((storedId) => storedId == id)) {
          console.log('This plant was already added in the storage');
          return;
        }

        const currentPlantsData = plants.filter((plant) =>
          storedPlantsId.includes(plant.id),
        );
        const currentPlantsId = currentPlantsData.map((plant) => plant.id);

        const newPlant = plants.find((plant) => plant.id == id);

        if (newPlant) setData([...currentPlantsData, newPlant]);

        localStorage.setItem(
          'clientPlants',
          JSON.stringify([...currentPlantsId, id]),
        );
      } catch (error) {
        console.error('Failed parsing clientPlants', error);
      }
    } else localStorage.setIem('clientPlants', JSON.stringify([id]));
  }

  function removeClientPlant({ id }: Plant) {
    const clientPlants = localStorage.getItem('clientPlants');

    if (clientPlants) {
      try {
        const storedPlantsId: string[] = JSON.parse(clientPlants);

        if (!storedPlantsId.find((storedId) => storedId == id)) {
          console.log('This plant was not added in the storage');
          return;
        }

        const currentPlantsData = plants.filter((plant) =>
          storedPlantsId.includes(plant.id),
        );
        const currentPlantsId = currentPlantsData.map((plant) => plant.id);

        const newPlantsData = currentPlantsData.filter(
          (plant) => plant.id != id,
        );
        const newPlantsId = currentPlantsId.filter((currId) => currId != id);

        setData(newPlantsData);

        localStorage.setItem('clientPlants', JSON.stringify(newPlantsId));
      } catch (error) {
        console.error('Failed parsing clientPlants', error);
      }
    } else localStorage.setIem('clientPlants', JSON.stringify([id]));
  }

  return (
    <savesContext.Provider
      value={{
        removePlant: removeClientPlant,
        addPlant: saveClientPlant,
        storedPlants: data,
      }}
    >
      {children}
    </savesContext.Provider>
  );
}
