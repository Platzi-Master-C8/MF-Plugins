import React from 'react';
import Image from 'next/image';
import Link from "next/link"
import Logo from '/public/logo-app.png';
import ArrowDown from '/public/downarrow.svg';
// react hooks
import { useRouter } from 'next/router';
import { Button } from './Button/Button';

const Navbar = ({userName}) => {
  const [isDown, setIsDown] = React.useState(false)
  const toggleDropdown = () => setIsDown(prev => !prev)

  return (
    <header className="Navbar Navbar__wrapper">
      <nav className='Navbar__content'>
        <Link href="/">
          <a>
            <article className="Navbar__logo">
              <Image src={Logo} alt="" />

              <h2>CODE TRACKER</h2>
            </article>
          </a>
        </Link>
        {useRouter().pathname === "/" ?
          <Button name="Log in" isLink={true} />
        : userName && 
          <section className='Navbar__info-section'>
            <div className="navbar__profile">
              <h2>{userName[0]}</h2>
            </div>

            <button onClick={toggleDropdown}>
              <Image src={ArrowDown} alt=""/>
            </button>

            {isDown && 
              <div className='Navbar__dropdown'>
                <Link href="/settings">
                  <a onClick={toggleDropdown}>Settings</a>
                </Link>
                <Link href="/api/auth/logout">
                  <a onClick={toggleDropdown}>Log out</a>
                </Link>
              </div>
            }
          </section>
        }
      </nav>
    </header>
  );
};

export default Navbar;