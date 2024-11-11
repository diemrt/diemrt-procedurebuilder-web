import DeserializeErrorPage from "../../pages/DeserializeErrorPage/DeserializeErrorPage"
import { ProcedureRootType } from "../../types/procedureTypes"
import ProcedureWapper from "../ProcedureWapper/ProcedureWapper"
import { deserializeBase64 } from "./utils"

interface Props {
    base64: string
}
const DeserializeBase64 = ({base64}:Props) => {
    const obj = deserializeBase64(base64)
    if(!obj) return <DeserializeErrorPage />
    
  return (
    <ProcedureWapper data={obj as ProcedureRootType} />
  )
}

export default DeserializeBase64