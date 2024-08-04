import { Hero } from '@/components/Hero';
import { Onboard } from '@/components/onboard';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <section className="relative bg-grass3">
        <img
          src="./lines.svg"
          alt="lines"
          className="absolute bottom-0 right-0 block h-96 w-4/6 opacity-30"
        />
        <Onboard />
      </section>
    </main>
  );
}
