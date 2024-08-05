'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMouseTracker } from './MouseTracker';

export function Header() {
  const currentPath = usePathname();
  const { increase, decrease } = useMouseTracker();

  const paths = [
    { title: 'início', path: '/' },
    { title: 'explorar', path: '/explorar' },
  ];

  return (
    <header
      onMouseEnter={increase}
      onMouseLeave={decrease}
      className="relative z-10 px-4 pt-6"
    >
      <nav
        className={`mx-auto mt-1 block w-full overflow-hidden rounded-full border-[1px] sm:max-w-sm ${currentPath == '/explorar' ? 'border-green-800 bg-amber-950/30' : 'border-amber-200/20'}`}
      >
        <ul className="flex flex-wrap *:flex-1 *:text-center">
          {paths.map(({ title, path }, i) => (
            <li key={i}>
              <Link
                className={`flex h-10 select-none items-center justify-center bg-amber-950/30 capitalize text-grass2/90 backdrop-blur-sm duration-300 hover:bg-amber-950/60 ${currentPath == path ? 'cursor-deafult pointer-events-none' : ''}`}
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
