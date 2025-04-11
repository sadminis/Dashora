import OverlayCard from "./OverlayCard";
import { Search } from "lucide-react";

interface AddSearchBarProps {
    cards: any[]; // Replace 'any[]' with the specific type of your cards array
    setCards: React.Dispatch<React.SetStateAction<any[]>>; // Replace 'any[]' with the specific type
    onClose: () => void;
}

export default function AddSearchBar({ cards, setCards, onClose }: AddSearchBarProps) {
    function handleClick() {
        // Handle click event
        const newCard = {
            title: "Search Bar",
            content: "This is a new card.",
            width: 2,
            height: 2,
        };

        // Create a copy of the cards array
        const updatedCards = [...cards, newCard,];

        // Update the state with the modified array
        setCards(updatedCards);

        onClose();
    }

    return (
        <OverlayCard svg={
            <Search size={250} color='lightgray' />
        }
            onClick={() => handleClick()}
            cardTitle={"Add Search Bar"} />
    );
}