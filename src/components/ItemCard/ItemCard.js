import React from 'react';
import { Link } from "react-router-dom";
import "components/ItemCard/ItemCard.scss";
import Card from "react-bootstrap/Card";
import { IMAGES_URL } from 'constants.js';

const ItemCard = ({collectionId, id, name, description, image, price}) => {

    return (
        <Link to={{
            pathname: `${collectionId.toString()}/${id.toString()}`,
            state: { id, name, description, image, price }
        }}
              className="item-wrapper text-decoration-none"
              type="button">
            <Card className="item" bg="gradient-primary" text="light">
                <Card.Body>
                    <Card.Title className="text-center">
                        <div className="display-5">{name}</div>
                        <img src={IMAGES_URL + image} className="img-fluid catalog-item-img mt-2" alt={name} />
                    </Card.Title>
                    <Card.Text className="text-center">{description}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default ItemCard;
