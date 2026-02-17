import useDecks from "../../../hooks/useDeck";
import { useState, type ChangeEvent, type FormEvent } from "react";

interface CreateNewDeckProps {
  handleClose: () => void;
}

const CreateNewDeck = ({ handleClose }: CreateNewDeckProps) => {
  const { createDeck } = useDecks();
  
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) return;

    try {
      await createDeck(formData.name, formData.category, formData.description);
      handleClose();
    } catch (error) {
      console.error("Failed to save deck:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="text-gray-400">
        Create Your Own Deck. You get the best results from the cards you create yourself.
      </p>
      
      <input 
        name="name"
        className="bg-gray-700 p-4 rounded-2xl text-gray-300 font-bold outline-none focus:ring-2 ring-blue-500" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Deck Name (Required)"
        required
      />
      <input 
        name="category"
        className="bg-gray-700 p-4 rounded-2xl text-gray-300 font-bold outline-none" 
        value={formData.category} 
        onChange={handleChange} 
        placeholder="Category"
      />
      <input 
        name="description"
        className="bg-gray-700 p-4 rounded-2xl text-gray-300 font-bold outline-none" 
        value={formData.description} 
        onChange={handleChange} 
        placeholder="Description"
      />

      <button 
        type="submit"
        className="bg-blue-300 py-4 rounded-2xl text-blue-700 font-bold hover:bg-blue-400 transition-colors"
      >
        Create New Deck
      </button>
    </form>
  );
};

export default CreateNewDeck;