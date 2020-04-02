import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CourseCard = (props) => {

    const {name, description} = props.course;

    return (
        <Card
            bg="primary"
            text="light"
        >
            <Card.Body>
                <Card.Title className="text-center">{name}</Card.Title>
                <Card.Text className="text-center">{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="p-0">
                <Button className="p-3" variant="primary" size="sm" block>
                    Start Shopping
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default CourseCard;
