'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const currentPath = usePathname();

  const paths = [
    { title: 'início', path: '/' },
    { title: 'explorar', path: '/explorar' },
  ];

  return (
    <header className="relative z-10 pt-6">
      <nav>
        <ul className="border-grass4/60 mx-auto mt-1 flex w-full flex-wrap overflow-hidden rounded-full border-[1px] *:flex-1 *:text-center sm:max-w-sm">
          {paths.map(({ title, path }, i) => (
            <li key={i}>
              <Link
                className={`bg-dark-grass5/15 text-grass4/80 flex h-10 select-none items-center justify-center capitalize backdrop-blur-lg hover:brightness-125 ${currentPath == path ? 'cursor-deafult pointer-events-none' : ''}`}
                href={path}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
