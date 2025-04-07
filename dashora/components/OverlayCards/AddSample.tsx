import OverlayCard from "./OverlayCard";
import { FilePlus } from "lucide-react";

interface AddSampleProps {
    cards: any[]; // Replace 'any[]' with the specific type of your cards array
    setCards: React.Dispatch<React.SetStateAction<any[]>>; // Replace 'any[]' with the specific type
    onClose: () => void;
}

export default function AddSample( {cards, setCards, onClose}: AddSampleProps) {
    function handleClick() {
        // Handle click event
        const newCard = { title: "New Card", content: "This is a new card." };
    
        // Create a copy of the cards array
        const updatedCards = [...cards, newCard];
    
        // Update the state with the modified array
        setCards(updatedCards);

        onClose(); // Close the overlay after adding the sample
    }


    return (
        <OverlayCard svg={
            <FilePlus size={250} color='lightgray' />
        }
        onClick={() => handleClick()}
        cardTitle={"Add Sample"} />
    );
}