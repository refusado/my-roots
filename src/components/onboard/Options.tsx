import { AnswerHandler, OnboardResponses, steps } from '.';

interface OptionsProps {
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
}: OptionsProps) {
  const { title, options, id } = steps[questionIndex];

  return (
    <div className="flex flex-col lg:w-9/12">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="mb-10 flex flex-wrap gap-2">
        {options.map((opt, i) => {
          const isSelected = answers[id] == i;
          return (
            <button
              key={i}
              className={`text-grass12 border-grass11/40 bg-grass6/35 rounded-full border px-5 py-1.5 text-sm duration-200 hover:brightness-110 ${isSelected ? 'cursor-default opacity-70' : ''}`}
              onClick={() => {
                onAnswer(id, i);
                nextStep();
              }}
            >
              {opt.text}
            </button>
          );
        })}
      </div>
      <div className="flex gap-2">
        <button
          onClick={nextStep}
          className="inline-block rounded-r-full bg-yellow-300/30 px-8 py-2 hover:bg-yellow-300/40"
        >
          Pular
        </button>
        <button
          onClick={previousStep}
          className="mx-6 inline-block px-4 py-2 hover:underline"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
