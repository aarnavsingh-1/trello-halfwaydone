import React from 'react';

const DraggableCard = ({ card }) => {
  return (
    <div className="card">
      <p>{card.title}</p>
    </div>
  );
};

export default DraggableCard;


