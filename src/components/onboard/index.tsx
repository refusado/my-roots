'use client';

import { questions } from '@/utils/questions';
import { useState } from 'react';
import StepWizard from 'react-step-wizard';
import { Step } from './Step';

export type OnboardResponses = {
  [questionId: string]: number;
};
export type AnswerHandler = (questionId: string, answer: number) => void;

export function Onboard() {
  const [answers, setAnswers] = useState<OnboardResponses>({});

  const handleAnswer: AnswerHandler = (id, answer) => {
    setAnswers({
      ...answers,
      [id]: answer,
    });
  };

  return (
    <div className="w-full max-w-3xl bg-red-800/20 p-4">
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
