
import React from 'react'
import Dashboard from './Dashboard'
import Header from './Components/Header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'


function Main() {
  return (
    <div>

        <Router>
            <Header />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/dashboard' element={<Services />} />
            </Routes>
        </Router>

        <Row>
            <Col sm={2}>
                
            </Col>
            <Col sm={10}>
                <Dashboard />
            </Col>
        </Row>

        
    </div>
  )
}

export default Main