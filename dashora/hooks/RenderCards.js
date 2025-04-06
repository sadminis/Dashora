import React from 'react';
import Masonry from 'react-masonry-css';

import Card from '@/components/Card'; // Import the Card component
import AddNewCard from '@/components/AddNewCard';

const breakpointColumnsObj = {
    default: 4, // 4 columns by default
    1100: 3, // 3 columns for screen widths larger than 1100px
    700: 2, // 2 columns for screen widths larger than 700px
    500: 1, // 1 column for screen widths larger than 500px
  };


function RenderCards( { cards, setCards }) {
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
        >
            {cards.map((card, index) => {
                if (card.title === "Add New Card" && card.content === "This will add new card.") {
                    return (
                        <AddNewCard key={index} title={card.title} content={card.content} cards={cards} setCards={setCards} />
                    );
                } else {
                    return (
                        <Card key={index} title={card.title} content={card.content} />
                    );
                }
            })}
        </Masonry>
    );
}

export default RenderCards;