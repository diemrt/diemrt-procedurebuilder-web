
interface Props {
  title: string;
  description?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Section = ({ children, title, description, icon }: Props) => {
  return (
    <div className="max-w-[85rem] pt-10 lg:pt-14 mx-auto">
      <div
        className="md:grid md:grid-cols-3 md:gap-12 xl:gap-32 border border-blue-500 bg-gray-50 rounded-xl p-8"
      >
        <div className="mb-6">
          <h2 className="font-bold text-sm text-blue-500 flex items-center">
            {icon}
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
