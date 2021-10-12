import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="card-tag">{props.tags[0]}</div>
      <img src={props.image} alt={props.tilte} className="card-image" />
      <div className="card-text">
        <h3 className="card-title">{props.title}</h3>
        <span className="card-text-muted">{props.description}</span>
      </div>
    </div>
  );
}
