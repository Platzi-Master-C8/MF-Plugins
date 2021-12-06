import React from "react";
import "./Checkbox.css";

const Checkbox = ({ name, checked }) => (
    <div className="checkbox-container">
        <label>
            { name }
            <input type="checkbox" checked={ checked } />
            <span className="styledCheckbx"></span>
        </label>
    </div>
);

export default Checkbox;