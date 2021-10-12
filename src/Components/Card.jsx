import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="card-tag">{props.tags[0]}</div>
      <div
        style={{
          position: "relative",
          top: "-20px",
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          height: "60%",
        }}
      />
      <div className="card-text">
        <h3 className="card-title">{props.title}</h3>
        <span className="card-text-muted">{props.description}</span>
      </div>
    </div>
  );
}
