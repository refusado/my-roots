import { Onboard } from '@/components/onboard';

export default function Home() {
  return (
    <main>
      <section className="container">
        <h1 className="my-20 text-4xl">
          Vamos deixar o mundo mais verde juntos?
        </h1>
        <Onboard />
      </section>
    </main>
  );
}
