import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaStar } from 'react-icons/fa';
import './Destinations.css';

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  
  // Mock data for destinations
  const destinations = [
    {
      id: 1,
      name: "Bali",
      country: "Indonesia",
      region: "Asia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
      activities: 120,
      rating: 4.8,
      description: "Experience the magic of Bali with its stunning beaches, lush rice terraces, and vibrant cultural scene."
    },
    {
      id: 2,
      name: "Phuket",
      country: "Thailand",
      region: "Asia",
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      activities: 95,
      rating: 4.6,
      description: "Thailand's largest island known for beautiful beaches, vibrant nightlife, and amazing water activities."
    },
    {
      id: 3,
      name: "Dubai",
      country: "United Arab Emirates",
      region: "Middle East",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      activities: 85,
      rating: 4.7,
      description: "A city of superlatives with the world's tallest building, luxury shopping, and desert adventures."
    },
    {
      id: 4,
      name: "Singapore",
      country: "Singapore",
      region: "Asia",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
      activities: 75,
      rating: 4.8,
      description: "A modern city-state with futuristic architecture, diverse food scene, and family-friendly attractions."
    },
    {
      id: 5,
      name: "Maldives",
      country: "Maldives",
      region: "Asia",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
      activities: 65,
      rating: 4.9,
      description: "Paradise on Earth with crystal clear waters, overwater bungalows, and world-class diving spots."
    },
    {
      id: 6,
      name: "Paris",
      country: "France",
      region: "Europe",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
      activities: 110,
      rating: 4.7,
      description: "The City of Light offers iconic landmarks, world-class museums, and romantic ambiance."
    },
    {
      id: 7,
      name: "Rome",
      country: "Italy",
      region: "Europe",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1696&q=80",
      activities: 95,
      rating: 4.6,
      description: "The Eternal City with ancient ruins, artistic masterpieces, and delicious Italian cuisine."
    },
    {
      id: 8,
      name: "New York",
      country: "United States",
      region: "North America",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      activities: 130,
      rating: 4.5,
      description: "The Big Apple offers iconic skyscrapers, world-class shopping, and diverse cultural experiences."
    }
  ];
  
  // Filter destinations based on search and region
  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          destination.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === '' || destination.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });
  
  // Get unique regions for filter
  const regions = [...new Set(destinations.map(destination => destination.region))];

  return (
    <div className="destinations-page py-5">
      <Container>
        {/* Page Header */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-4 fw-bold mb-3">Explore Destinations</h1>
            <p className="lead mb-4">Discover amazing places around the world and find your next adventure</p>
            
            <div className="search-filter-container d-flex flex-column flex-md-row gap-3">
              <InputGroup className="flex-grow-1">
                <InputGroup.Text><FaSearch /></InputGroup.Text>
                <Form.Control
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </InputGroup>
              
              <Form.Select 
                className="region-filter"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                style={{ maxWidth: "200px" }}
              >
                <option value="">All Regions</option>
                {regions.map((region, index) => (
                  <option key={index} value={region}>{region}</option>
                ))}
              </Form.Select>
            </div>
          </Col>
        </Row>
        
        {/* Destinations Grid */}
        <Row>
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map(destination => (
              <Col key={destination.id} md={6} lg={4} xl={3} className="mb-4">
                <Link to={`/destinations/${destination.name.toLowerCase()}`} className="text-decoration-none">
                  <Card className="destination-card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                    <div className="position-relative">
                      <Card.Img 
                        variant="top" 
                        src={destination.image} 
                        height="200" 
                        style={{ objectFit: "cover" }} 
                      />
                      <div className="position-absolute bottom-0 start-0 w-100 p-3 text-white" 
                           style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                        <div className="d-flex justify-content-between align-items-end">
                          <div>
                            <h5 className="mb-0 fw-bold">{destination.name}</h5>
                            <p className="mb-0">{destination.country}</p>
                          </div>
                          <div className="text-warning">
                            <FaStar className="me-1" />
                            <span>{destination.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Card.Body>
                      <p className="text-muted mb-2">{destination.activities} activities</p>
                      <p className="mb-0">{destination.description}</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))
          ) : (
            <Col className="text-center py-5">
              <h4>No destinations found matching your search.</h4>
              <Button 
                variant="outline-primary" 
                className="mt-3"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRegion('');
                }}
              >
                Clear Filters
              </Button>
            </Col>
          )}
        </Row>
        
        {/* Popular Regions Section */}
        <section className="mt-5 pt-4">
          <h2 className="text-center mb-4 fw-bold">Popular Regions</h2>
          <Row>
            {[
              { name: "Asia", image: "https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" },
              { name: "Europe", image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" },
              { name: "North America", image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" },
              { name: "Middle East", image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80" }
            ].map((region, index) => (
              <Col key={index} md={6} lg={3} className="mb-4">
                <Card 
                  className="region-card border-0 rounded-3 overflow-hidden shadow-sm h-100"
                  onClick={() => setSelectedRegion(region.name)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={region.image} 
                      height="200" 
                      style={{ objectFit: "cover" }} 
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                      <h3 className="text-white fw-bold">{region.name}</h3>
                    </div>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
        
        {/* Travel Inspiration */}
        <section className="mt-5 pt-4">
          <Row className="align-items-center mb-4">
            <Col>
              <h2 className="fw-bold mb-0">Travel Inspiration</h2>
            </Col>
            <Col className="text-end">
              <Link to="/blog" className="btn btn-outline-primary">View All Articles</Link>
            </Col>
          </Row>
          
          <Row>
            {[
              { 
                title: "Top 10 Things to Do in Bali", 
                image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
                date: "October 15, 2023"
              },
              { 
                title: "Best Time to Visit Thailand", 
                image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                date: "September 28, 2023"
              },
              { 
                title: "Ultimate Guide to Dubai", 
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                date: "September 10, 2023"
              }
            ].map((article, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="blog-card border-0 shadow-sm h-100">
                  <Card.Img 
                    variant="top" 
                    src={article.image} 
                    height="200" 
                    style={{ objectFit: "cover" }} 
                  />
                  <Card.Body>
                    <small className="text-muted">{article.date}</small>
                    <Card.Title as="h5" className="my-2">{article.title}</Card.Title>
                    <Link to="/blog/1" className="btn btn-link p-0">Read More</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Destinations;