import DeserializeErrorPage from "../../pages/DeserializeErrorPage/DeserializeErrorPage"
import { deserializeBase64 } from "./utils"

interface Props {
    base64: string
}
const DeserializeBase64 = ({base64}:Props) => {
    const obj = deserializeBase64(base64)
    if(!obj) return <DeserializeErrorPage />
    
  return (
    <div>{JSON.stringify(obj)}</div>
  )
}

export default DeserializeBase64