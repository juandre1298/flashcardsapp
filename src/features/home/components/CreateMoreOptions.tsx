import UnderModal from "../../../layout/components/UnderModal";
import type { Dispatch, SetStateAction } from 'react';
import { BiSolidFileImport } from "react-icons/bi";
import { TbCards } from "react-icons/tb";

interface CreateMoreOptionsProp{
  showCreateModal: boolean;
  setShowCreateModal: Dispatch<SetStateAction<boolean>>;
}

const CREATE_MORE_CONFIG = [
  { id: 1, icon: <TbCards className="text-3xl"/> ,label: 'create deck', onClick: ()=>{} ,description: 'Organaize flashcards into decks'},
  { id: 2, icon: <BiSolidFileImport className="text-3xl"/> ,label: 'import cards', onClick: ()=>{} ,description: 'Import from CSV or JSON file'},
];

const CreateMoreOptions = ({showCreateModal, setShowCreateModal}:CreateMoreOptionsProp) => {
  return <>
    < UnderModal show={showCreateModal} onClose={() => setShowCreateModal( (prev):boolean => !prev)}>
      <div className="flex flex-col gap-4">
        {CREATE_MORE_CONFIG.map( option => (
          < CreateMoreOptionItem  key={option.id}  icon={option.icon} label={option.label} onClick={option.onClick} description={option.description} />
        ))}
      </div>
    </UnderModal>
    </>
}

export default CreateMoreOptions

import { MdNavigateNext } from "react-icons/md";

import  { type ReactNode } from "react";
interface CreateMoreOptionItemProp{
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  description?: string;
}

function CreateMoreOptionItem({icon, label, onClick, description}:CreateMoreOptionItemProp){
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