import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaCreditCard, FaPaypal, FaGoogle, FaApple, FaRegClock, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  
  // Mock booking data
  const booking = {
    tour: {
      name: "Bali Adventure: Ubud and Beaches",
      image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      date: "2023-12-06",
      duration: "5 Days / 4 Nights",
      location: "Bali, Indonesia"
    },
    guests: 2,
    pricePerPerson: 249,
    discount: 50,
    tax: 30,
    total: 478
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing
    console.log('Processing payment...', { formData, paymentMethod, booking });
    // Redirect to confirmation page
    navigate('/booking-confirmation');
  };

  return (
    <div className="checkout-page py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="fw-bold mb-0">Checkout</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/tour-details">Tour Details</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Checkout</li>
              </ol>
            </nav>
          </Col>
        </Row>
        
        <Row>
          <Col lg={8} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <h4 className="mb-3">Your Information</h4>
                <Form>
                  <Row className="mb-3">
                    <Col md={6} className="mb-3 mb-md-0">
                      <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter first name" 
                          required 
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter last name" 
                          required 
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row className="mb-3">
                    <Col md={6} className="mb-3 mb-md-0">
                      <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter email" 
                          required 
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter phone number" 
                          required 
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Special Requests (Optional)</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={3} 
                      placeholder="Any special requirements or requests?" 
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h4 className="mb-3">Payment Method</h4>
                <Form onSubmit={handleSubmit}>
                  <div className="payment-methods mb-4">
                    <Row>
                      <Col xs={6} md={3} className="mb-3">
                        <div 
                          className={`payment-method-card ${paymentMethod === 'credit-card' ? 'active' : ''}`}
                          onClick={() => setPaymentMethod('credit-card')}
                        >
                          <FaCreditCard size={24} />
                          <span>Credit Card</span>
                        </div>
                      </Col>
                      <Col xs={6} md={3} className="mb-3">
                        <div 
                          className={`payment-method-card ${paymentMethod === 'paypal' ? 'active' : ''}`}
                          onClick={() => setPaymentMethod('paypal')}
                        >
                          <FaPaypal size={24} />
                          <span>PayPal</span>
                        </div>
                      </Col>
                      <Col xs={6} md={3} className="mb-3">
                        <div 
                          className={`payment-method-card ${paymentMethod === 'google-pay' ? 'active' : ''}`}
                          onClick={() => setPaymentMethod('google-pay')}
                        >
                          <FaGoogle size={24} />
                          <span>Google Pay</span>
                        </div>
                      </Col>
                      <Col xs={6} md={3} className="mb-3">
                        <div 
                          className={`payment-method-card ${paymentMethod === 'apple-pay' ? 'active' : ''}`}
                          onClick={() => setPaymentMethod('apple-pay')}
                        >
                          <FaApple size={24} />
                          <span>Apple Pay</span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  
                  {paymentMethod === 'credit-card' && (
                    <div className="credit-card-form">
                      <Row className="mb-3">
                        <Col>
                          <Form.Group>
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control type="text" placeholder="1234 5678 9012 3456" required />
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Row className="mb-3">
                        <Col md={6} className="mb-3 mb-md-0">
                          <Form.Group>
                            <Form.Label>Expiration Date</Form.Label>
                            <Form.Control type="text" placeholder="MM/YY" required />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>CVV</Form.Label>
                            <Form.Control type="text" placeholder="123" required />
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Cardholder Name</Form.Label>
                            <Form.Control type="text" placeholder="Name on card" required />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                  )}
                  
                  {paymentMethod !== 'credit-card' && (
                    <div className="other-payment-info p-3 bg-light rounded mb-3">
                      <p className="mb-0">You will be redirected to {
                        paymentMethod === 'paypal' ? 'PayPal' : 
                        paymentMethod === 'google-pay' ? 'Google Pay' : 'Apple Pay'
                      } to complete your payment after reviewing your order.</p>
                    </div>
                  )}
                  
                  <div className="d-flex align-items-center mb-4">
                    <Form.Check 
                      type="checkbox" 
                      id="terms-check" 
                      required
                    />
                    <Form.Label htmlFor="terms-check" className="ms-2 mb-0">
                      I agree to the <Link to="/terms">Terms and Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>
                    </Form.Label>
                  </div>
                  
                  <Button type="submit" variant="primary" size="lg" className="w-100">
                    <FaLock className="me-2" />
                    Complete Booking - ${booking.total}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4}>
            <Card className="border-0 shadow-sm order-summary-card">
              <Card.Body>
                <h4 className="mb-3">Order Summary</h4>
                
                <div className="tour-info mb-4">
                  <div className="d-flex mb-3">
                    <img 
                      src={booking.tour.image} 
                      alt={booking.tour.name} 
                      className="tour-thumbnail rounded"
                    />
                    <div className="ms-3">
                      <h5 className="mb-1">{booking.tour.name}</h5>
                      <div className="d-flex align-items-center text-muted mb-1 small">
                        <FaMapMarkerAlt className="me-1" />
                        <span>{booking.tour.location}</span>
                      </div>
                      <div className="d-flex align-items-center text-muted mb-1 small">
                        <FaRegClock className="me-1" />
                        <span>{booking.tour.duration}</span>
                      </div>
                      <div className="d-flex align-items-center text-muted small">
                        <FaUser className="me-1" />
                        <span>{booking.guests} Guests</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="date-info p-3 bg-light rounded mb-3">
                    <h6 className="mb-1">Tour Date</h6>
                    <p className="mb-0">{booking.tour.date}</p>
                  </div>
                </div>
                
                <ListGroup variant="flush" className="price-breakdown">
                  <ListGroup.Item className="d-flex justify-content-between px-0">
                    <span>Price ({booking.guests} guests)</span>
                    <span>${booking.pricePerPerson * booking.guests}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between px-0 text-success">
                    <span>Discount</span>
                    <span>-${booking.discount}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between px-0">
                    <span>Taxes & Fees</span>
                    <span>${booking.tax}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between px-0 fw-bold">
                    <span>Total</span>
                    <span>${booking.total}</span>
                  </ListGroup.Item>
                </ListGroup>
                
                <div className="secure-badge text-center mt-4">
                  <FaLock className="me-2 text-success" />
                  <span className="text-muted small">Secure Payment</span>
                </div>
                
                <div className="support-info text-center mt-3">
                  <p className="mb-0 small text-muted">Need help? <Link to="/contact">Contact Support</Link></p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;