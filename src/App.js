import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Blog from './components/blog/Blog';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {

  const [ isNavbarExpanded, setIsNavbarExpanded ] = useState(false);
  const location = useLocation();

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
    <div className='app'>
      <Header onToggle={handleToggle} />
      <main className={isNavbarExpanded ? 'navbar-expanded' : ''}>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300} // Adjust the duration of the transition
            classNames="fade">
            <Routes location={location}>
              <Route path="/" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer />
    </div>
  );
}

export default App;
