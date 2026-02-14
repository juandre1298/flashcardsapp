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

export {
  getDeckWithCards,
  addCardToDeck
}