import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Services from './components/Services';
import Onepage from './components/Onepage';
import Header from './components/Header';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename="/layout"> {/* Set basename to the path of your GitHub Pages site */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/:id' element={<Onepage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/header' element={<Header />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
