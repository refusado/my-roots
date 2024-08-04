import { Plant } from '@/utils/plants';
import { PlantCard } from './Card';

export function PlantsList({
  plants,
  highlight = false,
}: {
  plants: Plant[];
  highlight?: boolean;
}) {
  function saveClientPlant(plant: Plant) {
    const clientPlants = localStorage.getItem('clientPlants');
    if (!clientPlants)
      return localStorage.setItem('clientPlants', JSON.stringify([plant.id]));

    const storedData = [...JSON.parse(clientPlants)];

    if (storedData.find((storedId) => storedId == plant.id)) {
      console.log('This plant was already added in the storage');
      return;
    }

    localStorage.setItem(
      'clientPlants',
      JSON.stringify([...storedData, plant.id]),
    );
  }

  return (
    <ul className="-mx-3 mb-20 flex flex-wrap">
      {plants.map((plant, i) => {
        const { name, image, tags } = plant;
        return (
          <li
            key={i}
            className="list-none p-2 xs:w-1/2 md:w-1/3 md:p-3 xl:w-1/4 xl:p-4"
          >
            <PlantCard
              className="h-full"
              name={name}
              image={image}
              tags={tags}
              highlight={highlight}
              onClick={() => saveClientPlant(plant)}
            />
          </li>
        );
      })}
    </ul>
  );
}
