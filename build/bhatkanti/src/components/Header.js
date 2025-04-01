import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Form, Button, Dropdown } from 'react-bootstrap';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <header>
      <Navbar bg="white" expand="lg" className="shadow-sm py-3" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
            TravelQuest
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/destinations" className="mx-2">Destinations</Nav.Link>
              <Nav.Link as={Link} to="/activities" className="mx-2">Activities</Nav.Link>
              <Nav.Link as={Link} to="/tours" className="mx-2">Tours</Nav.Link>
              <Nav.Link as={Link} to="/deals" className="mx-2">Deals</Nav.Link>
              <Nav.Link as={Link} to="/blog" className="mx-2">Blog</Nav.Link>
            </Nav>
            
            <Form className="d-flex mx-2" onSubmit={handleSearch}>
              <div className="position-relative">
                <Form.Control
                  type="search"
                  placeholder="Search experiences"
                  className="me-2 rounded-pill"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  variant="link" 
                  className="position-absolute end-0 top-0 text-dark" 
                  type="submit"
                >
                  <FaSearch />
                </Button>
              </div>
            </Form>
            
            <div className="d-flex align-items-center">
              <Link to="/wishlist" className="text-dark mx-2">
                <FaHeart />
              </Link>
              <Link to="/cart" className="text-dark mx-2">
                <FaShoppingCart />
              </Link>
              <Dropdown>
                <Dropdown.Toggle variant="link" className="text-dark no-arrow">
                  <FaUser />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/register">Register</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={Link} to="/profile">My Profile</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/bookings">My Bookings</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;