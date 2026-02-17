import Topbar from "../features/home/components/Topbar"
import DeckList from "../features/home/components/DeckList"
import IconBtn from "../components/IconBtn"
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import CreateMoreMaster from "../features/home/components/CreateMoreMaster";

const Home = () => {
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false)

  return <div className="mt-14 h-full static">
    <Topbar />
    <DeckList />
    <IconBtn onClick={()=> {setShowCreateModal( (prev):boolean => !prev)}} icon={<IoMdAdd />} className="bg-[#6495ED] p-2 text-3xl absolute bottom-25 right-5 rounded-full "/>
    
    <CreateMoreMaster showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal}/>
  </div>
}

export default Home