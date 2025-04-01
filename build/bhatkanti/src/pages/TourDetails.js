import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Tabs, Tab, ListGroup, Form, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FaStar, FaRegClock, FaMapMarkerAlt, FaUsers, FaCalendarAlt, FaCheck, FaTimes, FaCamera, FaHeart } from 'react-icons/fa';
import './TourDetails.css';

const TourDetails = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(2);

  // Mock data for a tour
  const tour = {
    id: id,
    name: "Bali Adventure: Ubud and Beaches",
    description: "Experience the best of Bali with this 5-day adventure tour. Explore the cultural heart of Ubud, visit ancient temples, trek through rice terraces, and relax on pristine beaches. This tour combines adventure, culture, and relaxation for an unforgettable Bali experience.",
    price: 299,
    discountPrice: 249,
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    reviews: 245,
    location: "Bali, Indonesia",
    groupSize: "Max 12 people",
    images: [
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1604841876161-d7168f818ffe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Welcome Dinner",
        description: "Arrive at Denpasar International Airport. Transfer to your hotel in Ubud. Evening welcome dinner with traditional Balinese performances."
      },
      {
        day: "Day 2",
        title: "Ubud Cultural Tour",
        description: "Visit the Sacred Monkey Forest, Ubud Palace, and local art markets. Afternoon rice terrace trekking in Tegallalang."
      },
      {
        day: "Day 3",
        title: "Mount Batur Sunrise Trek",
        description: "Early morning trek to Mount Batur to witness the spectacular sunrise. Afternoon visit to coffee plantation and Tirta Empul Temple."
      },
      {
        day: "Day 4",
        title: "Beach Day at Nusa Dua",
        description: "Transfer to Nusa Dua beach. Free day for water activities or relaxation. Optional water sports available."
      },
      {
        day: "Day 5",
        title: "Uluwatu Temple & Departure",
        description: "Morning free time. Afternoon visit to Uluwatu Temple for sunset. Transfer to airport for departure."
      }
    ],
    includes: [
      "4 nights accommodation",
      "Daily breakfast",
      "Welcome dinner",
      "All transfers and transportation",
      "English-speaking guide",
      "Entrance fees to attractions",
      "Mount Batur trekking experience"
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities",
      "Meals not mentioned"
    ],
    availableDates: [
      "2023-11-15",
      "2023-11-22",
      "2023-12-06",
      "2023-12-13",
      "2023-12-20"
    ]
  };

  const handleBookNow = () => {
    // Handle booking logic
    console.log(`Booking for ${selectedDate} with ${guests} guests`);
    // Navigate to checkout page
  };

  return (
    <div className="tour-details-page py-5">
      <Container>
        {/* Tour Header */}
        <Row className="mb-4">
          <Col>
            <h1 className="fw-bold mb-2">{tour.name}</h1>
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <FaStar className="text-warning me-1" />
                <span>{tour.rating} ({tour.reviews} reviews)</span>
              </div>
              <div className="me-3">
                <FaMapMarkerAlt className="me-1" />
                <span>{tour.location}</span>
              </div>
              <div>
                <FaRegClock className="me-1" />
                <span>{tour.duration}</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Tour Gallery */}
        <Row className="mb-5">
          <Col lg={8} className="mb-4 mb-lg-0">
            <div className="tour-gallery">
              <Row>
                <Col xs={12} className="mb-3">
                  <img 
                    src={tour.images[0]} 
                    alt={tour.name} 
                    className="img-fluid w-100 rounded main-image"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </Col>
                <Col xs={4}>
                  <img 
                    src={tour.images[1]} 
                    alt={tour.name} 
                    className="img-fluid w-100 rounded thumbnail"
                    style={{ height: "120px", objectFit: "cover" }}
                  />
                </Col>
                <Col xs={4}>
                  <img 
                    src={tour.images[2]} 
                    alt={tour.name} 
                    className="img-fluid w-100 rounded thumbnail"
                    style={{ height: "120px", objectFit: "cover" }}
                  />
                </Col>
                <Col xs={4}>
                  <div className="position-relative">
                    <img 
                      src={tour.images[3]} 
                      alt={tour.name} 
                      className="img-fluid w-100 rounded thumbnail"
                      style={{ height: "120px", objectFit: "cover" }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50 rounded">
                      <div className="text-white text-center">
                        <FaCamera className="mb-1" />
                        <p className="mb-0">View All</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          
          <Col lg={4}>
            <Card className="booking-card border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <span className="text-muted text-decoration-line-through me-2">${tour.price}</span>
                    <span className="h4 fw-bold text-primary">${tour.discountPrice}</span>
                    <span className="text-muted"> / person</span>
                  </div>
                  <Badge bg="success">17% OFF</Badge>
                </div>
                
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Select Date</Form.Label>
                    <Form.Select 
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    >
                      <option value="">Choose a date</option>
                      {tour.availableDates.map((date, index) => (
                        <option key={index} value={date}>{date}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Number of Guests</Form.Label>
                    <Form.Select 
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  
                  <div className="d-grid gap-2">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      onClick={handleBookNow}
                      disabled={!selectedDate}
                    >
                      Book Now
                    </Button>
                    <Button variant="outline-secondary">
                      <FaHeart className="me-2" /> Add to Wishlist
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Tour Content */}
        <Row>
          <Col lg={8}>
            <Tabs defaultActiveKey="overview" className="mb-4">
              <Tab eventKey="overview" title="Overview">
                <div className="p-4 bg-white rounded shadow-sm">
                  <h4 className="mb-3">Tour Overview</h4>
                  <p>{tour.description}</p>
                  
                  <Row className="mt-4">
                    <Col md={6} className="mb-3">
                      <Card className="h-100 border-0 bg-light">
                        <Card.Body>
                          <h5 className="mb-3">Tour Highlights</h5>
                          <ListGroup variant="flush">
                            <ListGroup.Item className="bg-transparent px-0">
                              <FaCheck className="text-success me-2" /> Cultural exploration of Ubud
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-transparent px-0">
                              <FaCheck className="text-success me-2" /> Mount Batur sunrise trek
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-transparent px-0">
                              <FaCheck className="text-success me-2" /> Relaxation at Nusa Dua beach
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-transparent px-0">
                              <FaCheck className="text-success me-2" /> Visit to sacred temples
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Card className="h-100 border-0 bg-light">
                        <Card.Body>
                          <h5 className="mb-3">Tour Information</h5>
                          <ListGroup variant="flush">
                            <ListGroup.Item className="bg-transparent px-0">
                              <strong>Duration:</strong> {tour.duration}
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-transparent px-0">
                              <strong>Group Size:</strong> {tour.groupSize}
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-transparent px-0">
                              <strong>Languages:</strong> English
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-transparent px-0">
                              <strong>Cancellation:</strong> Free up to 7 days before
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Tab>
              
              <Tab eventKey="itinerary" title="Itinerary">
                <div className="p-4 bg-white rounded shadow-sm">
                  <h4 className="mb-4">Tour Itinerary</h4>
                  
                  {tour.itinerary.map((day, index) => (
                    <div key={index} className="itinerary-day mb-4">
                      <div className="d-flex">
                        <div className="day-badge bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3">
                          {index + 1}
                        </div>
                        <div>
                          <h5 className="mb-2">{day.day}: {day.title}</h5>
                          <p className="mb-0">{day.description}</p>
                        </div>
                      </div>
                      {index < tour.itinerary.length - 1 && (
                        <div className="day-connector ms-4 my-2"></div>
                      )}
                    </div>
                  ))}
                </div>
              </Tab>
              
              <Tab eventKey="includes" title="Includes/Excludes">
                <div className="p-4 bg-white rounded shadow-sm">
                  <Row>
                    <Col md={6} className="mb-4 mb-md-0">
                      <h4 className="mb-3">What's Included</h4>
                      <ListGroup variant="flush">
                        {tour.includes.map((item, index) => (
                          <ListGroup.Item key={index} className="px-0 border-0">
                            <FaCheck className="text-success me-2" /> {item}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Col>
                    <Col md={6}>
                      <h4 className="mb-3">What's Excluded</h4>
                      <ListGroup variant="flush">
                        {tour.excludes.map((item, index) => (
                          <ListGroup.Item key={index} className="px-0 border-0">
                            <FaTimes className="text-danger me-2" /> {item}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Col>
                  </Row>
                </div>
              </Tab>
              
              <Tab eventKey="reviews" title="Reviews">
                <div className="p-4 bg-white rounded shadow-sm">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">Customer Reviews</h4>
                    <Button variant="outline-primary">Write a Review</Button>
                  </div>
                  
                  <div className="review-summary d-flex align-items-center mb-4">
                    <div className="review-average me-4">
                      <div className="display-4 fw-bold text-center">{tour.rating}</div>
                      <div className="text-warning text-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < Math.floor(tour.rating) ? "" : "text-muted"} />
                        ))}
                      </div>
                      <div className="text-muted text-center">{tour.reviews} reviews</div>
                    </div>
                    <div className="review-bars flex-grow-1">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="d-flex align-items-center mb-1">
                          <div className="me-2">{star} stars</div>
                          <div className="progress flex-grow-1 me-2" style={{ height: "8px" }}>
                            <div 
                              className="progress-bar bg-warning" 
                              style={{ width: `${star === 5 ? 75 : star === 4 ? 20 : star === 3 ? 5 : 0}%` }}
                            ></div>
                          </div>
                          <div className="text-muted small">
                            {star === 5 ? 75 : star === 4 ? 20 : star === 3 ? 5 : 0}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <hr />
                  
                  {/* Sample Reviews */}
                  {[
                    {
                      name: "John Smith",
                      date: "October 15, 2023",
                      rating: 5,
                      comment: "Amazing experience! The sunrise trek to Mount Batur was the highlight of our trip. Our guide was knowledgeable and friendly. Highly recommend this tour!"
                    },
                    {
                      name: "Emily Johnson",
                      date: "September 28, 2023",
                      rating: 4,
                      comment: "Great tour overall. The itinerary was well-planned and we got to see a lot of Bali. The only downside was that the last day felt a bit rushed."
                    },
                    {
                      name: "David Wong",
                      date: "September 10, 2023",
                      rating: 5,
                      comment: "Excellent value for money. The accommodations were better than expected and the tour guide was exceptional. Would book again with this company!"
                    }
                  ].map((review, index) => (
                    <div key={index} className="review-item mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <h5 className="mb-0">{review.name}</h5>
                        <span className="text-muted">{review.date}</span>
                      </div>
                      <div className="text-warning mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < review.rating ? "" : "text-muted"} />
                        ))}
                      </div>
                      <p className="mb-0">{review.comment}</p>
                      {index < 2 && <hr className="my-4" />}
                    </div>
                  ))}
                  
                  <div className="text-center mt-4">
                    <Button variant="outline-secondary">Load More Reviews</Button>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Col>
          
          <Col lg={4}>
            <div className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <h5 className="mb-3">Why Book With Us</h5>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="px-0 border-0">
                      <FaCheck className="text-success me-2" /> Best Price Guarantee
                    </ListGroup.Item>
                    <ListGroup.Item className="px-0 border-0">
                      <FaCheck className="text-success me-2" /> Free Cancellation
                    </ListGroup.Item>
                    <ListGroup.Item className="px-0 border-0">
                      <FaCheck className="text-success me-2" /> 24/7 Customer Support
                    </ListGroup.Item>
                    <ListGroup.Item className="px-0 border-0">
                      <FaCheck className="text-success me-2" /> Verified Reviews
                    </ListGroup.Item>
                    <ListGroup.Item className="px-0 border-0">
                      <FaCheck className="text-success me-2" /> Secure Payments
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
            
            <div className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <h5 className="mb-3">Need Help?</h5>
                  <p>Have questions about this tour? We're here to help!</p>
                  <Button variant="outline-primary" className="w-100 mb-2">
                    Chat with Us
                  </Button>
                  <Button variant="outline-secondary" className="w-100">
                    Call Us
                  </Button>
                </Card.Body>
              </Card>
            </div>
            
            <div>
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <h5 className="mb-3">Similar Tours</h5>
                  {[
                    {
                      name: "Bali Spiritual Journey",
                      image: "https://images.unsplash.com/photo-1604841876161-d7168f818ffe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                      price: 199
                    },
                    {
                      name: "Bali Beach Hopping",
                      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
                      price: 149
                    }
                  ].map((item, index) => (
                    <div key={index} className={`d-flex align-items-center ${index < 1 ? 'mb-3' : ''}`}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="rounded me-3" 
                        width="80" 
                        height="60" 
                        style={{ objectFit: "cover" }}
                      />
                      <div>
                        <h6 className="mb-1">{item.name}</h6>
                        <div className="text-primary fw-bold">${item.price}</div>
                      </div>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TourDetails;