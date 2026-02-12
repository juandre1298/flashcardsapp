import '../style/flipcard.css'
import type { FlipcardProps } from '../types/types';
import { useState } from 'react';

const Flipcard = ({ name, description }: FlipcardProps) => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div className={`card w-full perspective-1000  max-w-100 ${show ? 'show' : ''}`} onClick={()=>{setShow(prev => !prev)}}> 
      <div className="card__content relative transition-transform duration-1000 preserve-3d">
        <div className="card__front absolute inset-0 p-8 bg-pink-600 flex items-center justify-center backface-hidden z-10">
          <h2 className="text-xl font-bold">{name}</h2>
        </div>
        <div className="card__back p-8 bg-teal-500 flex items-center justify-center backface-hidden rotate-y-180">
          <span className='text-md'>{description}</span>
        </div>
      </div>
    </div>
  )
}

export default Flipcard;