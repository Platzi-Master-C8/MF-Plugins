import React from "react";
import "./Checkbox.css";

const Checkbox = ({ divClass, name, checked, stylizedClass }) => (
    <div className={divClass}>
        <label>
            { name }
            <input type="checkbox" checked={ checked } />
            <span className={ stylizedClass }></span>
        </label>
    </div>
);

export default Checkbox;