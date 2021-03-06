import React from 'react';
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import {IMAGES_URL} from 'constants.js';

const CatalogCard = ({catalogCard}) => {

    const {id, name, description, image} = catalogCard;

    return (
        <Link to={`${id}/${name.toLowerCase()}`}
              className="catalog-item-wrapper text-decoration-none"
              type="button"
        >
            <Card className="catalog-item" bg="gradient-primary" text="light">
                <Card.Body>
                    <Card.Title className="text-center display-4">
                        {name} <img src={IMAGES_URL + image} className="img-fluid catalog-item-img" alt={description} />
                    </Card.Title>
                    <Card.Text className="text-center">{description}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default CatalogCard;
