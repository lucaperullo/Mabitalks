import React, { useEffect } from "react";
import Card from "./Card";

import { useStateValue } from "../contextApi/stateProvider";
export default function Section() {
  const [state, dispatch] = useStateValue();
  const getRecent = async () => {
    try {
      const response = await fetch(
        `https://spotify-fetch.herokuapp.com/https://demo.mabiloft.com/react/`
      );
      if (response.ok) {
        const res = await response.json();

        dispatch({
          type: "SET_CARDS",
          payload: await res,
        });
      } else {
        console.log("Error while fetching categories");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecent();
  }, []);

  return (
    <div className="section">
      <h1 className="mabi-title">Next on Mabitalks</h1>
      {state.cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          tags={card.tags}
        />
      ))}
    </div>
  );
}
