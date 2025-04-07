import OverlayCard from "./OverlayCard";

interface AddBiliBiliProps {
    cards: any[]; // Replace 'any[]' with the specific type of your cards array
    setCards: React.Dispatch<React.SetStateAction<any[]>>; // Replace 'any[]' with the specific type
    onClose: () => void;
}

export default function AddBiliBili( {cards, setCards, onClose} : AddBiliBiliProps) {
    function handleClick() {
        // Handle click event
        const newCard = { 
            title: "Bilibili", 
            content: "This is a new card.",
            width: 2,
            height: 3,
         };
    
        // Create a copy of the cards array
        const updatedCards = [...cards, newCard,];
    
        // Update the state with the modified array
        setCards(updatedCards);

        onClose();
    }

    return (
        <OverlayCard svg={
            <img src="https://upload.wikimedia.org/wikipedia/en/b/b7/Bilibili_logo.svg" color={"#FB7299"} alt="BiliBili Logo" className="w-full h-auto" />
        }
        onClick={() => handleClick()}
        cardTitle={"Add BiliBili"} />
    );
}