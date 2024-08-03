'use client';
import { OnboardResponses } from '@/components/onboard';
import { plants } from '@/utils/plants';

const userResponses: OnboardResponses = {
  q1: 2,
  q2: 0,
  q3: 1,
  q4: 2,
  q5: 1,
};

const defaultImage =
  'https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg';

export default function Explore() {
  return (
    <main className="container">
      <h1 className="my-8 text-2xl">
        Encontre a melhor maneira de tornar o mundo mais verde
      </h1>
      <ul className="mb-20 flex flex-wrap">
        {plants.map(({ name, image }, i) => (
          <li key={i} className="w-1/2 list-none p-2 md:w-1/3 xl:w-1/4 xl:p-4">
            <div className="rounded-xl border border-white/20 p-3">
              <p className="mb-3 text-xl">{name}</p>
              <img
                className="block aspect-square w-full rounded-xl object-cover"
                onError={({ currentTarget }) =>
                  (currentTarget.src = defaultImage)
                }
                src={image ? image : defaultImage}
                alt=""
              />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
