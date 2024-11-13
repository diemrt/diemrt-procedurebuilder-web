
interface Props{
    title: string;
    description?: string;
    children: React.ReactNode;
}
const Section = ({children, title, description}:Props) => {
  return (
    <div className="max-w-[85rem] pt-10 lg:pt-14 mx-auto">
      <div className="md:grid md:grid-cols-3 md:gap-12 xl:gap-32 border-t pt-8">
        <div className="mb-6">
          <h2 className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
            {title}
          </h2>

          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Section