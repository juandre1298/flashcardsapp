import { useState } from "react";
import Flipcard from './Flipcard'
import type { FlashcardProps } from "../types/types";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const Flashcard = ({name, category, description}:FlashcardProps) => {

  return (
    <div className="w-full px-10 py-10">
      <h1>{category}</h1>
      <Flipcard name={name} description={description} />
      <div className="flex justify-center gap-12 w-full">
        <button><FaCheck /></button>
        <button><ImCross /></button>
      </div>
    </div>
  )
}
export default Flashcard;