import { Onboard } from '@/components/onboard';
import { CgChevronDoubleDown } from 'react-icons/cg';

export default function Home() {
  return (
    <main className="">
      <section className="relative -mt-[4.4rem] text-grass1/90">
        <div className="absolute inset-0 -z-10 bg-black"></div>
        <div className="absolute inset-0 -z-10 bg-green-800 bg-hero-image bg-cover opacity-40 backdrop-brightness-90"></div>
        <div className="container relative flex min-h-screen flex-col items-center justify-evenly pt-20 text-center">
          <h1 className="w-fit max-w-4xl font-serif text-6xl">
            Sabia que{' '}
            <span className="border-b-2 border-yellow-500/60 bg-gradient-to-t from-yellow-100 via-green-50 to-green-50 bg-clip-text text-transparent">
              você pode fazer a diferença
            </span>{' '}
            no combate ao aquecimento global?
          </h1>
          <p className="w-fit max-w-2xl text-lg">
            <span className="block rounded-full bg-darkA-grassA3">
              Diminuia o impacto das crises climáticas tornando o mundo mais
              verde!
            </span>
            Nós te ajudamos a construir um jardim em casa hoje mesmo, seja com
            uma platinha de mesa no seu apertamento ou em um grande quintal!
          </p>
          <div className="flex flex-col items-center gap-3 text-yellow-300/70">
            <a
              href="#onboard"
              className="peer rounded-full bg-dark-grass3/50 px-8 py-3 shadow-lg backdrop-brightness-95 hover:bg-dark-grass4/50"
            >
              Continuar
            </a>
            <CgChevronDoubleDown className="size-5 duration-200 peer-hover:translate-y-2" />
          </div>
        </div>
      </section>
      <section className="bg-grass3">
        <Onboard />
      </section>
    </main>
  );
}
