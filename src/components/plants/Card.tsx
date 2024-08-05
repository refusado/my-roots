import { twMerge } from 'tailwind-merge';
import { useMouseTracker } from '../MouseTracker';
import { TiStarFullOutline } from 'react-icons/ti';

type PlantCardProps = {
  name: string;
  image?: string;
  tags: string[];
  highlight: boolean;
  className?: string;
  onClick?: () => void;
};

const defaultImage = './generic-plant.png';

export function PlantCard({
  className,
  name,
  image,
  tags,
  highlight = false,
  onClick,
}: PlantCardProps) {
  const { increase, decrease, setBackground, setSmallBg } = useMouseTracker();

  return (
    <button
      onMouseEnter={() => {
        increase();
        setBackground('#613d1d77');
        setSmallBg('white');
      }}
      onMouseLeave={() => {
        decrease();
        setBackground('');
        setSmallBg('black');
      }}
      onClick={onClick}
      className={twMerge(
        'group relative flex flex-col rounded-2xl border-[1px] border-green-950/40 bg-green-600/60 bg-gradient-to-br from-grass2/95 via-grass2/95 to-grass2/90 py-4 text-start shadow-sm duration-200 hover:bg-green-600',
        className,
      )}
    >
      {highlight && (
        <div
          className="flex-center absolute -right-1.5 -top-1.5 z-10 size-6 rounded-full border border-yellow-700/50 bg-yellow-300/50 p-0.5"
          title="Esta planta combina com você"
        >
          <TiStarFullOutline className="z-0 size-full" />
        </div>
      )}
      <img
        className={`-mt-4 mb-6 block aspect-square w-full rounded-2xl object-cover brightness-95 duration-200 group-hover:brightness-100 ${!image ? 'opacity-50' : ''}`}
        onError={({ currentTarget }) => {
          currentTarget.src = defaultImage;
          currentTarget.style.opacity = '50%';
          currentTarget.style.padding = '1.25rem';
        }}
        src={image ? image : defaultImage}
        alt={name}
      />
      <div className="px-3">
        <h4 className="mb-3 text-2xl">{name}</h4>
        <ul className="-mx-1">
          {tags.map((t, i) => (
            <li
              className="m-1 inline-block rounded-full border border-amber-900/30 bg-amber-500/15 px-3 py-1 text-sm"
              key={i}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}
