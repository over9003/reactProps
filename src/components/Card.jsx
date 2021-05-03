import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.image} alt="avatar_img" />
        </div>
        <div className="bottom">
          <div className="info">
            <p>{props.phone}</p>
            <p>{props.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;