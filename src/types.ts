export interface Deck{
  id?: number;
  name: string;
  category: string;
  description: string;
}
export interface Card{
  id?: number;
  name: string;
  description: string;
  keywords_for_ai: string[];
  last_time_called: string;
  clarity_rate: number;
  quiz: Quiz;
  deck_id: number;
}

export interface Quiz{
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}