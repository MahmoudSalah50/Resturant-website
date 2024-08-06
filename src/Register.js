import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login } from "./slice/Userslice";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = () => {
    const newErrors = [];
    if (!email.includes("@")) {
      newErrors.push('Email must contain "@"');
    }
    if (password.length < 8) {
      newErrors.push("Password must be at least 8 characters long");
    }
    if (password !== confirmPassword) {
      newErrors.push("Passwords do not match");
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: validationErrors.join(" "),
      });
      return;
    }

    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail === email) {
      Swal.fire({
        icon: "error",
        title: "Email already registered",
        text: "Please use a different email address.",
      });
      return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    dispatch(login({ email }));

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Registration successful!",
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <Container>
      <Row className="justify-content-md-center p-5">
        <Col md="6">
          <h1 className="text-center mt-5">Register</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" className="btn btn-success w-100">
              Register
            </Button>
          </Form>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
