import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import { FaChartLine, FaChartBar, FaChartPie, FaDownload, FaCalendarAlt } from 'react-icons/fa';
import AdminLayout from '../../components/admin/AdminLayout';
import './BookingAnalytics.css';

const BookingAnalytics = () => {
  const [dateRange, setDateRange] = useState('last30');
  
  // Mock data for analytics
  const analyticsData = {
    totalBookings: 1248,
    totalRevenue: 248650,
    averageBookingValue: 199,
    conversionRate: 3.2,
    topDestinations: [
      { name: 'Bali, Indonesia', bookings: 245, revenue: 134755 },
      { name: 'Dubai, UAE', bookings: 187, revenue: 121550 },
      { name: 'Phuket, Thailand', bookings: 156, revenue: 116844 },
      { name: 'Singapore', bookings: 132, revenue: 118668 },
      { name: 'Maldives', bookings: 98, revenue: 127302 }
    ],
    topPackages: [
      { name: 'Bali Adventure: Ubud and Beaches', bookings: 89, revenue: 48901 },
      { name: 'Dubai City Tour with Desert Safari', bookings: 76, revenue: 49324 },
      { name: 'Thailand Explorer: Bangkok & Phuket', bookings: 68, revenue: 50932 },
      { name: 'Singapore Family Package', bookings: 62, revenue: 55738 },
      { name: 'Maldives Luxury Getaway', bookings: 54, revenue: 70146 }
    ],
    monthlyBookings: [
      { month: 'Jan', bookings: 78, revenue: 15522 },
      { month: 'Feb', bookings: 82, revenue: 16318 },
      { month: 'Mar', bookings: 95, revenue: 18905 },
      { month: 'Apr', bookings: 110, revenue: 21890 },
      { month: 'May', bookings: 115, revenue: 22885 },
      { month: 'Jun', bookings: 125, revenue: 24875 },
      { month: 'Jul', bookings: 140, revenue: 27860 },
      { month: 'Aug', bookings: 135, revenue: 26865 },
      { month: 'Sep', bookings: 120, revenue: 23880 },
      { month: 'Oct', bookings: 105, revenue: 20895 },
      { month: 'Nov', bookings: 90, revenue: 17910 },
      { month: 'Dec', bookings: 53, revenue: 10547 }
    ]
  };

  return (
    <AdminLayout>
      <Container fluid className="py-4">
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="fw-bold">Booking Analytics</h1>
                <p className="text-muted">View and analyze booking data and trends</p>
              </div>
              <div className="d-flex">
                <Form.Select 
                  className="me-2" 
                  style={{ width: '200px' }}
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                >
                  <option value="last7">Last 7 Days</option>
                  <option value="last30">Last 30 Days</option>
                  <option value="last90">Last 90 Days</option>
                  <option value="lastYear">Last Year</option>
                  <option value="allTime">All Time</option>
                </Form.Select>
                <Button variant="outline-secondary">
                  <FaDownload className="me-2" />
                  Export
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Key Metrics */}
        <Row className="mb-4">
          <Col md={6} lg={3} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="stats-icon bg-primary-subtle text-primary">
                    <FaCalendarAlt />
                  </div>
                  <h6 className="mb-0 ms-2">Total Bookings</h6>
                </div>
                <h3 className="fw-bold mb-0">{analyticsData.totalBookings}</h3>
                <div className="mt-3">
                  <small className="text-success">+12% from previous period</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="stats-icon bg-success-subtle text-success">
                    <FaChartLine />
                  </div>
                  <h6 className="mb-0 ms-2">Total Revenue</h6>
                </div>
                <h3 className="fw-bold mb-0">${analyticsData.totalRevenue.toLocaleString()}</h3>
                <div className="mt-3">
                  <small className="text-success">+18% from previous period</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="stats-icon bg-info-subtle text-info">
                    <FaChartBar />
                  </div>
                  <h6 className="mb-0 ms-2">Avg. Booking Value</h6>
                </div>
                <h3 className="fw-bold mb-0">${analyticsData.averageBookingValue}</h3>
                <div className="mt-3">
                  <small className="text-success">+5% from previous period</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="stats-icon bg-warning-subtle text-warning">
                    <FaChartPie />
                  </div>
                  <h6 className="mb-0 ms-2">Conversion Rate</h6>
                </div>
                <h3 className="fw-bold mb-0">{analyticsData.conversionRate}%</h3>
                <div className="mt-3">
                  <small className="text-success">+0.5% from previous period</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Charts */}
        <Row className="mb-4">
          <Col lg={8} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <h5 className="mb-4">Monthly Booking Trends</h5>
                <div className="chart-container">
                  <div className="chart-placeholder d-flex align-items-center justify-content-center">
                    <div className="text-center py-5">
                      <div className="mb-3">Monthly Booking Chart Placeholder</div>
                      <small className="text-muted">Bookings and revenue by month</small>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Table responsive className="table-sm">
                    <thead>
                      <tr>
                        <th>Month</th>
                        {analyticsData.monthlyBookings.map((item, index) => (
                          <th key={index}>{item.month}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Bookings</strong></td>
                        {analyticsData.monthlyBookings.map((item, index) => (
                          <td key={index}>{item.bookings}</td>
                        ))}
                      </tr>
                      <tr>
                        <td><strong>Revenue</strong></td>
                        {analyticsData.monthlyBookings.map((item, index) => (
                          <td key={index}>${item.revenue.toLocaleString()}</td>
                        ))}
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <h5 className="mb-4">Bookings by Destination</h5>
                <div className="chart-container mb-3">
                  <div className="chart-placeholder d-flex align-items-center justify-content-center">
                    <div className="text-center py-5">
                      <div className="mb-3">Pie Chart Placeholder</div>
                      <small className="text-muted">Distribution by destination</small>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  {analyticsData.topDestinations.map((destination, index) => (
                    <div key={index} className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span>{destination.name}</span>
                        <span>{destination.bookings} bookings</span>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <div 
                          className="progress-bar" 
                          role="progressbar" 
                          style={{ 
                            width: `${(destination.bookings / analyticsData.totalBookings) * 100}%`,
                            backgroundColor: index === 0 ? '#0d6efd' : 
                                            index === 1 ? '#6610f2' : 
                                            index === 2 ? '#6f42c1' : 
                                            index === 3 ? '#d63384' : '#dc3545'
                          }} 
                          aria-valuenow={(destination.bookings / analyticsData.totalBookings) * 100} 
                          aria-valuemin="0" 
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Top Performing Packages */}
        <Row>
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h5 className="mb-4">Top Performing Packages</h5>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>Package Name</th>
                      <th>Bookings</th>
                      <th>Revenue</th>
                      <th>Avg. Price</th>
                      <th>Conversion Rate</th>
                      <th>Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analyticsData.topPackages.map((pkg, index) => (
                      <tr key={index}>
                        <td>{pkg.name}</td>
                        <td>{pkg.bookings}</td>
                        <td>${pkg.revenue.toLocaleString()}</td>
                        <td>${Math.round(pkg.revenue / pkg.bookings)}</td>
                        <td>{(2 + Math.random() * 2).toFixed(1)}%</td>
                        <td>
                          <div className="progress" style={{ height: '8px' }}>
                            <div 
                              className="progress-bar bg-success" 
                              role="progressbar" 
                              style={{ width: `${(pkg.bookings / analyticsData.topPackages[0].bookings) * 100}%` }} 
                              aria-valuenow={(pkg.bookings / analyticsData.topPackages[0].bookings) * 100} 
                              aria-valuemin="0" 
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
};

export default BookingAnalytics;