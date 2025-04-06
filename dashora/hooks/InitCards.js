function InitCards(cards, setCards) {
    // Load user pre-define cards from internet

    // Add "Add New Card" card at the end of the list
    setCards([...cards, { title: "Add New Card", content: "This will add new card." }]);
    return cards;
}

export default InitCards;