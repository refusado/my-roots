import Link from 'next/link';
import { StepWizardChildProps } from 'react-step-wizard';
import { AnswerHandler, OnboardResponses } from '.';
import { OnboardProgress } from './Progress';
import { OnboardOptions } from './Options';

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
    <div className="py-20">
      <OnboardProgress currentStep={currentStep} totalSteps={totalSteps} />

      <div className="container">{renderStepContent()}</div>
    </div>
  );
}

function FirstStep({ nextStep }: { nextStep: () => void }) {
  return (
    <>
      <h2 className="mb-12 text-3xl">
        Vamos encontrar as plantas perfeitas para você...
      </h2>
      <button
        onClick={nextStep}
        className="block w-fit rounded-r-full bg-green-500/70 px-8 py-2 text-center font-medium duration-200 hover:brightness-110"
      >
        Começar
      </button>
    </>
  );
}

function LastStep({ previousStep }: { previousStep: () => void }) {
  return (
    <>
      <h2 className="mb-4 text-3xl">Você completou o onboarding!</h2>
      <p className="mb-8 text-lg">
        Agora confira as sugestões específicas que temos para você e encontre a
        sua planta perfeita
      </p>
      <Link
        href="/explorar"
        className="inline-block w-fit rounded-r-full bg-green-500/70 px-8 py-2 text-center font-medium duration-200 hover:brightness-110"
      >
        Explorar
      </Link>
      <button onClick={previousStep} className="mx-6 px-4 py-2 hover:underline">
        Voltar
      </button>
    </>
  );
}
