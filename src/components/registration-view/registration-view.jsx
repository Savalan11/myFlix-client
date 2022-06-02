import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Container, Row, Col, Card, CardGroup } from 'react-bootstrap';

import './registration-view.scss';
import axios from 'axios';

//user registration form taking necessary user details
export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleRegistration = () => {
        e.preventDefault();
        axios.post('https://serene-castle-59289.herokuapp.com/users', {
          Username: username,
          Password: password,
          Email: email
        })
        .then(response => {
          console.log(response.data);
          window.open('/', '_self');
        })
        .catch(e => {
          console.log('Error during registration');
          alert('Registration not completed');
        });
      };
    
      return (
        <Container>
        <Row>
          <Col>
          <Card.Header>Please register</Card.Header>
          <Form>
        <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength="8"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Birthday</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Username" 
            />
          </Form.Group>
          <Button type="submit" onClick={handleRegistration}>
          Submit
        </Button>
        </Form>
            </Col>
          </Row>
        </Container>
    
    
    
        
      );
    }
    