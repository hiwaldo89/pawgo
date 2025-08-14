import React from "react";
import cn from "classnames";

type Step = {
  label: string;
};

type StepperProps = {
  steps: Step[];
  currentStep: number; // 0-based index
};

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-between items-start w-full relative">
      <span className="absolute w-[calc(100%-50px)] lg:w-[calc(100%-150px)] h-[1px] bg-gray-primary left-1/2 -translate-x-1/2 top-4" />
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div
            key={index}
            className="w-[50px] lg:w-[150px] flex flex-col items-center relative"
          >
            {/* Circle */}
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center border-2",
                { "bg-gray-300 border-gray-300": !isCompleted || !isActive },
                { "bg-green-500 border-green-500": isCompleted || isActive }
              )}
            >
              {/* {isCompleted ? "✓" : index + 1} */}
            </div>

            {/* Label */}
            <span className="text-[8px] lg:text-xs mt-2 text-center">
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
