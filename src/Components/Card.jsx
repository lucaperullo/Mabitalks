import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";
export default function Card(props) {
  const today = new Date();
  useEffect(() => {
    console.log("today is :", today);
    console.log(props);
  }, []);
  const [like, setLike] = React.useState(false);

  return (
    <motion.div layout className="card-container">
      {new Date(props.date) > today && (
        <div className="card-tag">Da non perdere</div>
      )}
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
          {props.liked || like ? (
            <div className="liked">
              <FaHeart className="like" />
              <FaHeartBroken
                onClick={() => {
                  localStorage.removeItem(`${props.id}`);
                  setLike(false);
                }}
                className="unlike"
              />
            </div>
          ) : (
            <FiHeart
              onClick={() => {
                localStorage.setItem(`${props.id}`, props.id);
                setLike(true);
              }}
              className="not-liked"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
