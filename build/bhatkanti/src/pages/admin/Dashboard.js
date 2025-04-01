import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBox, FaCalendarAlt, FaMapMarkerAlt, FaChartLine, FaUsers, FaCog } from 'react-icons/fa';
import AdminLayout from '../../components/admin/AdminLayout';
import './Dashboard.css';

const Dashboard = () => {
  // Mock data for dashboard stats
  const stats = {
    totalBookings: 1248,
    pendingBookings: 42,
    totalRevenue: 248650,
    activePackages: 36,
    totalDestinations: 24,
    totalUsers: 3752
  };

  // Mock data for recent bookings
  const recentBookings = [
    { id: 'BK-1023', customer: 'John Smith', package: 'Bali Adventure', date: '2023-11-15', amount: 549, status: 'Confirmed' },
    { id: 'BK-1022', customer: 'Emma Johnson', package: 'Dubai City Tour', date: '2023-11-14', amount: 349, status: 'Pending' },
    { id: 'BK-1021', customer: 'Michael Brown', package: 'Thailand Explorer', date: '2023-11-13', amount: 649, status: 'Confirmed' },
    { id: 'BK-1020', customer: 'Sarah Wilson', package: 'Singapore Family Trip', date: '2023-11-12', amount: 899, status: 'Confirmed' },
  ];

  return (
    <AdminLayout>
      <Container fluid className="py-4">
        <Row className="mb-4">
          <Col>
            <h1 className="fw-bold">Dashboard</h1>
            <p className="text-muted">Welcome to Bhatkanti Admin Panel</p>
          </Col>
        </Row>

        {/* Stats Cards */}
        <Row className="mb-4">
          <Col md={6} lg={4} xl={2} className="mb-4 mb-xl-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <div className="stats-icon bg-primary-subtle text-primary">
                    <FaCalendarAlt />
                  </div>
                  <h6 className="mb-0 ms-2">Total Bookings</h6>
                </div>
                <h3 className="fw-bold mb-0">{stats.totalBookings}</h3>
                <div className="mt-auto pt-3">
                  <small className="text-success">+12% from last month</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} xl={2} className="mb-4 mb-xl-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <div className="stats-icon bg-warning-subtle text-warning">
                    <FaCalendarAlt />
                  </div>
                  <h6 className="mb-0 ms-2">Pending Bookings</h6>
                </div>
                <h3 className="fw-bold mb-0">{stats.pendingBookings}</h3>
                <div className="mt-auto pt-3">
                  <small className="text-danger">+5% from last month</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} xl={2} className="mb-4 mb-xl-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <div className="stats-icon bg-success-subtle text-success">
                    <FaChartLine />
                  </div>
                  <h6 className="mb-0 ms-2">Total Revenue</h6>
                </div>
                <h3 className="fw-bold mb-0">${stats.totalRevenue.toLocaleString()}</h3>
                <div className="mt-auto pt-3">
                  <small className="text-success">+18% from last month</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} xl={2} className="mb-4 mb-xl-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <div className="stats-icon bg-info-subtle text-info">
                    <FaBox />
                  </div>
                  <h6 className="mb-0 ms-2">Active Packages</h6>
                </div>
                <h3 className="fw-bold mb-0">{stats.activePackages}</h3>
                <div className="mt-auto pt-3">
                  <small className="text-success">+3 new this month</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} xl={2} className="mb-4 mb-xl-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <div className="stats-icon bg-danger-subtle text-danger">
                    <FaMapMarkerAlt />
                  </div>
                  <h6 className="mb-0 ms-2">Destinations</h6>
                </div>
                <h3 className="fw-bold mb-0">{stats.totalDestinations}</h3>
                <div className="mt-auto pt-3">
                  <small className="text-success">+2 new this month</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} xl={2} className="mb-4 mb-xl-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <div className="stats-icon bg-primary-subtle text-primary">
                    <FaUsers />
                  </div>
                  <h6 className="mb-0 ms-2">Total Users</h6>
                </div>
                <h3 className="fw-bold mb-0">{stats.totalUsers}</h3>
                <div className="mt-auto pt-3">
                  <small className="text-success">+8% from last month</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Quick Actions */}
        <Row className="mb-4">
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h5 className="mb-3">Quick Actions</h5>
                <div className="d-flex flex-wrap gap-2">
                  <Button as={Link} to="/admin/packages/new" variant="primary">
                    <FaBox className="me-2" />
                    Add New Package
                  </Button>
                  <Button as={Link} to="/admin/destinations/new" variant="success">
                    <FaMapMarkerAlt className="me-2" />
                    Add New Destination
                  </Button>
                  <Button as={Link} to="/admin/bookings" variant="info">
                    <FaCalendarAlt className="me-2" />
                    View All Bookings
                  </Button>
                  <Button as={Link} to="/admin/analytics" variant="warning">
                    <FaChartLine className="me-2" />
                    View Analytics
                  </Button>
                  <Button as={Link} to="/admin/settings" variant="secondary">
                    <FaCog className="me-2" />
                    Settings
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Recent Bookings */}
        <Row className="mb-4">
          <Col lg={8} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Recent Bookings</h5>
                  <Button as={Link} to="/admin/bookings" variant="link" className="p-0">View All</Button>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Package</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentBookings.map((booking, index) => (
                        <tr key={index}>
                          <td>{booking.id}</td>
                          <td>{booking.customer}</td>
                          <td>{booking.package}</td>
                          <td>{booking.date}</td>
                          <td>${booking.amount}</td>
                          <td>
                            <span className={`badge ${booking.status === 'Confirmed' ? 'bg-success' : 'bg-warning'}`}>
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <h5 className="mb-3">Revenue by Package Type</h5>
                <div className="chart-placeholder d-flex align-items-center justify-content-center">
                  <div className="text-center py-5">
                    <div className="mb-3">Chart Placeholder</div>
                    <small className="text-muted">Revenue distribution by package type</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Popular Destinations */}
        <Row>
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Popular Destinations</h5>
                  <Button as={Link} to="/admin/destinations" variant="link" className="p-0">View All</Button>
                </div>
                <Row>
                  {['Bali, Indonesia', 'Dubai, UAE', 'Phuket, Thailand', 'Singapore'].map((destination, index) => (
                    <Col key={index} md={6} lg={3} className="mb-3">
                      <Card className="border-0 shadow-sm">
                        <Card.Body className="d-flex align-items-center">
                          <div className="destination-icon me-3">
                            <FaMapMarkerAlt />
                          </div>
                          <div>
                            <h6 className="mb-0">{destination}</h6>
                            <small className="text-muted">{Math.floor(Math.random() * 100) + 50} bookings</small>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
};

export default Dashboard;