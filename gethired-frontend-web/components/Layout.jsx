import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <React.Fragment>
    <Navbar />
    { children }
  </React.Fragment>
)

export default Layout;