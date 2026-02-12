import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Check = () => {
  return (
    <div className="flex justify-center gap-12 w-full">
      <button><FaCheck /></button>
      <button><ImCross /></button>
    </div>
  )
} 
export default Check;