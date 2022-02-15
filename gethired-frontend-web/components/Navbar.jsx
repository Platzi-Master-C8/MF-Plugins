import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from "next/link"
import Logo from '/public/logo-app.png';

const Navbar = ({userName}) => {
  return (
    <header className="Navbar__wrapper">
      <nav className='Navbar__content'>
        <Link href="/">
          <a>
            <article className="Navbar__logo">
              <Image src={Logo} alt="" />

              <h2>CODE TRACKER</h2>
            </article>
          </a>
        </Link>

        {userName && 
          <div className="navbar__profile">
            <Link href="/Profile">
              <a>{userName[0]}</a>
            </Link>
          </div>
        }
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