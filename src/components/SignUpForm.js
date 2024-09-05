import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import './SignUpForm.css';

const SignUpForm = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="p-4">
        <Form>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Create username" />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Create password" />
          </Form.Group>
          <Form.Group controlId="formBio" className="mb-3">
            <Form.Label>Biography</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Write a short bio about yourself!" />
          </Form.Group>
          <Button variant="dark" type="submit" className="btn-block">Create an account</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SignUpForm;
