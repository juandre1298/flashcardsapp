import UnderModal from "../../../layout/components/UnderModal";
import type { CreateMoreMasterProp, ViewState } from "../types/types";
import { BiSolidFileImport } from "react-icons/bi";
import { TbCards } from "react-icons/tb";
import { useState } from "react";
import CreateMoreOptions from "./CreateMoreOptions";
import CreateNewDeck from "./CreateNewDeck";

const CreateMoreMaster = ({showCreateModal, setShowCreateModal}: CreateMoreMasterProp) => {
  const [currentView, setCurrentView] = useState<ViewState>('');
  const titles:Record<ViewState, string> = {
    options: 'options',
    newDeck: 'New Deck',
    import: 'Import Deck',
    settings: 'Settings',
    '':''
  }

  const CREATE_MORE_CONFIG = [
    { id: 1, icon: <TbCards className="text-3xl"/> ,label: 'create deck', onClick: ()=>{setCurrentView('newDeck')} ,description: 'Organaize flashcards into decks'},
    { id: 2, icon: <BiSolidFileImport className="text-3xl"/> ,label: 'import cards', onClick: ()=>{setCurrentView('import')} ,description: 'Import from CSV or JSON file'},
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'options':
        return <CreateMoreOptions options={CREATE_MORE_CONFIG}/>;
      case 'newDeck':
        return <CreateNewDeck handleClose={handleClose} />;
      case 'import':
        return <>import</>//<ImportView onBack={() => navigateTo('options')} />;
      case 'settings':
        return <>settings</>//<SettingsView onBack={() => navigateTo('options')} />;
      default:
        return <CreateMoreOptions options={CREATE_MORE_CONFIG}/>;
    }
  };

  const handleClose = ()=>{
    setCurrentView('')
    setShowCreateModal(prev => !prev)
  }

  return (
    <UnderModal show={showCreateModal} onClose={handleClose} label={titles[currentView]}>
      <div className="flex flex-col gap-4">
        {renderContent()}
      </div>
    </UnderModal>
  );
};

export default CreateMoreMaster


