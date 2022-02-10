import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Logo from '/public/logo-app.png';

const Navbar = ({}) => {
  return (
    <header className="Navbar__wrapper">
      <nav className='Navbar__content'>
        <article className="Navbar__logo">
          <Image src={Logo} alt="" />

          <h2>CODE TRACKER</h2>
        </article>

        <div className="navbar__profile">
          <h2>J</h2>
        </div>
      </nav>
    </header>
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