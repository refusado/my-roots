import { Plant } from '@/utils/plants';
import { PlantCard } from './Card';

export function PlantsList({
  plants,
  highlight = false,
}: {
  plants: Plant[];
  highlight?: boolean;
}) {
  return (
    <ul className="-mx-3 mb-20 flex flex-wrap">
      {plants.map(({ name, image, tags }, i) => (
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
          />
        </li>
      ))}
    </ul>
  );
}
