import React from 'react';
import PropTypes from 'prop-types';
import ReactTypingEffect from 'react-typing-effect';
import profile1 from '../img/profile1.jpg';
import Social from '../components/Social';

const Home = (props) => {
  return (
    <div className="text-center m-5 flex justify-center items-center">
      <div className="block mb-30">
        <img
          className="mx-auto w-60 h-60 rounded-full mb-10 mt-10"
          src={profile1}
        />

        <ReactTypingEffect
          text={['I am Chalobon', 'I am a Front-End Developer']}
          speed={70}
          eraseDelay={200}
          className="typingeffect text-2xl"
        />
        <Social />
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
