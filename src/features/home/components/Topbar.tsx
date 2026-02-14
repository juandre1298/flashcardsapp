import IconBtn from "../../../components/IconBtn"
import { FaFireAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";


const Topbar = () => {
  return <div className="fixed top-0 left-0 border-b py-4 px-8 w-full bg-[#242424]">
    <div className="flex justify-between gap-4 max-w-xl mx-auto">
      <IconBtn icon={<FaFireAlt/>} label='23'/>
      <IconBtn icon={<LuPencil/>} label='edit'/>
    </div>
  </div>
}

export default Topbar