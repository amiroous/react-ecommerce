import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import {IMAGES_URL} from 'constants.js';

const CatalogItem = ({catalogItem}) => {

    const {id, name, description, image} = catalogItem;

    return (
        <Card className="catalog-item" bg="gradient-primary" text="light">
            <Card.Body>
                <Card.Title className="text-center display-4">
                    {name} <img src={IMAGES_URL + image} className="img-fluid catalog-item-img" alt={description} />
                </Card.Title>
                <Card.Text className="text-center">{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="p-0">
                <Link to={`catalog/${id}`}
                      className="p-3 text-uppercase btn btn-sm btn-block btn-primary"
                      type="button"
                >Shop Now</Link>
            </Card.Footer>
        </Card>
    );
};

export default withRouter(CatalogItem);
