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

function getStorage(): string[] {
  const clientPlants = localStorage.getItem('clientPlants');
  if (!clientPlants) {
    localStorage.setItem('clientPlants', JSON.stringify([]));
    return [];
  }

  try {
    return JSON.parse(clientPlants);
  } catch (error) {
    console.error('Failed parsing clientPlants', error);
    return [];
  }
}

function setStoredIds(plantsData: string[]) {
  try {
    localStorage.setItem('clientPlants', JSON.stringify([...plantsData]));
  } catch (error) {
    console.error('Failed adding "plantsData" to localStorage', plantsData);
    return [];
  }
}

export function SavesContextProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Plant[]>([]);

  useEffect(() => {
    const storedPlantsId = getStorage();

    const storedPlantsData = plants.filter(({ id }) =>
      storedPlantsId.includes(id),
    );
    setData(storedPlantsData);
  }, []);

  function saveClientPlant({ id }: Plant) {
    const storedPlantsId = getStorage();

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
    setStoredIds([...currentPlantsId, id]);
  }

  function removeClientPlant({ id }: Plant) {
    const storedPlantsId = getStorage();

    if (!storedPlantsId.find((storedId) => storedId == id)) {
      console.log('This plant was not added in the storage');
      return;
    }

    const currentPlantsData = plants.filter((plant) =>
      storedPlantsId.includes(plant.id),
    );
    const currentPlantsId = currentPlantsData.map((plant) => plant.id);

    const newPlantsData = currentPlantsData.filter((plant) => plant.id != id);
    const newPlantsId = currentPlantsId.filter((currId) => currId != id);

    setData(newPlantsData);
    setStoredIds(newPlantsId);
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
