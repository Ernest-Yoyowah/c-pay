import { View } from "react-native";

type StepNumber<T extends number> = T;

interface ProgressIndicatorProps {
  totalSteps: number;
  currentStep: number;
}

export default function ProgressIndicator({
  totalSteps,
  currentStep,
}: ProgressIndicatorProps) {
  if (__DEV__) {
    if (currentStep < 1 || currentStep > totalSteps) {
      console.error(
        `[ProgressIndicator] Invalid currentStep: ${currentStep}. Must be between 1 and ${totalSteps}. Auto-correcting to valid range.`
      );
    }
  }

  const validatedStep = Math.max(1, Math.min(currentStep, totalSteps));

  return (
    <View className="flex-row justify-center gap-2">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        return (
          <View
            key={index}
            className={`h-[6px] rounded-full ${
              stepNumber === validatedStep
                ? "w-8 bg-secondary-500"
                : "w-[6px] bg-neutral-200"
            }`}
          />
        );
      })}
    </View>
  );
}
