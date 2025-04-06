import OverlayCard from "./OverlayCard";
import { FilePlus } from "lucide-react";

interface AddSampleProps {
    cards: any[]; // Replace 'any[]' with the specific type of your cards array
    setCards: React.Dispatch<React.SetStateAction<any[]>>; // Replace 'any[]' with the specific type
}

export default function AddSample( {cards, setCards}: AddSampleProps) {
    function handleClick() {
        // Handle click event
        const newCard = { title: "New Card", content: "This is a new card." };
    
        // Create a copy of the cards array
        const updatedCards = [...cards];
    
        // Insert the new card at the second-to-last position
        updatedCards.splice(updatedCards.length - 1, 0, newCard);
    
        // Update the state with the modified array
        setCards(updatedCards);
    }


    return (
        <OverlayCard svg={
            <FilePlus size={250} color='lightgray' />
        }
        onClick={() => handleClick()}
        cardTitle={"Add Sample"} />
    );
}