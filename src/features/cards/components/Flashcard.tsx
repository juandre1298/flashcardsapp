import Flipcard from './Flipcard'
import type { FlashcardProps } from "../types/types";
import Check from './Check';


const Flashcard = ({name, category, description}:FlashcardProps) => {

  return (
    <div className="w-full px-10 py-10">
      <h1>{category}</h1>
      <Flipcard name={name} description={description} />
      <Check />
    </div>
  )
}
export default Flashcard;