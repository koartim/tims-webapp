import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Blog from './components/blog/Blog';

function App() {

  const [ isNavbarExpanded, setIsNavbarExpanded ] = useState(false);

  const handleToggle = (expanded) => {
    setIsNavbarExpanded(expanded);
  }

  const handleResize = () => {
    if (window.innerWidth > 992) {
      setIsNavbarExpanded(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className='app'>
        <Header onToggle={handleToggle} />
        <main className={isNavbarExpanded ? 'navbar-expanded' : ''}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
