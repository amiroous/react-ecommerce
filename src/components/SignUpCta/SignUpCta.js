import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SignUpForm from "components/SignUpForm/SignUpForm";

const SignUpCta = () => {

    const [visibility, setVisibility] = useState(false);
    const handleShow = () => setVisibility(true);
    const handleHide = () => setVisibility(false);

    return (
        <div>
            <Button variant="outline-warning" onClick={handleShow}>
                Sign Up
            </Button>
            <Modal show={visibility} onHide={handleHide} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignUpForm/>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SignUpCta;
