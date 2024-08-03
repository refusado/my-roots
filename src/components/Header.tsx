'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const currentPath = usePathname();

  const paths = [
    { title: 'início', path: '/' },
    { title: 'sobre', path: '/sobre' },
  ];

  return (
    <header id="main-header">
      <nav>
        <ul className="mx-auto flex w-fit flex-wrap bg-zinc-700">
          {paths.map(({ title, path }, i) => (
            <li key={i}>
              <Link
                className={`block border-b px-4 py-4 capitalize hover:bg-white/10 ${currentPath == path ? 'border-blue-500' : 'border-transparent'}`}
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
