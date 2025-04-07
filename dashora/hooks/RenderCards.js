import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import AddNewCard from '@/components/AddNewCard';
import SampleCard from '@/components/SampleCard';
import BilibiliCard from '@/components/BilibiliCard';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


const ResponsiveGridLayout = WidthProvider(Responsive);

function RenderCards({ cards, setCards }) {
  // 1. Create storage for layouts
  const [layouts, setLayouts] = useState({ lg: [], md: [], sm: [] });

  // 2. Update layouts when cards change
  useEffect(() => {
    // Only run when new cards are added
    if (cards.length <= Object.keys(layouts.lg).length) return;

    // 3. Find first empty spot for new cards
    const newLayouts = { lg: [...layouts.lg], md: [...layouts.md], sm: [...layouts.sm] };
    
    ['lg', 'md', 'sm'].forEach((bp) => {
      const cols = { lg: 4, md: 2, sm: 1 }[bp];
      const existingItems = newLayouts[bp];
      
      // 4. Check positions until we find empty space
      let foundSpot = false;
      let y = 0;
      
      while (!foundSpot) {
        for (let x = 0; x < cols; x++) {
          // 5. Check if this spot is empty
          const spotOccupied = existingItems.some(item => 
            item.x <= x && x < item.x + item.w &&
            item.y <= y && y < item.y + item.h
          );

          if (!spotOccupied) {
            // 6. Add new card to this position
            const newCard = cards[cards.length - 1];  // Get the last card added
            newLayouts[bp] = [...newLayouts[bp], {
              i: (cards.length - 1).toString(),
              x,
              y,
              w: newCard.width || 1,  // Use card's width or default
              h: newCard.height || 2,  // Use card's height or default
            }];
            foundSpot = true;
            break;
          }
        }
        if (!foundSpot) y++;
      }
    });

    setLayouts(newLayouts);
  }, [cards.length]);

  // 7. Save layout changes made by user
  const handleLayoutChange = (_, allLayouts) => {
    setLayouts(allLayouts);
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768 }}
      cols={{ lg: 4, md: 2, sm: 1 }}
      rowHeight={150}
      isDraggable={true}
      isResizable={true}
      draggableHandle=".drag-handle"
      onLayoutChange={handleLayoutChange}
    >
      {cards.map((card, index) => (
        <div key={index.toString()}>
          {card.title === "Add New Card" ? (
            <AddNewCard title={card.title} content={card.content} cards={cards} setCards={setCards} />
          ) : card.title === "Bilibili" ? (
            <BilibiliCard />
          ) : (
            <SampleCard {...card} />
          )}
        </div>
      ))}
    </ResponsiveGridLayout>
  );
}

export default RenderCards;