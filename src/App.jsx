import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Adjust the import path if necessary
import { Hero } from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Banner2 from './components/Banner/Banner2';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <main className='overflow-x-hidden bg-white text-dark'>
        <Navbar />
        <Content />
      </main>
    </Router>
  );
};

// Create a separate component to handle content rendering based on the route
const Content = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <>
          <Hero />
          <Services />
          <Banner />
          <Subscribe />
          <Banner2 />
        </>
      ) : (
        // Render other components based on different routes
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<Banner />} />
          <Route path="/contact" element={<Subscribe />} />
          <Route path="/ourteam" element={<Banner2 />} />
          {/* Add more routes as needed */}
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;