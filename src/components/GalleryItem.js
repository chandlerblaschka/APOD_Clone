import React from "react";
// Card imports
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const GalleryItem = (props) => {
  const card = props.data;

  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={card.url} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.explanation}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{card.date}}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default GalleryItem;
