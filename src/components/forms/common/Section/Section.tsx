import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";
import ShowWhen from "../../../ShowWhen/ShowWhen";

interface Props {
  title: string;
  description?: string;
  children: React.ReactNode;
  isValid?: boolean;
}

const Section = ({ children, title, description, isValid = false }: Props) => {
  const borderColor = isValid ? "green-500" : "gray-500";
  const bgColor = isValid ? "green-50" : "gray-50";
  const textColor = isValid ? "text-green-500" : "text-gray-500";

  return (
    <div className="max-w-[85rem] pt-10 lg:pt-14 mx-auto">
      <div
        className={`md:grid md:grid-cols-3 md:gap-12 xl:gap-32 border border-${borderColor} bg-${bgColor} rounded-xl p-8`}
      >
        <div className="mb-6">
          <h2 className={`font-bold text-sm ${textColor} flex items-center`}>
            <ShowWhen condition={!isValid}>
              <XCircleIcon className="me-2 size-5"/>
            </ShowWhen>
            <ShowWhen condition={isValid}>
              <CheckCircleIcon className="me-2 size-5" />
            </ShowWhen>
            {title}
          </h2>

          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Section;
