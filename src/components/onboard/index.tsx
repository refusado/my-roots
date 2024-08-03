'use client';

import { questions } from '@/utils/questions';
import Link from 'next/link';
import { useState } from 'react';
import StepWizard, { StepWizardChildProps } from 'react-step-wizard';

type OnboardResponses = {
  [questionId: string]: number;
};
type AnswerHandler = (questionId: string, answer: number) => void;

export function Onboard() {
  const [answers, setAnswers] = useState<OnboardResponses>({});

  const handleAnswer: AnswerHandler = (id, answer) => {
    setAnswers({
      ...answers,
      [id]: answer,
    });
  };

  return (
    <div className="mx-auto w-6/12 bg-red-800/20 p-4">
      <StepWizard
        transitions={{
          enterLeft: '',
          enterRight: '',
          exitLeft: '',
          exitRight: '',
          intro: '',
        }}
      >
        {questions.map((_, index) => (
          <Step
            key={index}
            questionIndex={index}
            onAnswer={handleAnswer}
            answers={answers}
          />
        ))}
      </StepWizard>
      <div className="my-20">
        <h2>Respostas Selecionadas:</h2>
        <pre>{JSON.stringify(answers, null, 2)}</pre>
      </div>
    </div>
  );
}

interface StepProps extends Partial<StepWizardChildProps> {
  questionIndex: number;
  onAnswer: AnswerHandler;
  answers: OnboardResponses;
}

function Step({
  answers,
  questionIndex,
  onAnswer,
  previousStep,
  nextStep,
  currentStep,
  totalSteps,
}: StepProps) {
  const { title, options, id } = questions[questionIndex];
  if (!currentStep || !totalSteps) return null;

  if (currentStep == totalSteps)
    return (
      <div className="p-4">
        <h2>Agora explore as plantas que combinam com você!</h2>
        <Link
          href="/explorar"
          className="my-8 block bg-green-500/50 py-2 text-center"
        >
          Vamos nesta
        </Link>
        <button
          disabled={currentStep <= 1}
          onClick={() => previousStep?.()}
          className="bg-yellow-800/30 px-4 py-2 text-white disabled:opacity-40"
        >
          Voltar
        </button>
      </div>
    );
  if (currentStep == 1)
    return (
      <div className="p-4">
        <h2>Vamos montar o jardim perfeito para você!</h2>
        <button
          disabled={currentStep >= totalSteps}
          onClick={() => nextStep?.()}
          className="my-8 block w-fit bg-green-500/50 px-3 py-2 text-center"
        >
          Começar
        </button>
      </div>
    );

  return (
    <div className="p-4">
      <p>
        <span>
          {currentStep - 1}/{totalSteps - 2}
        </span>
      </p>
      <h2 className="mb-4 text-xl">{title}</h2>
      <div className="mb-4 flex flex-col gap-2">
        {options.map((opt, i) => {
          const isSelected = answers[id] == i;
          return (
            <button
              key={i}
              className={`px-4 py-2 text-white ${isSelected ? 'bg-blue-800/50' : 'bg-blue-800/30'}`}
              onClick={() => {
                onAnswer(id, i);
                if (currentStep < totalSteps) {
                  nextStep?.();
                }
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
      <div className="flex gap-2">
        <button
          disabled={currentStep <= 1}
          onClick={() => previousStep?.()}
          className="bg-yellow-800/30 px-4 py-2 text-white disabled:opacity-40"
        >
          Voltar
        </button>
        <button
          disabled={currentStep >= totalSteps}
          onClick={() => nextStep?.()}
          className="bg-yellow-800/30 px-4 py-2 text-white disabled:opacity-40"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
