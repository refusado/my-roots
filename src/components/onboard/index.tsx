'use client';

import { questions } from '@/utils/questions';
import { useEffect, useState } from 'react';
import StepWizard from 'react-step-wizard';
import { Step } from './Step';

export type OnboardResponses = {
  [questionId: string]: number;
};
export type AnswerHandler = (questionId: string, answer: number) => void;

export function Onboard() {
  const [answers, setAnswers] = useState<OnboardResponses>({});

  useEffect(() => {
    const clientData = localStorage.getItem('clientData');
    if (!clientData) return;

    setAnswers(JSON.parse(clientData));
  }, []);

  const handleAnswer: AnswerHandler = (id, answer) => {
    const newData = {
      ...answers,
      [id]: answer,
    };

    localStorage.setItem('clientData', JSON.stringify(newData));
    setAnswers(newData);
  };

  return (
    <div className="relative w-full max-w-3xl bg-red-800/20">
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
    </div>
  );
}
