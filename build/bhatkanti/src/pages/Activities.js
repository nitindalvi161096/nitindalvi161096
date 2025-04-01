import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, InputGroup, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaStar, FaRegClock, FaMapMarkerAlt } from 'react-icons/fa';
import './Activities.css';

const Activities = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  
  // Mock data for activities
  const activities = [
    {
      id: 1,
      name: "Bali Swing & Waterfall Tour",
      category: "Adventure",
      location: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
      price: 49,
      duration: "Full Day",
      rating: 4.8,
      reviews: 245,
      description: "Experience the thrill of swinging over the jungle and visit stunning waterfalls in Bali."
    },
    {
      id: 2,
      name: "Phi Phi Islands Speedboat Tour",
      category: "Water Activities",
      location: "Phuket, Thailand",
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      price: 89,
      duration: "Full Day",
      rating: 4.7,
      reviews: 189,
      description: "Visit the famous Phi Phi Islands by speedboat, including Maya Bay and Monkey Beach."
    },
    {
      id: 3,
      name: "Desert Safari with BBQ Dinner",
      category: "Adventure",
      location: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
      price: 75,
      duration: "Half Day",
      rating: 4.9,
      reviews: 312,
      description: "Experience dune bashing, camel riding, and enjoy a BBQ dinner with entertainment."
    },
    {
      id: 4,
      name: "Universal Studios Singapore",
      category: "Theme Parks",
      location: "Singapore",
      image: "https://images.unsplash.com/photo-1607017137021-5dc7e8cd4317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
      price: 79,
      duration: "Full Day",
      rating: 4.6,
      reviews: 275,
      description: "Enjoy a day of fun and excitement at Universal Studios Singapore."
    },
    {
      id: 5,
      name: "Maldives Snorkeling Adventure",
      category: "Water Activities",
      location: "Maldives",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      price: 120,
      duration: "Half Day",
      rating: 4.9,
      reviews: 156,
      description: "Discover the underwater world of the Maldives with this guided snorkeling tour."
    },
    {
      id: 6,
      name: "Eiffel Tower Skip-the-Line Ticket",
      category: "Sightseeing",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      price: 45,
      duration: "2 Hours",
      rating: 4.5,
      reviews: 420,
      description: "Skip the long lines and enjoy priority access to the Eiffel Tower."
    },
    {
      id: 7,
      name: "Colosseum & Roman Forum Tour",
      category: "Cultural",
      location: "Rome, Italy",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1696&q=80",
      price: 65,
      duration: "3 Hours",
      rating: 4.8,
      reviews: 310,
      description: "Explore the ancient Colosseum and Roman Forum with an expert guide."
    },
    {
      id: 8,
      name: "New York Helicopter Tour",
      category: "Luxury",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      price: 249,
      duration: "30 Minutes",
      rating: 4.7,
      reviews: 185,
      description: "See the iconic New York skyline from above with this thrilling helicopter tour."
    },
    {
      id: 9,
      name: "Mount Batur Sunrise Trek",
      category: "Adventure",
      location: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1604841876161-d7168f818ffe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      price: 65,
      duration: "Full Day",
      rating: 4.9,
      reviews: 278,
      description: "Trek to the summit of Mount Batur to witness a spectacular sunrise."
    },
    {
      id: 10,
      name: "Bangkok Food Tour",
      category: "Food & Drink",
      location: "Bangkok, Thailand",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      price: 55,
      duration: "4 Hours",
      rating: 4.8,
      reviews: 195,
      description: "Sample delicious Thai street food with a local guide in Bangkok."
    },
    {
      id: 11,
      name: "Burj Khalifa Observation Deck",
      category: "Sightseeing",
      location: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
      price: 40,
      duration: "1 Hour",
      rating: 4.6,
      reviews: 520,
      description: "Visit the observation deck of the world's tallest building for stunning views."
    },
    {
      id: 12,
      name: "Singapore Night Safari",
      category: "Wildlife",
      location: "Singapore",
      image: "https://images.unsplash.com/photo-1544323262-3b31c0e27d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      price: 50,
      duration: "4 Hours",
      rating: 4.7,
      reviews: 340,
      description: "Experience the world's first nocturnal wildlife park with over 900 animals."
    }
  ];
  
  // Get unique categories for filter
  const categories = [...new Set(activities.map(activity => activity.category))];
  
  // Get unique durations for filter
  const durations = [...new Set(activities.map(activity => activity.duration))];
  
  // Filter activities based on search, category, duration, and price
  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          activity.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === '' || activity.category === selectedCategory;
    const matchesDuration = selectedDuration === '' || activity.duration === selectedDuration;
    const matchesPrice = activity.price >= priceRange[0] && activity.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesDuration && matchesPrice;
  });

  return (
    <div className="activities-page py-5">
      <Container>
        {/* Page Header */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-4 fw-bold mb-3">Explore Activities</h1>
            <p className="lead mb-4">Discover amazing experiences and adventures around the world</p>
            
            <div className="search-container">
              <InputGroup className="mb-3">
                <InputGroup.Text><FaSearch /></InputGroup.Text>
                <Form.Control
                  placeholder="Search activities, destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant="primary">Search</Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
        
        {/* Filters and Activities */}
        <Row>
          {/* Filters Sidebar */}
          <Col lg={3} className="mb-4">
            <Card className="filter-card border-0 shadow-sm">
              <Card.Body>
                <h5 className="mb-3 fw-bold">Filters</h5>
                
                <div className="mb-4">
                  <h6 className="mb-2">Category</h6>
                  <Form.Select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </Form.Select>
                </div>
                
                <div className="mb-4">
                  <h6 className="mb-2">Duration</h6>
                  <Form.Select 
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                  >
                    <option value="">Any Duration</option>
                    {durations.map((duration, index) => (
                      <option key={index} value={duration}>{duration}</option>
                    ))}
                  </Form.Select>
                </div>
                
                <div className="mb-4">
                  <h6 className="mb-2">Price Range</h6>
                  <div className="d-flex justify-content-between mb-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <Form.Range 
                    min={0}
                    max={500}
                    step={10}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  />
                </div>
                
                <div className="mb-4">
                  <h6 className="mb-2">Rating</h6>
                  <Form.Check 
                    type="checkbox" 
                    id="rating-5" 
                    label={
                      <span>
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <span className="ms-2">5.0</span>
                      </span>
                    } 
                    className="mb-2"
                  />
                  <Form.Check 
                    type="checkbox" 
                    id="rating-4" 
                    label={
                      <span>
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-muted" />
                        <span className="ms-2">4.0+</span>
                      </span>
                    } 
                    className="mb-2"
                  />
                  <Form.Check 
                    type="checkbox" 
                    id="rating-3" 
                    label={
                      <span>
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-muted" />
                        <FaStar className="text-muted" />
                        <span className="ms-2">3.0+</span>
                      </span>
                    } 
                  />
                </div>
                
                <Button variant="outline-secondary" className="w-100" onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                  setSelectedDuration('');
                  setPriceRange([0, 500]);
                }}>
                  Clear All Filters
                </Button>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Activities Grid */}
          <Col lg={9}>
            <Row className="mb-4">
              <Col>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">{filteredActivities.length} activities found</h5>
                  <Form.Select style={{ width: "200px" }}>
                    <option>Sort by: Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating: High to Low</option>
                    <option>Duration: Short to Long</option>
                  </Form.Select>
                </div>
              </Col>
            </Row>
            
            <Row>
              {filteredActivities.length > 0 ? (
                filteredActivities.map(activity => (
                  <Col key={activity.id} md={6} lg={4} className="mb-4">
                    <Card className="activity-card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                      <div className="position-relative">
                        <Card.Img 
                          variant="top" 
                          src={activity.image} 
                          height="180" 
                          style={{ objectFit: "cover" }} 
                        />
                        <Badge 
                          bg="primary" 
                          className="position-absolute top-0 end-0 m-2 px-2 py-1"
                        >
                          {activity.category}
                        </Badge>
                      </div>
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <small className="text-muted">
                            <FaMapMarkerAlt className="me-1" />
                            {activity.location}
                          </small>
                          <small className="text-warning">
                            <FaStar className="me-1" />
                            {activity.rating} ({activity.reviews})
                          </small>
                        </div>
                        <Card.Title as="h5" className="mb-2">{activity.name}</Card.Title>
                        <div className="d-flex align-items-center mb-3">
                          <FaRegClock className="text-muted me-1" />
                          <small className="text-muted">{activity.duration}</small>
                        </div>
                        <Card.Text className="mb-3 small">{activity.description}</Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="h5 text-primary fw-bold">${activity.price}</span>
                            <small className="text-muted"> / person</small>
                          </div>
                          <Button 
                            as={Link} 
                            to={`/activities/${activity.id}`} 
                            variant="outline-primary" 
                            size="sm"
                          >
                            View Details
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <Col className="text-center py-5">
                  <h4>No activities found matching your filters.</h4>
                  <Button 
                    variant="outline-primary" 
                    className="mt-3"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('');
                      setSelectedDuration('');
                      setPriceRange([0, 500]);
                    }}
                  >
                    Clear Filters
                  </Button>
                </Col>
              )}
            </Row>
            
            {filteredActivities.length > 0 && (
              <Row className="mt-4">
                <Col className="d-flex justify-content-center">
                  <Button variant="outline-primary" className="px-4">Load More</Button>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
        
        {/* Popular Categories */}
        <section className="mt-5 pt-4">
          <h2 className="text-center mb-4 fw-bold">Popular Categories</h2>
          <Row>
            {[
              { name: "Adventure", icon: "🧗‍♂️" },
              { name: "Water Activities", icon: "🏄‍♂️" },
              { name: "Cultural", icon: "🏛️" },
              { name: "Food & Drink", icon: "🍽️" },
              { name: "Sightseeing", icon: "🗼" },
              { name: "Wildlife", icon: "🦁" }
            ].map((category, index) => (
              <Col key={index} md={4} lg={2} className="mb-4">
                <Card 
                  className="category-card text-center border-0 shadow-sm h-100"
                  onClick={() => setSelectedCategory(category.name)}
                  style={{ cursor: 'pointer' }}
                >
                  <Card.Body className="d-flex flex-column justify-content-center py-4">
                    <div className="category-icon mb-3 mx-auto">
                      <span style={{ fontSize: "2rem" }}>{category.icon}</span>
                    </div>
                    <h5 className="mb-0">{category.name}</h5>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
        
        {/* Featured Destinations */}
        <section className="mt-5 pt-4">
          <Row className="align-items-center mb-4">
            <Col>
              <h2 className="fw-bold mb-0">Featured Destinations</h2>
            </Col>
            <Col className="text-end">
              <Link to="/destinations" className="btn btn-outline-primary">View All Destinations</Link>
            </Col>
          </Row>
          
          <Row>
            {[
              { 
                name: "Bali", 
                country: "Indonesia",
                image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
                activities: 120
              },
              { 
                name: "Phuket", 
                country: "Thailand",
                image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                activities: 95
              },
              { 
                name: "Dubai", 
                country: "UAE",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                activities: 85
              }
            ].map((destination, index) => (
              <Col key={index} md={4} className="mb-4">
                <Link to={`/destinations/${destination.name.toLowerCase()}`} className="text-decoration-none">
                  <Card className="destination-card border-0 rounded-3 overflow-hidden shadow-sm h-100">
                    <div className="position-relative">
                      <Card.Img 
                        variant="top" 
                        src={destination.image} 
                        height="200" 
                        style={{ objectFit: "cover" }} 
                      />
                      <div className="position-absolute bottom-0 start-0 w-100 p-3 text-white" 
                           style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                        <h5 className="mb-0 fw-bold">{destination.name}</h5>
                        <div className="d-flex justify-content-between">
                          <p className="mb-0">{destination.country}</p>
                          <p className="mb-0">{destination.activities} activities</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Activities;