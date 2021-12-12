import React from "react";
import PropTypes from "prop-types";



const ButtonCTA = ({ name }) => (
    <button className="cta">
        {name}
    </button>
);

export default ButtonCTA;

ButtonCTA.propTypes = {
    name: PropTypes.string,
}