import { useLiveQuery } from "dexie-react-hooks";
import service from "../api/services/decks.service";

const useDecks = () => {
  const decksWithCounts = useLiveQuery(() => {
    () => service.getDecksWithCounts();
  });

  const handleCreateDeck = async (name: string, category?: string, description?: string) => {
    try {
      await service.createDeck(name, category, description);
    } catch (error) {
      console.error("Failed to create deck:", error);
    }
  };

  return { 
    loading: decksWithCounts === undefined, 
    decks: decksWithCounts ?? [], 
    createDeck: handleCreateDeck
  };
};

export default useDecks