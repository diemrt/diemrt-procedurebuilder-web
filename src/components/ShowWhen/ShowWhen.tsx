interface Props {
  condition: boolean
  children: React.ReactNode
}

const ShowWhen = ({
  condition,
  children
}: Props) => {
  if(condition) return <>{children}</>
  return <></>
}

export default ShowWhen