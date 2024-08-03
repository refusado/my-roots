'use client';

import { OnboardQuestion, questions } from '@/utils/questions';
import { useEffect, useState } from 'react';
import StepWizard from 'react-step-wizard';
import { Step } from './Step';

export const steps: OnboardQuestion[] = [
  {
    id: 'first',
    title: 'span for starter step',
    options: [],
  },
  ...questions,
  {
    id: 'last',
    title: 'span for redirect step',
    options: [],
  },
];

export type OnboardResponses = {
  [questionId: string]: number;
};

export type AnswerHandler = (questionId: string, answer: number) => void;

export function Onboard() {
  const [answers, setAnswers] = useState<OnboardResponses>({});

  useEffect(() => {
    const clientFilters = localStorage.getItem('clientFilters');
    if (!clientFilters) return;

    setAnswers(JSON.parse(clientFilters));
  }, []);

  const handleAnswer: AnswerHandler = (id, answer) => {
    const newData = {
      ...answers,
      [id]: answer,
    };

    localStorage.setItem('clientFilters', JSON.stringify(newData));
    setAnswers(newData);
  };

  return (
    <div id="onboard" className="relative w-full max-w-3xl bg-red-800/20">
      <StepWizard
        transitions={{
          enterLeft: '',
          enterRight: '',
          exitLeft: '',
          exitRight: '',
          intro: '',
        }}
      >
        {steps.map((_, index) => (
          <Step
            key={index}
            questionIndex={index}
            onAnswer={handleAnswer}
            answers={answers}
          />
        ))}
      </StepWizard>
    </div>
  );
}
