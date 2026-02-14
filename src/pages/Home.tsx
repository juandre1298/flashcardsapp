import Topbar from "../features/home/components/Topbar"
import DeckList from "../features/home/components/DeckList"
import IconBtn from "../components/IconBtn"


const Home = () => {


  return <div className="mt-14">
    <Topbar />
    <DeckList />
    <IconBtn />
  </div>
}

export default Home