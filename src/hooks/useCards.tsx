import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../api/db';

const useCards = () => {
  const cards = useLiveQuery(() => db.cards.toArray());

  return { 
    loading: cards === undefined, 
    cards: cards ?? [], 
  };
};

export default useCards;