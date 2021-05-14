import React from 'react';
import { Link } from 'react-router-dom';

const Headeritems = (activeToggler, item, toLink) => {
  return (
    <div>
      <Link to={toLink}>{item}</Link>
    </div>
  );
};

Headeritems.propTypes = {};

export default Headeritems;
