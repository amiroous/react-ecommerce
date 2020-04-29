import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUpForm = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // TODO: Handle Form Submit
        setEmail('');
        setPassword('');
    };

    return (
        <Form className="pt-2" onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Username"
                              value={username} onChange={e => setUsername(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email"
                              value={email} onChange={e => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Your Password"
                              value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicRepeatPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" placeholder="Repeat Your Password"
                              value={confirmedPassword} onChange={e => setConfirmedPassword(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit"  className="mt-2">
                Submit
            </Button>
        </Form>
    );
};

export default SignUpForm;
