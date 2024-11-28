
interface Props {
    title: string;
    description?: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
  }
  
  const SuccessSection = ({ children, title, description, icon }: Props) => {
    return (
      <div className="max-w-[85rem] pt-10 mx-auto">
        <div
          className="md:grid md:grid-cols-3 md:gap-12 xl:gap-32 border border-green-600 bg-green-200 rounded-xl p-8"
        >
          <div className="mb-6">
            <h2 className="font-bold text-sm text-green-950 flex items-center">
              {icon}
              {title}
            </h2>
  
            <p className="mt-1 text-sm text-green-800">
              {description}
            </p>
          </div>
          {children}
        </div>
      </div>
    );
  };
  
  export default SuccessSection;
  