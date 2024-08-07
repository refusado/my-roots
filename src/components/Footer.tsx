import { HiOutlineExternalLink } from 'react-icons/hi';

export function Footer() {
  return (
    <header className="relative z-0 bg-green-900 px-3 text-grass3">
      <div className="text-green-900 *:absolute *:size-10 *:bg-[radial-gradient(circle,transparent_3rem,currentColor_3.1rem)] *:bg-[length:5.75rem_5.75rem]">
        <div className="bottom-full left-0 bg-left-bottom"></div>
        <div className="bottom-full right-0 bg-right-bottom"></div>
      </div>

      <div className="container flex flex-wrap items-center justify-between gap-4 py-10">
        <p className="flex gap-4 py-1 *:inline-flex *:items-center *:gap-2">
          <a
            href="https://github.com/refusado/my-roots"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
            <HiOutlineExternalLink />
          </a>
          <a
            href="https://www.figma.com/design/qVzjgtMG85onpF7MebncCA/my-roots?node-id=5-10&t=nUgnvhFtMdkAWaMR-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Figma
            <HiOutlineExternalLink />
          </a>
        </p>
        <p>
          <a
            href="https://github.com/Fernanda-Kipper/hackathon-2024"
            className="hover:underline"
          >
            Hackathon KipperDev
            <HiOutlineExternalLink className="ml-2 inline" />
          </a>
          <span className="mx-4">|</span> Refu &copy; 2024
        </p>
      </div>
    </header>
  );
}
