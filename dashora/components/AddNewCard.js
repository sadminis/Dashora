import './Card.css';
import React from 'react';

const AddNewCard = ( {title, content, cards, setCards} ) => {
    function handleClick() {
        // Logic to add a new card
        const newCard = { title: "New Card", content: "This is a new card." };
    
        // Create a copy of the cards array
        const updatedCards = [...cards];
    
        // Insert the new card at the second-to-last position
        updatedCards.splice(updatedCards.length - 1, 0, newCard);
    
        // Update the state with the modified array
        setCards(updatedCards);
    }

    return (
        <div className='card cursor-pointer' onClick={handleClick}>
            <h2>Add New Card</h2>
            <p>This will add new card.</p>
        </div>
    );
}

export default AddNewCard; // Export the AddNewCard component