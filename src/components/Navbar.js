import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { login, logout } from "../slice/Userslice";

const AppNavbar = () => {
  const [open, setOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const cart = useSelector((state) => state.cart); // Assuming you have cart in your state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    // localStorage.removeItem('userEmail');
    // localStorage.removeItem('userPassword');
    navigate("/register");
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      dispatch(login({ email: storedEmail }));
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="mb-5">
      <Container>
        <Navbar.Brand as={Link} to="/">
          RESTAURANT
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setOpen(!open)}
          className="custom-toggler"
        />

        <Navbar.Collapse id="basic-navbar-nav" in={open}>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              MENU
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              CONTACT
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              CART-{cart.length}
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {!isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/login">
                  <Button variant="outline-success" className="me-2">
                    LOGIN
                  </Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  <Button variant="outline-secondary">REGISTER</Button>
                </Nav.Link>
              </>
            ) : (
              <Button variant="outline-danger" onClick={handleLogout}>
                LOG OUT
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
