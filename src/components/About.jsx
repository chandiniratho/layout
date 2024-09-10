
import React from 'react';
import './AboutUs.css';
import Header from './Header';
import img17 from '../Assets/img17.jpeg'
import img18 from '../Assets/img18.jpeg'
import img19 from '../Assets/img19.jpeg'

const teamMembers = [
  {
    name: 'Dr. Jane Doe',
    title: 'Dermatologist',
    description: 'With over 15 years of experience, Dr. Doe specializes in skincare treatments and product development.',
    image: img17,
  },
  {
    name: 'John Smith',
    title: 'Cosmetic Chemist',
    description: 'John is our lead cosmetic chemist, formulating innovative skincare products that are safe and effective.',
    image: img18,
  },
  {
    name: 'Emily Johnson',
    title: 'Esthetician',
    description: 'Emily provides expert advice on skincare routines and helps in developing customized solutions for our clients.',
    image: img19,
  },
];

const AboutUs = () => {
  return (
    <div className='hello'>
      <Header />
      <div className="about-us container">
        <section className="about-intro">
          <h1>About Us</h1>
          <p>
            Welcome to our skincare brand! We are dedicated to providing the best in natural skincare products.
          </p>
        </section>
        <section className="meet-our-team">
          <h2>Meet Our Professional Team</h2>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-md-3" key={index}>
                <div className="card mb-3">
                  <img src={member.image} className="card-img-top" alt={member.name} />
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{member.title}</h6>
                    <p className="card-text">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
