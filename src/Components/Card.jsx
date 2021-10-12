import React from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";
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
          minHeight: "160px",
          backgroundPositionY: "-40px",
        }}
      />
      <div className="card-body">
        <div className="card-text">
          <h3 className="card-title">{props.title}</h3>
          <span className="card-text-muted">{props.description}</span>
        </div>
        <div className="like-button">
          {props.liked ? (
            <div className="liked">
              <FaHeart className="like" />
              <FaHeartBroken
                onClick={() => localStorage.removeItem(`${props.id}`)}
                className="unlike"
              />
            </div>
          ) : (
            <FiHeart
              onClick={() => localStorage.setItem(`${props.id}`, props.id)}
              className="not-liked"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
