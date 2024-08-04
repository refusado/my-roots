import { Plant } from '@/utils/plants';
import { PlantCard } from './Card';
import { useContext } from 'react';
import { savesContext } from '@/app/explorar/saves-context';

export function PlantsList({
  plants,
  highlight = false,
}: {
  plants: Plant[];
  highlight?: boolean;
}) {
  const { addPlant, storedPlants } = useContext(savesContext);

  return (
    <ul className="-mx-3 mb-20 flex flex-wrap">
      {plants.map((plant, i) => {
        // if (storedPlants.includes(plant)) return null;
        const { name, image, tags } = plant;

        return (
          <li
            key={i}
            className={`list-none p-2 duration-200 xs:w-1/2 md:w-1/3 md:p-3 xl:w-1/4 xl:p-2 ${storedPlants.includes(plant) ? 'pointer-events-none opacity-50' : ''}`}
          >
            <PlantCard
              className="h-full"
              name={name}
              image={image}
              tags={tags}
              highlight={highlight}
              onClick={() => addPlant(plant)}
            />
          </li>
        );
      })}
    </ul>
  );
}
