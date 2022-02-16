import React from "react";
import { Button } from "../../components/Button/Button";
import Image from 'next/image';
import visible from "../../public/visible.svg";
import hidden from '/public/hidden.svg';

export default function Profile({ state }){
  const [isVisible, setIsVisible] = React.useState(false)
  const handleClick = () => setIsVisible(prev => !prev)

  if(state){
    return(
      <section className="wrapper Profile">
  
        <section className="Profile__section">
          <h2>#Profile</h2>
          <label>Profile Picture</label>
          <Button name="Add a picture"/>
  
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" defaultValue={state.name} />
  
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" />
          </div>
  
          <label htmlFor="">Email</label>
          <input type="email" defaultValue={state.email} />
  
        </section>
  
        <section className="Profile__section">
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
    )
  }else{
    return(
      <p>Loading...</p>
    )
  }
}