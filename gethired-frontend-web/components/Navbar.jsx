import React from 'react';
// next hooks
import Image from 'next/image';
import Link from "next/link"
import { useRouter } from 'next/router';
// icons/imgs
import Logo from '/public/logo-app.png';
import ArrowDown from '/public/downarrow.svg';
import Gear from '/public/settings.svg';
import Logout from '/public/logout.svg';
// components
import { Button } from './Button/Button';
// auth
import { useUser } from '@auth0/nextjs-auth0';

const Navbar = ({userName}) => {
  const [isDown, setIsDown] = React.useState(false)
  const toggleDropdown = () => setIsDown(prev => !prev)
  const { user, isLoading } = useUser()

  return (
    <header className="Navbar Navbar__wrapper">
      <nav className='Navbar__content'>
        <Link href="/home">
          <a>
            <article className="Navbar__logo">
              <Image src={Logo} alt="" />

              <h2>CODE TRACKER</h2>
            </article>
          </a>
        </Link>
        {useRouter().pathname === "/" ?
          <Button name="Log in" isLink={true} reference="/api/auth/login" />
        : userName && 
          <section className='Navbar__info-section'>
            {user ?
              <Image src={user.picture} width={40} height={40} alt="" />
             
            :
              <div className="navbar__profile">
                <h2>{userName[0]}</h2>
              </div>
            }

            <button onClick={toggleDropdown}>
              <Image src={ArrowDown} alt=""/>
            </button>

            {isDown && 
              <div className='Navbar__dropdown'>
                <Link href="/settings" passHref>
                  <div className='Navbar__dropdown-item'>
                    <span className='Navbar__dropdown-icon'>
                      <Image src={Gear} alt="" width={20} height={20} />
                    </span>
                    <a onClick={toggleDropdown}>Settings</a>
                  </div>
                </Link>
                <Link href="/api/auth/logout" passHref>
                  <div className='Navbar__dropdown-item'>
                    <span className='Navbar__dropdown-icon'>
                      <Image src={Logout} alt="" width={20}/>
                    </span>
                    <a onClick={toggleDropdown}>Log out</a>
                  </div>
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