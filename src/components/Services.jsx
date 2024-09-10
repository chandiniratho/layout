import React from 'react';
import Header from './Header'
import './Services.css';
import img11 from '../Assets/img11.jpeg'
import img12 from '../Assets/img12.jpeg'
import img13 from '../Assets/img13.jpeg'
import img14 from '../Assets/img14.jpeg'
import img15 from '../Assets/img15.jpeg'
import img16 from '../Assets/img16.jpeg'

const services = [
  {
    title: 'Facial Treatment',
    description: 'A luxurious facial treatment to rejuvenate your skin and give it a healthy glow.',
    "image":img11,
  },
  {
    title: 'Acne Treatment',
    description: 'Targeted treatment to reduce acne and improve your skin’s appearance.',
    "image":img12,
  },
  {
    title: 'Anti-Aging Treatment',
    description: 'Combat the signs of aging with our advanced anti-aging treatment.',
    "image":img13,
  },
  {
    title: 'Hydrating Treatment',
    description: 'Deeply hydrate and nourish your skin for a radiant, glowing complexion.',
    "image":img14,
  },
  {
    title: 'Skin Brightening',
    description: 'Enhance your skin’s natural radiance with our brightening treatments.',
    "image":img15,
  },
  {
    title: 'Chemical peel',
    description: 'Combat the signs of chemicals with our advanced Chemical peel treatment.',
    "image":img16,
  },
];

const Services = () => {
  return (
    <div>
         <Header />
    <div className="container">
   
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-5" key={index}>
            <div className="card mb-5">
              <img src={service.image} className="card-img-top" alt={service.title} />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Services;