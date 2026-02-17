import CreateMoreOptionItem from "./CreateMoreOptionItem";
import type { CreateMoreOptionsProp } from "../types/types";

const CreateMoreOptions = ({options}:CreateMoreOptionsProp) => {
  return(
    <>{options.map( option => (
      < CreateMoreOptionItem  key={option.id}  icon={option.icon} label={option.label} onClick={option.onClick} description={option.description} />
    ))}</>
  )
}

export default CreateMoreOptions;