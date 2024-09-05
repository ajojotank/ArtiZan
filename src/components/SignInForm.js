import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import './SignInForm.css';

const SignInForm = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="p-4">
        <Form>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email / Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your Password" />
          </Form.Group>
          <Button variant="dark" type="submit" className="btn-block">Sign In</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SignInForm;
