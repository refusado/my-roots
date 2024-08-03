import { Plant } from '@/utils/plants';

const defaultImage =
  'https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg';

export function PlantsList({ plants }: { plants: Plant[] }) {
  return (
    <ul className="-mx-3 mb-20 flex flex-wrap">
      {plants.map(({ name, image, tags }, i) => (
        <li
          key={i}
          className="list-none p-2 xs:w-1/2 md:w-1/3 md:p-3 xl:w-1/4 xl:p-4"
        >
          <div className="rounded-2xl border border-white/20 p-3">
            <img
              className="mb-4 block aspect-square w-full rounded-xl object-cover"
              onError={({ currentTarget }) =>
                (currentTarget.src = defaultImage)
              }
              src={image ? image : defaultImage}
              alt=""
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
          </div>
        </li>
      ))}
    </ul>
  );
}
