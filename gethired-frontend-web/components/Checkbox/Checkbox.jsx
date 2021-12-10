import React from "react";
import PropTypes from "prop-types";
// import "./Checkbox.css";

const Checkbox = ({ name, checked }) => (
    <div className="checkbox">
        <label>
            { name }
            <div className="checkbox-container">
                <input type="checkbox" checked={ checked } />
                <span className="styledCheckbx"></span>
            </div>
        </label>
    </div>
);

export default Checkbox;

Checkbox.propTypes = {
    name: PropTypes.string,
    checked: PropTypes.bool,
}