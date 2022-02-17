import React from "react"
import Navbar from "./Navbar";
import { useUser } from '@auth0/nextjs-auth0';

const Layout = ({ userName, children }) => {
  const {user} = useUser()
  return(
    <React.Fragment>
      <Navbar userName={user.name} />
      { children }
    </React.Fragment>
  )
}

export default Layout;