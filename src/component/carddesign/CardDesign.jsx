import React from 'react';
import './CardDesign.css';

export default function CardDesign(props) {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h3>{props.monster.name}</h3>
      <p>{props.monster.email}</p>
    </div>
  );
}
