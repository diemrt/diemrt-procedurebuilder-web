import { ProcedureRootType } from "../../types/procedureTypes";
import BackToLink from "../BackToLink/BackToLink";

interface Props {
  data: ProcedureRootType;
}
const ProcedureLayout = ({ data }: Props) => {
  const { procedure } = data;
  const { name, description } = procedure;

  return (
    <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
      <div className="max-w-3xl mb-10 lg:mb-14">
        <BackToLink text="Torna alla Home" to="/" />
        <h2 className="text-black font-semibold text-2xl md:text-4xl md:leading-tight">
          {name}
        </h2>
        <p className="mt-1 text-neutral-800">{description}</p>
      </div>
    </div>
  );
};

export default ProcedureLayout;
