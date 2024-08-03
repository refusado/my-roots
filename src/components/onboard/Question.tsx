import { questions } from '@/utils/questions';
import { AnswerHandler, OnboardResponses } from '.';

interface QuestionProps {
  questionIndex: number;
  answers: OnboardResponses;
  onAnswer: AnswerHandler;
  previousStep: () => void;
  nextStep: () => void;
}

export function OnboardOptions({
  questionIndex,
  answers,
  onAnswer,
  previousStep,
  nextStep,
}: QuestionProps) {
  const { title, options, id } = questions[questionIndex];

  return (
    <div className="mb-4 flex flex-col gap-2">
      <h2 className="mb-4 text-xl">{title}</h2>
      {options.map((opt, i) => {
        const isSelected = answers[id] == i;
        return (
          <button
            key={i}
            className={`px-4 py-2 text-white ${isSelected ? 'bg-blue-800/50' : 'bg-blue-800/30'}`}
            onClick={() => {
              onAnswer(id, i);
              nextStep();
            }}
          >
            {opt}
          </button>
        );
      })}
      <div className="flex gap-2">
        <button
          onClick={() => previousStep()}
          className="bg-yellow-800/30 px-4 py-2 text-white"
        >
          Voltar
        </button>
        <button
          onClick={() => nextStep()}
          className="bg-yellow-800/30 px-4 py-2 text-white"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
