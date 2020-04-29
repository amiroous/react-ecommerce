import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SignInForm from "components/SignInForm/SignInForm";

const SignInCta = () => {

    const [visibility, setVisibility] = useState(false);
    const handleShow = () => setVisibility(true);
    const handleHide = () => setVisibility(false);

    return (
        <div>
            <Button variant="outline-warning" onClick={handleShow}>
                Sign In
            </Button>
            <Modal show={visibility} onHide={handleHide} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignInForm/>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SignInCta;
