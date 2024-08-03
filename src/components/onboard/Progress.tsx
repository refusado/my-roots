interface ProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function OnboardProgress({ currentStep, totalSteps }: ProgressProps) {
  return (
    <p>
      <span>
        {currentStep - 1}/{totalSteps - 1}
      </span>
    </p>
  );
}
