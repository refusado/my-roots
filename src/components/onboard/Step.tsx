import Link from 'next/link';
import { StepWizardChildProps } from 'react-step-wizard';
import { AnswerHandler, OnboardResponses } from '.';
import { OnboardProgress } from './Progress';
import { OnboardOptions } from './Options';
import { CgArrowTopRight } from 'react-icons/cg';

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
    <div className="py-28">
      <OnboardProgress currentStep={currentStep} totalSteps={totalSteps} />

      <div className="container">{renderStepContent()}</div>
    </div>
  );
}

function FirstStep({ nextStep }: { nextStep: () => void }) {
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
        onClick={nextStep}
        className="relative inline-block w-fit rounded-r-full bg-green-500/80 px-8 py-2 text-center font-medium duration-200 hover:brightness-95"
      >
        <span className="absolute right-full top-0 h-full w-screen bg-inherit"></span>
        Começar
      </button>
    </>
  );
}

function LastStep({ previousStep }: { previousStep: () => void }) {
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
        className="mb-12 max-w-sm"
      />
      <Link
        href="/explorar"
        className="relative inline-block w-fit rounded-r-full bg-green-500/80 px-8 py-2 text-center font-medium duration-200 hover:brightness-95"
      >
        <span className="absolute right-full top-0 h-full w-screen bg-inherit"></span>
        Explorar <CgArrowTopRight className="inline-block size-5" />
      </Link>
      <button onClick={previousStep} className="mx-6 px-4 py-2 hover:underline">
        Voltar
      </button>
    </>
  );
}
