import React from 'react';
import './CardList.css';
import CardDesign from '../carddesign/CardDesign';

 const CardList = (props) => {
return (
    <div className="card-list">
      {props.Monsters.map((monster) => (
        <CardDesign key={monster.id} monster={monster}/>
      ))}
    </div>
  );
}


export default CardList;