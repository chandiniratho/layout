import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Services from './components/Services';
import Onepage from './components/Onepage';
import Header from './components/Header';
import Contact from './components/Contact';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/:id' element={<Onepage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/header' element={<Header />} />
        <Route path='/contact' element={<Contact />} /> {/* Contact route added */}
      </Routes>
    </Router>
  );
}

export default App;
