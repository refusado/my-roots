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
    <header className="relative z-10 pt-4">
      <nav>
        <ul className="mx-auto flex w-full flex-wrap overflow-hidden rounded-full *:flex-1 *:text-center sm:max-w-sm">
          {paths.map(({ title, path }, i) => (
            <li key={i}>
              <Link
                className={`bg-dark-grass5/15 text-grass4/80 flex h-10 items-center justify-center capitalize backdrop-blur-lg hover:brightness-110 ${currentPath == path ? '' : ''}`}
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
