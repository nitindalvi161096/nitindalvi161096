import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Form, Modal, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaFilter, FaEye, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import AdminLayout from '../../components/admin/AdminLayout';
import './PackageManagement.css';

const PackageManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [packageToDelete, setPackageToDelete] = useState(null);
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  // Mock data for packages
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "Bali Adventure: Ubud and Beaches",
      destination: "Bali, Indonesia",
      category: "Adventure",
      duration: "5 Days / 4 Nights",
      price: 549,
      inventory: 20,
      status: "Active"
    },
    {
      id: 2,
      name: "Dubai City Tour with Desert Safari",
      destination: "Dubai, UAE",
      category: "City Tour",
      duration: "4 Days / 3 Nights",
      price: 649,
      inventory: 15,
      status: "Active"
    },
    {
      id: 3,
      name: "Thailand Explorer: Bangkok & Phuket",
      destination: "Thailand",
      category: "Beach",
      duration: "7 Days / 6 Nights",
      price: 749,
      inventory: 12,
      status: "Active"
    },
    {
      id: 4,
      name: "Singapore Family Package",
      destination: "Singapore",
      category: "Family",
      duration: "5 Days / 4 Nights",
      price: 899,
      inventory: 8,
      status: "Active"
    },
    {
      id: 5,
      name: "Maldives Luxury Getaway",
      destination: "Maldives",
      category: "Luxury",
      duration: "6 Days / 5 Nights",
      price: 1299,
      inventory: 5,
      status: "Active"
    },
    {
      id: 6,
      name: "Paris Romantic Escape",
      destination: "Paris, France",
      category: "Romantic",
      duration: "4 Days / 3 Nights",
      price: 799,
      inventory: 10,
      status: "Active"
    },
    {
      id: 7,
      name: "Rome Historical Tour",
      destination: "Rome, Italy",
      category: "Cultural",
      duration: "5 Days / 4 Nights",
      price: 699,
      inventory: 0,
      status: "Sold Out"
    },
    {
      id: 8,
      name: "New York City Break",
      destination: "New York, USA",
      category: "City Tour",
      duration: "4 Days / 3 Nights",
      price: 849,
      inventory: 7,
      status: "Active"
    }
  ]);

  // Get unique destinations and categories for filters
  const destinations = [...new Set(packages.map(pkg => pkg.destination))];
  const categories = [...new Set(packages.map(pkg => pkg.category))];

  // Handle sort
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Get sort icon
  const getSortIcon = (field) => {
    if (sortField !== field) return <FaSort />;
    return sortDirection === 'asc' ? <FaSortUp /> : <FaSortDown />;
  };

  // Filter and sort packages
  const filteredPackages = packages
    .filter(pkg => {
      const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           pkg.destination.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDestination = selectedDestination === '' || pkg.destination === selectedDestination;
      const matchesCategory = selectedCategory === '' || pkg.category === selectedCategory;
      return matchesSearch && matchesDestination && matchesCategory;
    })
    .sort((a, b) => {
      if (sortDirection === 'asc') {
        return a[sortField] > b[sortField] ? 1 : -1;
      } else {
        return a[sortField] < b[sortField] ? 1 : -1;
      }
    });

  // Handle delete package
  const handleDeletePackage = () => {
    setPackages(packages.filter(pkg => pkg.id !== packageToDelete.id));
    setShowDeleteModal(false);
    setPackageToDelete(null);
  };

  // Handle update inventory
  const handleInventoryChange = (id, newInventory) => {
    setPackages(packages.map(pkg => {
      if (pkg.id === id) {
        const updatedPkg = { 
          ...pkg, 
          inventory: parseInt(newInventory),
          status: parseInt(newInventory) > 0 ? 'Active' : 'Sold Out'
        };
        return updatedPkg;
      }
      return pkg;
    }));
  };

  return (
    <AdminLayout>
      <Container fluid className="py-4">
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="fw-bold">Package Management</h1>
                <p className="text-muted">Manage your travel packages, pricing, and inventory</p>
              </div>
              <Button as={Link} to="/admin/packages/new" variant="primary">
                <FaPlus className="me-2" />
                Add New Package
              </Button>
            </div>
          </Col>
        </Row>

        {/* Filters */}
        <Row className="mb-4">
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Row>
                  <Col md={4} className="mb-3 mb-md-0">
                    <InputGroup>
                      <InputGroup.Text>
                        <FaSearch />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Search packages..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </InputGroup>
                  </Col>
                  <Col md={3} className="mb-3 mb-md-0">
                    <Form.Select
                      value={selectedDestination}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                    >
                      <option value="">All Destinations</option>
                      {destinations.map((destination, index) => (
                        <option key={index} value={destination}>{destination}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={3} className="mb-3 mb-md-0">
                    <Form.Select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="">All Categories</option>
                      {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={2}>
                    <Button variant="outline-secondary" className="w-100" onClick={() => {
                      setSearchQuery('');
                      setSelectedDestination('');
                      setSelectedCategory('');
                    }}>
                      <FaFilter className="me-2" />
                      Reset
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Packages Table */}
        <Row>
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <div className="table-responsive">
                  <Table hover className="align-middle">
                    <thead>
                      <tr>
                        <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
                          Package Name {getSortIcon('name')}
                        </th>
                        <th onClick={() => handleSort('destination')} style={{ cursor: 'pointer' }}>
                          Destination {getSortIcon('destination')}
                        </th>
                        <th onClick={() => handleSort('category')} style={{ cursor: 'pointer' }}>
                          Category {getSortIcon('category')}
                        </th>
                        <th onClick={() => handleSort('duration')} style={{ cursor: 'pointer' }}>
                          Duration {getSortIcon('duration')}
                        </th>
                        <th onClick={() => handleSort('price')} style={{ cursor: 'pointer' }}>
                          Price {getSortIcon('price')}
                        </th>
                        <th>Inventory</th>
                        <th onClick={() => handleSort('status')} style={{ cursor: 'pointer' }}>
                          Status {getSortIcon('status')}
                        </th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPackages.length > 0 ? (
                        filteredPackages.map(pkg => (
                          <tr key={pkg.id}>
                            <td>{pkg.name}</td>
                            <td>{pkg.destination}</td>
                            <td>{pkg.category}</td>
                            <td>{pkg.duration}</td>
                            <td>${pkg.price}</td>
                            <td>
                              <Form.Control
                                type="number"
                                min="0"
                                value={pkg.inventory}
                                onChange={(e) => handleInventoryChange(pkg.id, e.target.value)}
                                style={{ width: '80px' }}
                              />
                            </td>
                            <td>
                              <span className={`badge ${pkg.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                                {pkg.status}
                              </span>
                            </td>
                            <td>
                              <div className="d-flex">
                                <Button 
                                  as={Link} 
                                  to={`/admin/packages/${pkg.id}`} 
                                  variant="outline-primary" 
                                  size="sm" 
                                  className="me-2"
                                >
                                  <FaEye />
                                </Button>
                                <Button 
                                  as={Link} 
                                  to={`/admin/packages/${pkg.id}/edit`} 
                                  variant="outline-secondary" 
                                  size="sm" 
                                  className="me-2"
                                >
                                  <FaEdit />
                                </Button>
                                <Button 
                                  variant="outline-danger" 
                                  size="sm"
                                  onClick={() => {
                                    setPackageToDelete(pkg);
                                    setShowDeleteModal(true);
                                  }}
                                >
                                  <FaTrash />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="8" className="text-center py-4">
                            No packages found matching your filters.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the package "{packageToDelete?.name}"? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeletePackage}>
            Delete Package
          </Button>
        </Modal.Footer>
      </Modal>
    </AdminLayout>
  );
};

export default PackageManagement;