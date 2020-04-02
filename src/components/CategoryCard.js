import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CategoryCard = ({category}) => {

    return (
        <Card
            bg="info"
            text="light"
        >
            <Card.Body>
                <Card.Title className="text-center display-4">{category}</Card.Title>
            </Card.Body>
            <Card.Footer className="p-0">
                <Button className="p-3" variant="info" size="sm" block>
                    Start Shopping
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default CategoryCard;
