import { Onboard } from '@/components/onboard';

export default function Home() {
  return (
    <main className="">
      <section className="text-grass3/80 relative -mt-[4.35rem]">
        <div className="absolute inset-0 -z-10 bg-black"></div>
        <div className="bg-hero-image absolute inset-0 -z-10 bg-green-800 bg-cover opacity-35 backdrop-brightness-90"></div>
        <div className="container relative flex min-h-screen flex-col items-center justify-evenly pt-10 text-center">
          <h1 className="w-fit max-w-4xl text-5xl">
            Sabia que{' '}
            <span className="from-grass5 to-grass2 border-grass8 border-b-2 bg-gradient-to-r bg-clip-text text-transparent">
              você pode fazer a diferença
            </span>{' '}
            no combate ao aquecimento global?
          </h1>
          <p className="w-fit max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis et
            modi quae pariatur, sunt dolorum. Obcaecati, ipsa quis. Libero fugit
            numquam sit tempora, neque quis nihil iste ullam molestiae in.
          </p>
          <a
            href="#onboard"
            className="text-grass3 rounded-full bg-yellow-800/35 px-8 py-3 backdrop-brightness-95 hover:bg-yellow-800/40"
          >
            Continuar
          </a>
        </div>
      </section>
      <section className="bg-grass3">
        <Onboard />
      </section>
    </main>
  );
}
