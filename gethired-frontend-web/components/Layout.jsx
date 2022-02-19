import React from "react"
import Navbar from "./Navbar";
import { useUser } from '@auth0/nextjs-auth0';

const Layout = ({ children }) => {
  const {user, isLoading} = useUser()
  let userName = "";
  if(!isLoading){
    userName = user ? user.name : "";
  }


  return(
    <React.Fragment>
      <Navbar userName={userName} />
      { children }
    </React.Fragment>
  )
}

export default Layout;