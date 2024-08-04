import { HiOutlineExternalLink } from 'react-icons/hi';

export function Footer() {
  return (
    <header className="relative z-10 bg-green-700 text-grass3">
      <div className="container flex items-center justify-between py-10">
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
        <p>Hackathon Fernanda Kipper | Conexão Dev, Refu &copy; 2024</p>
      </div>
    </header>
  );
}
