import Link from 'next/link';
import { StepWizardChildProps } from 'react-step-wizard';
import { AnswerHandler, OnboardResponses } from '.';
import { OnboardProgress } from './Progress';
import { OnboardOptions } from './Options';
import { CgArrowTopRight } from 'react-icons/cg';
import { RiArrowRightDoubleFill } from 'react-icons/ri';
import { BsArrowUpRight } from 'react-icons/bs';
import { useMouseTracker } from '../MouseTracker';

interface StepProps extends Partial<StepWizardChildProps> {
  questionIndex: number;
  onAnswer: AnswerHandler;
  answers: OnboardResponses;
}

export function Step({
  answers,
  questionIndex,
  onAnswer,
  previousStep = () => {},
  nextStep = () => {},
  currentStep,
  totalSteps,
}: StepProps) {
  if (!currentStep || !totalSteps) return null;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <FirstStep nextStep={nextStep} />;
      case totalSteps:
        return <LastStep previousStep={previousStep} />;
      default:
        return (
          <OnboardOptions
            questionIndex={questionIndex}
            answers={answers}
            onAnswer={onAnswer}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        );
    }
  };

  return (
    <div className="px-3 py-28">
      <OnboardProgress currentStep={currentStep} totalSteps={totalSteps} />

      <div className="container">{renderStepContent()}</div>
    </div>
  );
}

function FirstStep({ nextStep }: { nextStep: () => void }) {
  const { increase, decrease } = useMouseTracker();
  return (
    <>
      <h2 className="mb-4 text-3xl">
        Vamos descobrir quais seriam as melhores plantas para você criar
      </h2>
      <p className="mb-10 text-lg">
        Responde a estas perguntas para que possamos recomendar as plantas
        perfeitas para as suas características
      </p>
      <img src="search.svg" alt="Searching items" className="mb-12 max-w-xs" />
      <button
        onMouseEnter={increase}
        onMouseLeave={decrease}
        onClick={() => {
          nextStep();
          decrease();
        }}
        className="group relative ml-16 inline-block w-fit rounded-r-full bg-green-500/80 px-8 py-2 text-center text-lg font-medium shadow-md shadow-green-400/50 duration-200 hover:brightness-110"
      >
        <span className="absolute right-full top-0 h-full w-screen bg-inherit shadow-md shadow-green-400/50"></span>
        Começar
        <RiArrowRightDoubleFill className="ml-2 inline-block size-5 duration-200 group-hover:translate-x-1" />
      </button>
    </>
  );
}

function LastStep({ previousStep }: { previousStep: () => void }) {
  const { increase, decrease, setFilter, setBackground } = useMouseTracker();
  return (
    <>
      <h2 className="mb-4 text-3xl">Tudo pronto, já te conhecemos!</h2>
      <p className="mb-12 text-lg">
        Agora confira as sugestões específicas que temos para você e encontre a
        sua próxima planta:
      </p>
      <img
        src="confirmed.svg"
        alt="Searching items"
        className="mb-12 max-w-sm opacity-90"
      />
      <Link
        onMouseEnter={increase}
        onMouseLeave={decrease}
        onClick={() => {
          decrease();
          setFilter('brightness(1.25)');
          setBackground('');
        }}
        href="/explorar"
        className="group relative ml-16 inline-block w-fit rounded-r-full bg-green-500/80 px-8 py-2 text-center text-lg font-medium shadow-md shadow-green-400/50 duration-200 hover:brightness-110"
      >
        <span className="absolute right-full top-0 h-full w-screen bg-inherit shadow-md shadow-green-400/50"></span>
        Explorar{' '}
        <BsArrowUpRight className="ml-2 inline-block size-4 duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </Link>
      <button onClick={previousStep} className="mx-6 px-4 py-2 hover:underline">
        Voltar
      </button>
    </>
  );
}
