import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-4 fw-bold">TravelQuest</h5>
            <p className="mb-3">
              Discover and book amazing travel experiences. From thrilling adventures to cultural tours,
              we offer the best travel experiences around the world.
            </p>
            <div className="social-icons d-flex gap-3 mb-3">
              <a href="#" className="text-white"><FaFacebookF /></a>
              <a href="#" className="text-white"><FaTwitter /></a>
              <a href="#" className="text-white"><FaInstagram /></a>
              <a href="#" className="text-white"><FaYoutube /></a>
              <a href="#" className="text-white"><FaLinkedinIn /></a>
            </div>
          </Col>
          
          <Col md={2} className="mb-4 mb-md-0">
            <h6 className="mb-3 fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li className="mb-2"><Link to="/careers" className="text-white text-decoration-none">Careers</Link></li>
              <li className="mb-2"><Link to="/blog" className="text-white text-decoration-none">Blog</Link></li>
              <li className="mb-2"><Link to="/press" className="text-white text-decoration-none">Press</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-white text-decoration-none">Contact Us</Link></li>
            </ul>
          </Col>
          
          <Col md={2} className="mb-4 mb-md-0">
            <h6 className="mb-3 fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/help" className="text-white text-decoration-none">Help Center</Link></li>
              <li className="mb-2"><Link to="/safety" className="text-white text-decoration-none">Safety Resource</Link></li>
              <li className="mb-2"><Link to="/cancellation" className="text-white text-decoration-none">Cancellation Options</Link></li>
              <li className="mb-2"><Link to="/covid" className="text-white text-decoration-none">COVID-19 Response</Link></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h6 className="mb-3 fw-bold">Subscribe to our Newsletter</h6>
            <p className="mb-3">Get exclusive deals, travel inspiration, and more!</p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Your email address"
                className="me-2 rounded-pill"
              />
              <Button variant="primary" className="rounded-pill">Subscribe</Button>
            </Form>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0">&copy; 2023 TravelQuest. All rights reserved.</p>
          </Col>
          <Col md={6}>
            <ul className="list-inline text-md-end mb-0">
              <li className="list-inline-item me-3">
                <Link to="/terms" className="text-white text-decoration-none">Terms of Service</Link>
              </li>
              <li className="list-inline-item me-3">
                <Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/sitemap" className="text-white text-decoration-none">Sitemap</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;