import React from "react";
import PropTypes from "prop-types";
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

Checkbox.propTypes = {
    name: PropTypes.string,
    checked: PropTypes.bool,
}