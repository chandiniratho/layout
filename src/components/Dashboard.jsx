import React from 'react';
import Header from './Header';
import { productsData } from '../Data/Products';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function About() {
  return (
    <div>
      <Header />
      <div className='maincard'>
        {productsData.map((item) => {
          return (
            <div className='card' key={item.id}>
              <Link to={`/about/${item.id}`}>
                <img src={item.image} alt="" />
              </Link>
              <p>{`Id: ${item.id}`}</p>
              <p>{`Brand Name: ${item.BrandName}`}</p>
              <p>{`Product Name: ${item.ProductName}`}</p>
              <p>{`Price: ${item.Price}`}</p>
              <button>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;


