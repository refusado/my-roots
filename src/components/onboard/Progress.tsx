interface ProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function OnboardProgress({ currentStep, totalSteps }: ProgressProps) {
  return (
    <div className="bg-grass6 absolute left-0 top-0 h-1.5 w-full">
      <div
        className="h-full bg-green-600/80 duration-200"
        style={{
          width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
        }}
      ></div>
    </div>
  );
}
