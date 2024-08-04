import { Plant, plants } from '@/utils/plants';
import { useEffect, useState } from 'react';

export function UserSaves() {
  const [savedPlants, setSavedPlants] = useState<Plant[]>([]);

  useEffect(() => {
    const clientPlants = localStorage.getItem('clientPlants');

    if (clientPlants) {
      try {
        const storedPlantsId: string[] = JSON.parse(clientPlants);
        const storedPlantsData: Plant[] = plants.filter(({ id }) =>
          storedPlantsId.includes(id),
        );
        setSavedPlants(storedPlantsData);
      } catch (error) {
        console.error('Failed parsing clientPlants', error);
      }
    }
  }, []);

  function removeClientPlant(plant: Plant) {
    const clientPlants = localStorage.getItem('clientPlants');

    if (clientPlants) {
      try {
        const storedData: string[] = JSON.parse(clientPlants);
        const newData = storedData.filter((storedId) => storedId !== plant.id);

        localStorage.setItem('clientPlants', JSON.stringify(newData));

        setSavedPlants((prevPlants) =>
          prevPlants.filter(({ id }) => id !== plant.id),
        );
      } catch (error) {
        console.error('Fail while parsing clientPlants', error);
      }
    }
  }

  return (
    <aside>
      <h2 className="py-10 text-center font-serif text-2xl">Plantas salvas</h2>
      {savedPlants.length ? (
        <ul className="flex flex-col gap-4 p-2">
          {savedPlants.map((plant) => {
            const { id, name, description } = plant;
            return (
              <li className="text-sm" key={id}>
                <button
                  className="bg-blue-500 text-start"
                  onClick={() => removeClientPlant(plant)}
                >
                  <h4 className="font-bold">{name}</h4>
                  <p>{description}</p>
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sem plantas salvas</p>
      )}
    </aside>
  );
}
