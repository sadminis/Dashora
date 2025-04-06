import React from 'react';
import Card from '@/components/Card'; // Import the Card component
import AddNewCard from '@/components/AddNewCard';

function RenderCards( { cards, setCards }) {
    return (
        cards.map((card, index) => {
            if (card.title === "Add New Card" && card.content === "This will add new card.") {
                return (
                    <AddNewCard key= {index} title={card.title} content={card.content} cards={cards} setCards={setCards} />
                );
            } else {
                return (
                    <Card key= {index} title={card.title} content={card.content} />
                );
            }
        })
    );
}

export default RenderCards;