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
      <nav
        className={`mx-auto mt-1 block w-full overflow-hidden rounded-full border-[1px] border-grass4/40 sm:max-w-sm ${currentPath == '/explorar' ? 'bg-dark-grass4/40' : ''}`}
      >
        <ul className="flex flex-wrap *:flex-1 *:text-center">
          {paths.map(({ title, path }, i) => (
            <li key={i}>
              <Link
                className={`flex h-10 select-none items-center justify-center bg-dark-grass5/15 capitalize text-grass2/90 backdrop-blur-sm hover:brightness-125 ${currentPath == path ? 'cursor-deafult pointer-events-none' : ''}`}
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
