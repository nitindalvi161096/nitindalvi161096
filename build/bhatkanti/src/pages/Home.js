import React from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaSearch, FaStar, FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section position-relative">
        <div className="hero-image" style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          height: "80vh",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          <Container className="h-100 d-flex flex-column justify-content-center position-relative">
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="display-4 text-white fw-bold mb-4">Discover Extraordinary Travel Experiences</h1>
                <p className="lead text-white mb-5">Book tours, activities, and unforgettable adventures around the world</p>
                
                <div className="search-box bg-white p-4 rounded shadow">
                  <Form>
                    <Row>
                      <Col md={4} className="mb-3 mb-md-0">
                        <InputGroup>
                          <InputGroup.Text><FaMapMarkerAlt /></InputGroup.Text>
                          <Form.Select>
                            <option>Select Destination</option>
                            <option>Bali</option>
                            <option>Thailand</option>
                            <option>Dubai</option>
                            <option>Singapore</option>
                          </Form.Select>
                        </InputGroup>
                      </Col>
                      <Col md={3} className="mb-3 mb-md-0">
                        <InputGroup>
                          <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
                          <Form.Control type="date" placeholder="When" />
                        </InputGroup>
                      </Col>
                      <Col md={3} className="mb-3 mb-md-0">
                        <InputGroup>
                          <InputGroup.Text><FaUsers /></InputGroup.Text>
                          <Form.Select>
                            <option>2 Adults</option>
                            <option>1 Adult</option>
                            <option>3 Adults</option>
                            <option>4 Adults</option>
                            <option>Family</option>
                          </Form.Select>
                        </InputGroup>
                      </Col>
                      <Col md={2}>
                        <Button variant="primary" className="w-100">
                          <FaSearch className="me-2" /> Search
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Popular Destinations</h2>
            <Link to="/destinations" className="text-decoration-none">
              View All <FaArrowRight className="ms-2" />
            </Link>
          </div>
          
          <Row>
            {[
              { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80", activities: 120 },
              { name: "Thailand", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", activities: 150 },
              { name: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80", activities: 85 },
              { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", activities: 95 }
            ].map((destination, index) => (
              <Col key={index} md={6} lg={3} className="mb-4">
                <Link to={`/destinations/${destination.name.toLowerCase()}`} className="text-decoration-none">
                  <Card className="destination-card border-0 rounded-3 overflow-hidden shadow-sm h-100">
                    <div className="position-relative">
                      <Card.Img variant="top" src={destination.image} height="200" style={{ objectFit: "cover" }} />
                      <div className="position-absolute bottom-0 start-0 w-100 p-3 text-white" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                        <h5 className="mb-0 fw-bold">{destination.name}</h5>
                        <p className="mb-0">{destination.activities} activities</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Popular Activities */}
      <section className="py-5 bg-light">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Popular Activities</h2>
            <Link to="/activities" className="text-decoration-none">
              View All <FaArrowRight className="ms-2" />
            </Link>
          </div>
          
          <Row>
            {[
              { name: "Scuba Diving", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" },
              { name: "Trekking", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" },
              { name: "Paragliding", image: "https://images.unsplash.com/photo-1622221410855-a339573bd883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" },
              { name: "Wildlife Safari", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80" },
              { name: "Kayaking", image: "https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80" },
              { name: "Bungee Jumping", image: "https://images.unsplash.com/photo-1541704328070-20bf4601ae3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" }
            ].map((activity, index) => (
              <Col key={index} md={4} lg={2} className="mb-4">
                <Link to={`/activities/${activity.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-decoration-none">
                  <Card className="activity-card border-0 rounded-3 overflow-hidden shadow-sm h-100">
                    <Card.Img variant="top" src={activity.image} height="150" style={{ objectFit: "cover" }} />
                    <Card.Body className="text-center">
                      <Card.Title as="h6" className="mb-0">{activity.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Tours */}
      <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Featured Tours</h2>
            <Link to="/tours" className="text-decoration-none">
              View All <FaArrowRight className="ms-2" />
            </Link>
          </div>
          
          <Row>
            {[
              { 
                name: "Bali Adventure: Ubud and Beaches", 
                image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", 
                price: 299,
                duration: "5 Days",
                rating: 4.8,
                reviews: 245
              },
              { 
                name: "Thailand Island Hopping Tour", 
                image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1739&q=80", 
                price: 349,
                duration: "7 Days",
                rating: 4.7,
                reviews: 189
              },
              { 
                name: "Dubai Desert Safari & City Tour", 
                image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80", 
                price: 199,
                duration: "3 Days",
                rating: 4.9,
                reviews: 312
              }
            ].map((tour, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <Card className="tour-card border-0 rounded-3 overflow-hidden shadow-sm h-100">
                  <div className="position-relative">
                    <Card.Img variant="top" src={tour.image} height="220" style={{ objectFit: "cover" }} />
                    <div className="position-absolute top-0 end-0 bg-primary text-white px-3 py-2 m-2 rounded-pill">
                      <strong>${tour.price}</strong>
                    </div>
                  </div>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-light text-dark">{tour.duration}</span>
                      <div className="text-warning">
                        <FaStar className="me-1" />
                        <small>{tour.rating} ({tour.reviews})</small>
                      </div>
                    </div>
                    <Card.Title as="h5" className="mb-3">{tour.name}</Card.Title>
                    <Button as={Link} to={`/tour/${index+1}`} variant="outline-primary" className="w-100">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={6}>
              <h2 className="fw-bold mb-3">What Our Travelers Say</h2>
              <p className="text-muted">Thousands of travelers have had wonderful experiences with us. Here's what they have to say.</p>
            </Col>
          </Row>
          
          <Row>
            {[
              { 
                name: "Sarah Johnson", 
                image: "https://randomuser.me/api/portraits/women/44.jpg", 
                location: "United States",
                text: "The Bali tour was absolutely amazing! Our guide was knowledgeable and friendly. The itinerary was perfect with a good mix of adventure and relaxation. Highly recommend!"
              },
              { 
                name: "Michael Chen", 
                image: "https://randomuser.me/api/portraits/men/32.jpg", 
                location: "Canada",
                text: "We booked the Thailand island hopping tour and it exceeded all our expectations. The accommodations were great, and the activities were well-planned. Will definitely book again!"
              },
              { 
                name: "Emma Williams", 
                image: "https://randomuser.me/api/portraits/women/63.jpg", 
                location: "Australia",
                text: "The Dubai desert safari was the highlight of our trip! The dune bashing was thrilling and the evening entertainment was fantastic. TravelQuest made everything so easy for us."
              }
            ].map((testimonial, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="testimonial-card border-0 rounded-3 shadow-sm h-100">
                  <Card.Body className="p-4">
                    <div className="text-warning mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="me-1" />
                      ))}
                    </div>
                    <Card.Text className="mb-4">{testimonial.text}</Card.Text>
                    <div className="d-flex align-items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="rounded-circle me-3" 
                        width="50" 
                        height="50" 
                      />
                      <div>
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.location}</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0">
              <h2 className="fw-bold mb-3">Get Travel Inspiration</h2>
              <p className="mb-0">Subscribe to our newsletter and receive exclusive offers, travel tips, and inspiration for your next adventure.</p>
            </Col>
            <Col lg={5}>
              <Form className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  className="me-2 py-2 rounded-pill"
                />
                <Button variant="light" className="px-4 rounded-pill">Subscribe</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;