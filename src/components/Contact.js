import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Message Sent",
      text: "Your message has been sent successfully!",
      confirmButtonColor: "#0056b3",
      background: "#f0f8ff",
      iconColor: "#0056b3",
    });

    // مسح بيانات النموذج
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container className="contact-container mt-5">
      <h1 className="text-center mb-4 animated-title">Contact Us</h1>
      <Row>
        <Col md={6} className="fade-in">
          <Card className="bg-light shadow-lg rounded-custom">
            <Card.Body>
              <Card.Title className="card-title">Get in Touch</Card.Title>
              <Card.Text>
                We’d love to hear from you! Whether you have a question,
                feedback, or just want to say hello, feel free to reach out to
                us.
              </Card.Text>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
                <Button
                  variant="success"
                  type="submit"
                  className="w-100 btn-custom"
                >
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="fade-in">
          <Card className="bg-light shadow-lg rounded-custom">
            <Card.Body>
              <Card.Title className="card-title">Our Location</Card.Title>
              <Card.Text>
                <strong>Address:</strong> Mansoura Elmashaya-Street
                <br />
                <strong>Phone:</strong> 015 5074 0490
                <br />
                <strong>Email:</strong> mahmoudsalah20012001@gmail.com
              </Card.Text>
              <Button
                variant="success"
                href="https://maps.google.com"
                target="_blank"
                className="w-100 btn-custom"
              >
                Find Us on Google Maps
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
