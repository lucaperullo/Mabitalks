import React from "react";
import { useStateValue } from "../contextApi/stateProvider";
export default function Categories() {
  const [state, dispatch] = useStateValue();
  const getCategory = async (category) => {
    try {
      const response = await fetch(
        `https://spotify-fetch.herokuapp.com/https://demo.mabiloft.com/react/`
      );
      if (response.ok) {
        const res = await response.json();
        const res2 = res.filter((item) => item.tags.includes(category));

        dispatch({
          type: "SET_CARDS",
          payload: await res2,
        });
      } else {
        console.log("Error while fetching categories");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="categories">
      <div className="categories__item" onClick={() => getCategory("design")}>
        <span className="category-name">Design</span>
      </div>
      <div
        className="categories__item"
        onClick={() => getCategory("development")}
      >
        <span className="category-name">Development</span>
      </div>
      <div className="categories__item" onClick={() => getCategory("news")}>
        <span className="category-name">News</span>
      </div>
      <div className="categories__item" onClick={() => getCategory("r&d")}>
        <span className="category-name">R&D</span>
      </div>
      <div
        className="categories__item"
        onClick={() => getCategory("presentation")}
      >
        <span className="category-name">Presentation</span>
      </div>
    </div>
  );
}
