import { useEffect, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { apiClient } from '../api/client';
import { db } from '../api/db';
import type { Card } from '../types';

const useCards = () => {
  const [importing, setImporting] = useState(false);
  const [error, setError] = useState<string>("");
  const cards = useLiveQuery(() => db.cards.toArray());

  useEffect(() => {
    const seedData = async () => {
      if (cards === undefined) return;

      if (cards.length === 0) {
        setImporting(true);
        try {
          const data = await apiClient.get<Card[]>('seed.json');
          if (data && data.length > 0) {
            await db.cards.bulkAdd(data);
          }
        } catch (e) {
          setError(e instanceof Error ? e.message : "Failed to seed data");
        } finally {
           setImporting(false);
        }
      }
    };
    seedData();
  }, [cards]);

  const loading = !cards || importing; 

  return { loading, cards: cards ?? [], error };
};

export default useCards;