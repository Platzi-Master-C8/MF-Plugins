import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import Logo from '../../assets/logo-app.png';
import NavBarItem from '../../components/NavbarItem/NavbarItem';

const Navbar = ({}) => {
  return (
    <>
      <div className="navbar--container">
        <div className="navbar__logo">
          <img src={Logo} />
        </div>
        <div className="navbar__menu">
          <NavBarItem section="Messages" />
          <NavBarItem section="Notifications" />
          <NavBarItem section="Forum" />
          <NavBarItem section="Jobs" />
          <NavBarItem section="Blogpost" />
          <NavBarItem section="My Website" />
        </div>
        <div className="navbar__ham--menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navbar__profile">R</div>
      </div>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  // loading: PropTypes.bool,
  // system: PropTypes.oneOf(['Linux', 'Windows', 'Mac Os']),
  // system: PropTypes.string,
  // systemLogo: PropTypes.string,
  // systemLogo: PropTypes.string,
  //   checked: PropTypes.bool,
};
