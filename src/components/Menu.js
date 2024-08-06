import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../slice/MenuSlice";
import {
  Col,
  Container,
  Row,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";
import "../menue.css";
import { addCart } from "../slice/CartSlice";
import Swal from 'sweetalert2';

export default function Menu() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const [searchTerm, setSearchTerm] = useState("");
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const handleQuantityChange = (id, change) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) + change, 0),
    }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 0;
    if (quantity === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Quantity Required',
        text: 'Please enter a quantity before adding to the cart.',
      });
    } else {
      dispatch(addCart({ ...item, quantity }));
    }
  };

  const filteredMenu = menu.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Row className="rw mt5">
        <Col md={{ span: 6, offset: 3 }}>
          <InputGroup>
            <FormControl
              placeholder="Search for a product..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Button variant="success">Search</Button>
          </InputGroup>
        </Col>
      </Row>
      <Row className="rw mt-3">
        {filteredMenu.map((item) => (
          <Col md={3} key={item.id} className="mb-4">
            <MDBCard className="cad">
              <MDBCardImage
                className="mgg"
                src={item.image}
                position="top"
                alt={item.name}
              />
              <MDBCardBody>
                <MDBCardTitle className="mnn">{item.name}</MDBCardTitle>
                <MDBCardText className="description">
                  {item.description.slice(0, 65)}
                </MDBCardText>
                <MDBCardText className="price">
                  Price: {item.price} $
                </MDBCardText>
                <div className="quantity-controls">
                  <Button
                    variant="outline-danger"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </Button>
                  <span className="quantity">{quantities[item.id] || 0}</span>
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </Button>
                </div>
                <MDBBtn
                  className="btn-success"
                  onClick={() => handleAddToCart(item)}
                >
                  ADD TO CART
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
