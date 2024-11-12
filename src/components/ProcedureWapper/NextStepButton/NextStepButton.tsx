import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import PrimaryActionButton from "../../PrimaryActionButton/PrimaryActionButton";
import ShowWhen from "../../ShowWhen/ShowWhen";
import { CheckIcon } from "@heroicons/react/16/solid";
import PrimaryLink from "../../PrimaryLink/PrimaryLink";

interface Props {
  nextStep: () => void;
  timeToRead?: number;
  currentStep: number;
  isThereAnyNextStep: boolean;
}

const NextStepButton = ({
  nextStep,
  timeToRead,
  currentStep,
  isThereAnyNextStep,
}: Props) => {
  const [countdown, setCountdown] = useState<number | undefined>(timeToRead);

  useEffect(() => {
    setCountdown(timeToRead);
  }, [timeToRead, currentStep]);

  useEffect(() => {
    if (timeToRead) {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev && prev > 1) {
            return prev - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timeToRead, currentStep]);

  return (
    <>
      <ShowWhen condition={isThereAnyNextStep}>
        <PrimaryActionButton
          text={
            countdown && countdown > 0
              ? `${countdown}s al prossimo passo`
              : "Prossimo passo"
          }
          onClick={nextStep}
          iconAfter={<ArrowRightIcon className="size-4 shrink-0" />}
          disabled={!!countdown && countdown > 0}
        />
      </ShowWhen>
      <ShowWhen condition={!isThereAnyNextStep}>
        <PrimaryLink
          text={
            countdown && countdown > 0
              ? `${countdown}s al completamento`
              : "Completato"
          }
          to="/"
          className="bg-green-500 disabled:bg-gray-400"
          iconAfter={<CheckIcon className="size-4 shrink-0" />}
          disabled={!!countdown && countdown > 0}
        />
      </ShowWhen>
    </>
  );
};

export default NextStepButton;
