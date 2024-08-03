'use client';
import { OnboardResponses } from '@/components/onboard';
import { Plant, plants } from '@/utils/plants';
import { questions } from '@/utils/questions';

const defaultImage =
  'https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg';

const userResponses: OnboardResponses = {
  q1: 4,
  q2: 2,
  q3: 1,
  q4: 3,
  q5: 3,
};

const userTags: string[] = [];

questions.forEach(({ id, options }) => {
  const selectedOption = userResponses[id];
  if (options[selectedOption]) userTags.push(...options[selectedOption].tags);
});

const recommendedPlants: Plant[] = [];
const notRecommendedPlants: Plant[] = [];

plants.forEach((plant) => {
  let match = false;

  plant.tags.forEach((tag) => {
    if (userTags.includes(tag)) match = true;
  });

  if (match) {
    recommendedPlants.push(plant);
  } else {
    notRecommendedPlants.push(plant);
  }
});

export default function Explore() {
  return (
    <main className="container">
      <h1 className="my-8 text-2xl">
        Encontre a melhor maneira de tornar o mundo mais verde
      </h1>
      <p className="mb-3">Suas preferências: </p>
      <ul className="mb-10 flex flex-wrap gap-2">
        {userTags.map((tag, i) => (
          <li
            key={i}
            className="cursor-default rounded-full border border-white/20 px-4 py-1"
          >
            {tag}
          </li>
        ))}
      </ul>
      <h2 className="text-xl">Recomendações: </h2>
      <ul className="-mx-3 mb-20 flex flex-wrap">
        {recommendedPlants.map(({ name, image, tags }, i) => (
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
      <h2 className="text-2xl">Outras plantas: </h2>
      <ul className="-mx-3 mb-20 flex flex-wrap">
        {notRecommendedPlants.map(({ name, image, tags }, i) => (
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
    </main>
  );
}
