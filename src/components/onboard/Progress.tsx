interface ProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function OnboardProgress({ currentStep, totalSteps }: ProgressProps) {
  return (
    <div className="absolute left-0 top-0 h-1.5 w-full bg-grass6">
      <div
        className="h-full bg-green-600/80 duration-200"
        style={{
          width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
        }}
      ></div>
    </div>
  );
}
