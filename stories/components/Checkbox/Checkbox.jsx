import React from "react";
import "./Checkbox.css";

const Checkbox = ({ divClass, id, name, checked }) => (
    <div className={divClass}>
        <label htmlFor={ id }>
            { name }
        </label>
        <input type="checkbox" id={ id } checked={ checked } />
    </div>
);

export default Checkbox;