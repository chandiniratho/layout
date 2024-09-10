
import React from 'react'
import { Link } from 'react-router-dom'
import AcUnitIcon from '@mui/icons-material/AcUnit';

function Home() {
  return (
    <div>
      <h1><AcUnitIcon />This Is Home Component</h1>
      <Link to='/contact'><button className='btn btn-primary'>Contact Us</button></Link>
    </div>
  )
}

export default Home