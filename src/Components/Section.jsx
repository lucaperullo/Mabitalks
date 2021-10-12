import React, { useEffect } from "react";
import Card from "./Card";
import { Row, Col, Container } from "react-bootstrap";
import { useStateValue } from "../contextApi/stateProvider";
import Categories from "./Categories";
import { motion } from "framer-motion";
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
      <Container>
        <h1 className="mabi-title">Next on Mabitalks</h1>
        <Categories />
        <Row>
          {state.cards.map((card) => (
            <Col xs={12} lg={6} xl={4}>
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
                image={card.image}
                tags={card.tags}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
