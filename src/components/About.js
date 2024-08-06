import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";


const About = () => {
  return (
    <Container className="about-container mt-5">
      <h1 className="text-center mb-4 animated-title">About Us</h1>
      <Row className="mb-4">
        <Col md={6} className="fade-in">
          <Card className="bg-light shadow-lg rounded-custom">
            <Card.Body>
              <Card.Title >Our Story</Card.Title>
              <Card.Text>
                Welcome to Sweet and Sour, where we blend passion and creativity
                to bring you an exceptional dining experience. Our restaurant
                offers a variety of delicious dishes made from the freshest
                ingredients. Join us for a delightful meal that will tantalize
                your taste buds and leave you wanting more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="fade-in">
          <div className="image-container">
            <Image
              src="https://images.pexels.com/photos/24822858/pexels-photo-24822858/free-photo-of-man-making-bread-in-a-bakery.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Restaurant interior"
              fluid
              className="rounded-custom image-effect"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="fade-in">
          <Card className="bg-light shadow-lg rounded-custom">
            <Card.Body>
              <Card.Title >Our Philosophy</Card.Title>
              <Card.Text>
                At Sweet and Sour, we believe that dining is more than just a
                meal; it's an experience. We are dedicated to using
                locally-sourced ingredients to ensure freshness and support our
                community. Our chefs craft each dish with care and creativity,
                striving to deliver a dining experience that is both memorable
                and enjoyable.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
