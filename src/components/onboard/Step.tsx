import Link from 'next/link';
import { StepWizardChildProps } from 'react-step-wizard';
import { AnswerHandler, OnboardResponses } from '.';
import { OnboardProgress } from './Progress';
import { OnboardOptions } from './Question';

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
    <div className="p-4">
      <OnboardProgress currentStep={currentStep} totalSteps={totalSteps} />
      {renderStepContent()}
    </div>
  );
}

function FirstStep({ nextStep }: { nextStep: () => void }) {
  return (
    <>
      <h2>Vamos montar o jardim perfeito para você!</h2>
      <button
        onClick={nextStep}
        className="my-8 block w-fit bg-green-500/50 px-3 py-2 text-center"
      >
        Começar
      </button>
    </>
  );
}

function LastStep({ previousStep }: { previousStep: () => void }) {
  return (
    <>
      <h2>
        Você completou o onboarding. Encontre as plantas perfeitas para você!
      </h2>
      <Link
        href="/explorar"
        className="my-8 block bg-green-500/50 py-2 text-center"
      >
        Explorar
      </Link>
      <button
        onClick={previousStep}
        className="bg-yellow-800/30 px-4 py-2 text-white"
      >
        Voltar
      </button>
    </>
  );
}
