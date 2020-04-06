import React from 'react';
import Card from "react-bootstrap/Card";

const CourseCard = ({courseCard}) => {

    const {id, name, price} = courseCard;

    return (
        <div className="catalog-item-wrapper">
            <Card className="catalog-item" bg="gradient-primary" text="light">
                <Card.Body>
                    <Card.Title className="text-center display-4">
                        {name}
                    </Card.Title>
                </Card.Body>
                <Card.Footer className="p-0">
                    <button onClick={() => console.log(`$${price} Paid for Course ${id}`)}
                            className="p-3 btn btn-block btn-secondary text-uppercase" type="button">
                        Buy for ${price}
                    </button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseCard;
