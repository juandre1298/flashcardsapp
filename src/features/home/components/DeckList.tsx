import useDeck from "../../../hooks/useDeck";
const DeckList = () => {
  const {decks, loading} = useDeck()

  if (loading) return <div>loading desk...</div>;
  console.log(decks)
  return <div>
    {decks.map(deck => (
      <div className=" w-full border-t border-b py-2 px-4">
        <div className="flex flex-col gap-2  max-w-xl mx-auto">
          <h2>{deck.category}</h2>
          <p>Deck Cards: {deck.cardCount}</p>
        </div>
      </div>
    ))}
  </div>
}

export default DeckList;