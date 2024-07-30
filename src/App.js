import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <main>
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
