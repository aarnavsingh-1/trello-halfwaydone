import React from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';

const SwimLane = ({ title, cards, onCardMove, status }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: (item) => {
      const { id, status: prevStatus } = item;
      onCardMove(id, status, prevStatus);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const isActive = isOver && cards.length === 0;

  return (
    <div className={`swimlane ${isActive ? 'active' : ''}`} ref={drop}>
      <h2 className="swimlane-title">{title}</h2>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default SwimLane;


