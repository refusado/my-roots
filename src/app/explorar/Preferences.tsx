import { OnboardResponses } from '@/components/onboard';
import Link from 'next/link';

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
              className="flex cursor-pointer items-center gap-1 rounded-full border border-white/20 bg-white/5 px-4 py-1"
              onClick={clearPreferences}
            >
              <span className="text-xs">✖</span> Limpar
            </button>
          </li>
          {userTags.map((tag, i) => (
            <li
              key={i}
              className="cursor-default rounded-full border border-white/20 px-4 py-1"
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
