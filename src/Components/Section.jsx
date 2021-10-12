import React, { useEffect } from "react";
import Card from "./Card";
import { Row, Col, Container } from "react-bootstrap";
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
      <Container>
        <Row>
          {state.cards.map((card) => (
            <Col xs={12} md={4}>
              <Card
                className="card"
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
