import { useEffect, useState } from 'react';
import { apiClient } from '../api/client';
import type { Card } from '../types';

const useCards = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cards, setCards] = useState<Card[]>([]);
  const [error, setError] = useState<string>("");

  const bringData = async () => {
    setLoading(true);
    try {
      const data = await apiClient.get('seed.json');
      setCards(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    bringData();
  }, []);

  return { loading, cards, error };
};

export default useCards;