import React from "react";
import { motion } from "framer-motion";
export default function Card(props) {
  return (
    <motion.div layout className="card-container">
      <div className="card-tag">{props.tags[0]}</div>
      <div
        style={{
          position: "relative",
          top: "-20px",
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          height: "150px",
          backgroundPositionY: "-50px",
        }}
      />
      <div className="card-text">
        <h3 className="card-title">{props.title}</h3>
        <span className="card-text-muted">{props.description}</span>
      </div>
    </motion.div>
  );
}
