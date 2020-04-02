import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CatalogItem = ({catalogItem}) => {

    const {name, description, image} = catalogItem;

    return (
        <Card className="catalog-item" bg="gradient-primary" text="light">
            <Card.Body>
                <Card.Title className="text-center display-4">
                    {name} <img src={image} className="img-fluid catalog-item-img" alt={description} />
                </Card.Title>
                <Card.Text className="text-center">{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="p-0">
                <Button className="p-3 text-uppercase" variant="primary" size="sm" block>
                    Shop Now
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default CatalogItem;
