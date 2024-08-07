import { AnswerHandler, OnboardResponses, steps } from '.';
import { CgArrowLeft } from 'react-icons/cg';

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
              className={`rounded-full border px-5 py-1.5 text-start text-sm text-grass12 duration-200 md:text-base ${isSelected ? 'cursor-default border-black/15' : 'border-amber-800/30 bg-amber-700/5 hover:bg-amber-800/10'}`}
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
          onClick={previousStep}
          className="group mr-4 inline-block px-4 py-2"
        >
          <CgArrowLeft className="size-5 duration-200 group-hover:text-amber-800/80" />
        </button>
        <button
          onClick={nextStep}
          className="inline-block rounded-r-full px-6 py-2 text-amber-800/80 hover:underline md:px-8"
        >
          Pular
        </button>
      </div>
    </div>
  );
}
