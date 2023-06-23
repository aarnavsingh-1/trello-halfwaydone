import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Col, Row } from 'antd';
import SwimLane from './Components/SwimLane';

const App = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Card 1', status: 'todo' },
    { id: 2, title: 'Card 2', status: 'todo' },
    { id: 3, title: 'Card 3', status: 'inProgress' },
  ]);

  const handleCardMove = (dragIndex, dropIndex, status) => {
    const updatedCards = [...cards];
    const draggedCard = updatedCards[dragIndex];
    draggedCard.status = status;
    updatedCards.splice(dragIndex, 1);
    updatedCards.splice(dropIndex, 0, draggedCard);
    setCards(updatedCards);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ padding: '16px' }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <SwimLane
              title="To Do"
              cards={cards.filter((card) => card.status === 'todo')}
              onCardMove={handleCardMove}
              status="todo"
            />
          </Col>
          <Col span={8}>
            <SwimLane
              title="In Progress"
              cards={cards.filter((card) => card.status === 'inProgress')}
              onCardMove={handleCardMove}
              status="inProgress"
            />
          </Col>
          <Col span={8}>
            <SwimLane
              title="Completed"
              cards={cards.filter((card) => card.status === 'completed')}
              onCardMove={handleCardMove}
              status="completed"
            />
          </Col>
        </Row>
      </div>
    </DndProvider>
  );
};

export default App;

