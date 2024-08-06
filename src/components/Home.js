import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Slider";
import { Link } from "react-router-dom";

const url = "http://localhost:9000/restaurantInfo";
const urll = "http://localhost:9000/menuItems";

const Home = () => {
  const [info, setInfo] = useState(null);
  const [product, setProduct] = useState([]);

  const restaurantInfo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const menuItems = () => {
    fetch(urll)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    restaurantInfo();
    menuItems();
  }, []);

  return (
    <>
      <Slider />
      <h1 className="head text-light">Welcome TO Sweet and sour</h1>
      <Container>
        <Row className="mb-4">
          {product.map((product) => (
            <Col md={3} className="mb-4" key={product.id}>
              <MDBCard className="product-card">
                <MDBCardImage
                  src={product.image}
                  alt={product.name}
                  position="top"
                  className="product-image"
                />
                <MDBCardBody>
                  <MDBCardText className="product-name">
                    {product.name}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="mt-5">
        {info ? (
          <>
            <Row className="mb-4">
              <Col md={6} className="mb-4">
                <Card className="bg-light shadow-sm h-100">
                  <Card.Body>
                    <Card.Title>{info.name}</Card.Title>
                    <Card.Text>{info.description}</Card.Text>
                    <Card.Text>
                      <strong>Address:</strong> {info.address}
                    </Card.Text>
                    <Card.Text>
                      <strong>Phone:</strong> {info.phone}
                    </Card.Text>
                    <Card.Text>
                      <strong>Email:</strong> {info.email}
                    </Card.Text>
                    <Button
                      variant="success"
                      href="https://maps.google.com"
                      target="_blank"
                    >
                      Find Us on Google Maps
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="bg-light shadow-sm h-100">
                  <Card.Body>
                    <Card.Title>Hours of Operation</Card.Title>
                    <ul className="list-unstyled">
                      {Object.entries(info.hours).map(([day, hours]) => (
                        <li key={day}>
                          <strong>
                            {day.charAt(0).toUpperCase() + day.slice(1)}:
                          </strong>{" "}
                          {hours}
                        </li>
                      ))}
                    </ul>
                    <Link to="/menu" className="btn btn-success" href="/menu">
                      View Menu
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        ) : (
          <Row>
            <Col className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Home;
