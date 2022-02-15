import React from "react"
import Navbar from "./Navbar";

const Layout = ({ userName, children }) => (
  <React.Fragment>
    <Navbar userName={userName} />
    { children }
  </React.Fragment>
)

export default Layout;