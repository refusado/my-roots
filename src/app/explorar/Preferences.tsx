import { OnboardResponses } from '@/components/onboard';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

export function Preferences({
  filters,
  clearPreferences,
  userTags,
}: {
  filters: OnboardResponses | null;
  clearPreferences: () => void;
  userTags: string[];
}) {
  if (filters)
    return (
      <>
        <p className="mb-3">Suas preferências: </p>
        <ul className="mb-10 flex flex-wrap gap-2">
          <li>
            <button
              className="flex cursor-pointer items-center gap-1 rounded-full border border-yellow-600/25 bg-yellow-500/15 px-4 py-1 duration-200 hover:border-yellow-600/60 hover:bg-yellow-500/20"
              onClick={clearPreferences}
            >
              <CgClose /> Limpar
            </button>
          </li>
          {userTags.map((tag, i) => (
            <li
              key={i}
              className="rounded-full border border-black/15 bg-black/5 px-4 py-1 duration-200 hover:bg-black/10"
            >
              {tag}
            </li>
          ))}
        </ul>
      </>
    );

  return (
    <p className="mb-8">
      <Link href="/#onboard" className="text-blue-500 hover:underline">
        Complete o onboarding aqui
      </Link>{' '}
      para encontrar as plantas ideias para você
    </p>
  );
}
