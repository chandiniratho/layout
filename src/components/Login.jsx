import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='hi'>
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: '24rem' }} className="p-4">
        <Card.Title className="text-center mb-4">Flora & Nora</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
    
          <Link to="/About"><Button variant="primary" type="submit" className="mt-4 w-100">
            Login
          </Button></Link>

        </Form>
      </Card>
    </Container>
    </div>
  );
};
export default Login