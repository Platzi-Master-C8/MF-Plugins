import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Logo from '/public/logo-app.png';
import NavBarItem from "./NavBarItem";

const Navbar = ({}) => {
  return (
    <>
      <section className="navbar--container">
        <article className="navbar__logo">
          <Image src={Logo} />
        </article>

        <section className='menu--container'>
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
        </section>
      </section>
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