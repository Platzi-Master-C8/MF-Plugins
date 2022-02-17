import React from "react";
import Link from "next/link";
import { Button } from "../../components/Button/Button";
import Image from 'next/image';
import visible from "../../public/visible.svg";
import hidden from '/public/hidden.svg';
import Head from "next/head";
// auth
import { useUser } from '@auth0/nextjs-auth0';

export default function Settings({ state }){
  const [isVisible, setIsVisible] = React.useState(false)
  const handleClick = () => setIsVisible(prev => !prev)
  const {user, isLoading} = useUser()

  if(state){
    return(
      <section className="wrapper Profile">
        <Head>
          <title>Code tracker | Settings</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <section className="Profile__container">
          <h2>Settings</h2>

          <ul>
            <li>
              <Link href="#Profile">
                <a>Profile</a>
              </Link>
            </li>
            <li>
              <Link href="#Security">
                <a>Security</a>
              </Link>
            </li>
          </ul>
        </section>
  
        <section className="Profile__container">
          <section className="Profile__section" id="Profile">
            <h2>#Profile</h2>
            <label>Profile Picture</label>
            <Button name="Add a picture"/>
    
            <div>
              <label htmlFor="firstName">Full Name</label>
              <input type="text" id="firstName" defaultValue={!isLoading && user.name} />
            </div>
    
            <label htmlFor="">Email</label>
            <input type="email" defaultValue={!isLoading && user.email} />
    
          </section>
    
          <section className="Profile__section" id="Security">
            <h2>#Security</h2>
            <label htmlFor="">Current Token</label>
            <div className="Profile__token-container">
              <input type={isVisible ? "text" : "password"} readOnly defaultValue={state.token} />
              <button onClick={handleClick}>
                <Image src={isVisible ? visible : hidden} alt="" />
              </button>
            </div>
    
            <Button name="Get new token"/>       
          </section>
        </section>
      </section>
    )
  }else{
    return(
      <p>Loading...</p>
    )
  }
}