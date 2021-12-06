import React from "react";
import Checkbox from "../../components/Checkbox/Checkbox";

import "../../globals.css";
import "./Checkboxes.css";

const Checkboxes = ({ title, props }) => (
    <section className="checkboxes">
        <h2>{ title }</h2>
        <Checkbox {...props}/>
        <Checkbox {...props}/>
        <Checkbox {...props}/>
        <Checkbox {...props}/>
    </section>
);

export default Checkboxes;