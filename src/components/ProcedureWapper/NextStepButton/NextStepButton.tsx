import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import PrimaryActionButton from "../../PrimaryActionButton/PrimaryActionButton";

interface Props {
    nextStep: () => void;
    timeToRead?: number;
    currentStep: number;
}

const NextStepButton = ({ nextStep, timeToRead, currentStep }: Props) => {
    const [countdown, setCountdown] = useState(timeToRead);

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
        <PrimaryActionButton
            text={countdown && countdown > 0 ? `${countdown}s al prossimo passo` : "Prossimo passo"}
            onClick={nextStep}
            iconAfter={<ArrowRightIcon className="size-4 shrink-0" />}
            disabled={!!countdown && countdown > 0}
        />
    );
};

export default NextStepButton;
