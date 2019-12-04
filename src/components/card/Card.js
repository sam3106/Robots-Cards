import React from "react";
import "./card.css";

export const Card = props => {
  // Same as export default Card at the end of app must add {} when importing ex {Card}
  const { monsters, email } = props;
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${monsters.id}set=set2&size=180x180`}
      />
      <h2 className="card-container">{monsters.name} </h2>
      <p>{monsters.email}</p>
    </div>
  );
};
