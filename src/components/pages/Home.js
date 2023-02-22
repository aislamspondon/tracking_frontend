import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fetchUserLogin from "../../redux/thunk/fetchLogin";
export default function AdminHome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const login = useSelector((state) => state.login);
  const { userInfo } = login || {};
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchUserLogin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label>Username / Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username Or Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            <Button type="submit" variant="primary">
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
