import { Dexie, type EntityTable } from "dexie"
import type { Card } from "../types";


const db = new Dexie("flashcardsDatabase") as Dexie & {
  cards: EntityTable<Card, "id">
}

db.version(1).stores({
  cards: "++id, name, category, description, keywords_for_ai, last_time_called, clarity_rate, quiz"
})

export { db }