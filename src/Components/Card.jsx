import React from "react";

export default function Card() {
  return (
    <div className="card-container">
      <div className="card-tag">Da non perdere</div>
      <img
        src="https://instabug.com/blog/wp-content/uploads/2020/02/AppDev_Flutter-Apps.png"
        alt=""
        className="card-image"
      />
      <div>
        <h3 className="card-title">Introduzione a Flutter</h3>
        <span className="card-text-muted">
          Scopriamo i vantaggi dell'utilizzo di Flutter per sviluppare
          fantastiche app ibride
        </span>
      </div>
    </div>
  );
}
