import { db } from "../db";
import { type Card } from "../../types";

const getDeckWithCards = async (deckId: number) => {
  const deck = await db.decks.get(deckId);
  const cards = await db.cards.where("deck_id").equals(deckId).toArray();
  return { ...deck, cards} 
}

const addCardToDeck = async (deckId: number, cardData: Omit<Card, "id" | "deck_id">) => {
  return await db.cards.add({
    ...cardData,
    deck_id: deckId,
  });
};

const createDeck = async (
  name: string, 
  category: string = "General", 
  description: string = ""
) => {
  return await db.decks.add({
    name,
    category,
    description
  });
};

const getDecksWithCounts = async () => {
  const allDecks = await db.decks.toArray();
  
  return await Promise.all(
    allDecks.map(async (deck) => {
      const count = await db.cards
        .where("deck_id")
        .equals(deck.id!)
        .count();
        
      return { ...deck, cardCount: count };
    })
  );
};

export default {
  getDeckWithCards,
  addCardToDeck,
  createDeck,
  getDecksWithCounts
}