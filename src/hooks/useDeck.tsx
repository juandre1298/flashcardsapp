import { db } from "../api/db";
import { useLiveQuery } from "dexie-react-hooks";

const useDecks = () => {
  const decksWithCounts = useLiveQuery(async () => {
    const allDecks = await db.decks.toArray();
    
    const decksWithCounts = await Promise.all(
      allDecks.map(async (deck) => {
        const count = await db.cards
          .where("deck_id")
          .equals(deck.id!)
          .count();
          
        return { ...deck, cardCount: count };
      })
    );
    
    return decksWithCounts;
  });

  return { 
    loading: decksWithCounts === undefined, 
    decks: decksWithCounts ?? [], 
  };
};

export default useDecks