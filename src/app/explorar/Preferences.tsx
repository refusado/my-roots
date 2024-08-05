import { OnboardResponses } from '@/components/onboard';
import { motion } from 'framer-motion';
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
  if (!filters) return <RedirectToOnboard />;

  return (
    <>
      <p className="mb-3">Suas preferências: </p>
      <ul className="mb-10 flex flex-wrap gap-2">
        {userTags.map((tag, i) => (
          <li
            key={i}
            className="rounded-full border border-black/15 bg-black/5 px-4 py-1 duration-200 hover:bg-black/10"
          >
            {tag}
          </li>
        ))}
        <li>
          <button
            className="flex cursor-pointer items-center gap-1 rounded-full border border-yellow-600/25 bg-yellow-500/15 px-4 py-1 duration-200 hover:border-yellow-600/60 hover:bg-yellow-500/20"
            onClick={clearPreferences}
          >
            <CgClose /> Limpar preferências
          </button>
        </li>
      </ul>
    </>
  );
}

export function RedirectToOnboard() {
  return (
    <motion.p
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.25,
          duration: 0.5,
        },
      }}
      data-testid="RedirectToOnboard"
      className="mb-8 max-w-2xl text-lg"
    >
      Precisa de ajuda? Saiba exatamente quais são as plantas perfeitas para
      você{' '}
      <Link href="/#onboard" className="text-green-700 hover:underline">
        respondendo este questionário rápido
      </Link>
    </motion.p>
  );
}
