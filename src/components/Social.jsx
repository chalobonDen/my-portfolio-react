import React from 'react';
import PropTypes from 'prop-types';

const Social = (props) => {
  return (
    <div className="social space-x-4 mt-10 text-xl">
      <a href="https://github.com/chalobonDen">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.instagram.com/jayjay_clb/">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/sujunemo">
        <i className="fab fa-facebook"></i>
      </a>
    </div>
  );
};

Social.propTypes = {};

export default Social;
