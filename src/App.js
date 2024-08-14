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
  const [csrfToken, setCsrfToken] = useState(null);
  const [csrfHeader, setCsrfHeader] = useState(null);

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/csrf-token', {
          credentials: 'include', // need this to include the xsrf token in the request
        });
        const data = await response.json();
        setCsrfToken(data.token);
        setCsrfHeader(data.headerName);
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    };

    fetchCsrfToken();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
              <Route path="/contact" element={<Contact csrfToken={csrfToken} csrfHeader={csrfHeader}/>} />
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
