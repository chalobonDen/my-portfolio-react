import React from 'react';
import PropTypes from 'prop-types';
import profile2 from '../img/profile2.jpg';
import Social from '../components/Social';
import AboutMe from '../components/AboutMe';
const About = (props) => {
  return (
    <div className="m-5 flex justify-center items-center">
      <div className="block">
        <img
          className="mx-auto object-cover w-60 h-60 rounded-full mb-10 mt-10"
          src={profile2}
        />
        <AboutMe />
        <Social />
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
