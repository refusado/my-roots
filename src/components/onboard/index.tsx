'use client';

import { OnboardQuestion, questions } from '@/utils/questions';
import { useEffect, useState } from 'react';
import StepWizard from 'react-step-wizard';
import { Step } from './Step';
import { useMouseTracker } from '../MouseTracker';

export const steps: OnboardQuestion[] = [
  {
    id: 'first',
    title: 'span for starter step',
    options: [],
  },
  ...questions,
  {
    id: 'last',
    title: 'span for final step',
    options: [],
  },
];

export type OnboardResponses = {
  [questionId: string]: number;
};

export type AnswerHandler = (questionId: string, answer: number) => void;

export function Onboard() {
  const [answers, setAnswers] = useState<OnboardResponses>({});
  const { setBackground, setFilter } = useMouseTracker();

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
    <div
      onMouseEnter={() => {
        setFilter('');
        setBackground('#4f2d1425');
      }}
      onMouseLeave={() => {
        setFilter('brightness(1.25)');
        setBackground('');
      }}
      id="onboard"
    >
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
