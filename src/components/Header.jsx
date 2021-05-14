import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Headeritems from '../components/Headeritems';

const Header = () => {
  const [manuDropdown, setManuDropdown] = useState(false);
  const navToggler = () => {
    setManuDropdown(manuDropdown === false ? true : false);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal p-5 bg-green-800 bg-opacity-25 mb-10">
      <div className="flex items-center flex-no-shrink text-gray-600 mr-6">
        {/* <svg
          className="h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg> */}
        <span className="font-semibold text-xl tracking-tight">Chalobon</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={navToggler}
          className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
        >
          <svg
            className="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          manuDropdown == false
            ? 'hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto'
            : 'w-full block flex-grow lg:flex lg:items-center lg:w-auto'
        }
      >
        <div className="text-sm lg:flex-grow">
          <nav>
            <NavLink
              onClick={navToggler}
              exact
              to="/"
              activeStyle={{
                color: 'white',
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-gray-600"
            >
              Home
            </NavLink>

            <NavLink
              onClick={navToggler}
              to="/about"
              activeStyle={{
                color: 'white',
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-gray-600"
            >
              About
            </NavLink>
            <NavLink
              onClick={navToggler}
              to="/education"
              activeStyle={{
                color: 'white',
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-gray-600"
            >
              Education
            </NavLink>
            <NavLink
              onClick={navToggler}
              to="/skill"
              activeStyle={{
                color: 'white',
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-gray-600"
            >
              Skill
            </NavLink>
          </nav>
        </div>
        {/* <div>
          <a
            href="https://www.youtube.com/watch?v=VuGeHsSRWwo"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 hover:text-indigo-300"
          >
            Downloads
          </a>
        </div> */}
      </div>
    </nav>
  );
};

Header.propTypes = {};

export default Header;
