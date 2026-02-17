import type { CreateMoreOptionItemProp } from "../types/types";
import { MdNavigateNext } from "react-icons/md";

const CreateMoreOptionItem = ({icon, label, onClick, description}:CreateMoreOptionItemProp) => {
  return (
    <div className="w-full bg-[#3B3B3B] p-4 rounded-3xl flex justify-between items-center" onClick={onClick}>
      <div className="flex gap-4  flex justify-between items-center">
        {icon}
        <div>
          <label>{label}</label>
          <span>{description}</span>  
        </div>
      </div>
      <MdNavigateNext className="text-3xl"/>
    </div>
  )
} 
export default CreateMoreOptionItem