import { twMerge } from 'tailwind-merge';

type PlantCardProps = {
  name: string;
  image?: string;
  tags: string[];
  highlight: boolean;
  className?: string;
  onClick?: () => void;
};

const defaultImage =
  'https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg';

export function PlantCard({
  className,
  name,
  image,
  tags,
  highlight = false,
  onClick,
}: PlantCardProps) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'relative flex flex-col rounded-2xl border border-white/20 p-3 text-start',
        className,
      )}
    >
      {highlight && (
        <div className="absolute -right-1.5 -top-1.5 size-8 animate-ping rounded-full bg-yellow-500"></div>
      )}
      <img
        className="mb-4 block aspect-square w-full rounded-xl object-cover"
        onError={({ currentTarget }) => (currentTarget.src = defaultImage)}
        src={image ? image : defaultImage}
        alt={name}
      />
      <h4 className="mb-3 text-2xl">{name}</h4>
      <ul className="-mx-1">
        {tags.map((t, i) => (
          <li
            className="m-1 inline-block cursor-default rounded-full border border-green-300/50 bg-green-800/30 px-3 py-1 text-sm"
            key={i}
          >
            {t}
          </li>
        ))}
      </ul>
    </button>
  );
}
