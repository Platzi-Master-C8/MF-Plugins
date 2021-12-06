import React from "react";

import "./ButtonCTA.css";


const ButtonCTA = ({ name }) => (
    <button className="cta">
        {name}
    </button>
);

export default ButtonCTA;