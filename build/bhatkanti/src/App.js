import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Pages
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Activities from './pages/Activities';
import TourDetails from './pages/TourDetails';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;