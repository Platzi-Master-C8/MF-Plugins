import React from "react";
import PropTypes from "prop-types";

import "./ButtonCTA.css";


const ButtonCTA = ({ name }) => (
    <button className="cta">
        {name}
    </button>
);

export default ButtonCTA;

ButtonCTA.propTypes = {
    name: PropTypes.string,
}