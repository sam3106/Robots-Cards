import React from 'react';
import './card-list.css';
import { Card } from '../card/Card';

const CardList = props => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map(monsterName => (
        <Card key={monsterName.id} monsters={monsterName}>
         
        </Card>
      ))}
    </div>
  );
};
export default CardList;
