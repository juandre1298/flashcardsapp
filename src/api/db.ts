import type { Card, Deck } from "../types"; 
import Dexie, { type EntityTable } from "dexie";

const db = new Dexie("flashcardsDatabase") as Dexie & {
  decks: EntityTable<Deck, "id">;
  cards: EntityTable<Card, "id">;
};

db.version(1).stores({
  decks: "++id, name, category", 
  cards: "++id, name, deck_id, clarity_rate" 
});

async function seedDatabase() {
  const deckCount = await db.decks.count();
  
  if (deckCount === 0) {
    console.log("Seeding database...");
    try {
      const response = await fetch('/seed.json');
      const rawCards: any[] = await response.json();

      await db.transaction('rw', [db.decks, db.cards], async () => {
        const deckId = await db.decks.add({
          name: "JavaScript Fundamentals",
          category: "Software Development",
          description: "Core concepts like Scope, Closures, and the Event Loop."
        }) as number;

        const cardsToImport = rawCards.map(({ id, ...rest }) => ({
          ...rest,
          deck_id: deckId,
          quiz: Array.isArray(rest.quiz) ? rest.quiz[0] : rest.quiz
        }));

        await db.cards.bulkAdd(cardsToImport);
      });
      console.log("Seeding complete.");
    } catch (error) {
      console.error("Seeding failed:", error);
    }
  }
}

seedDatabase();
export { db };