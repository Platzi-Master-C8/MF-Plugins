import React from "react";

import "./ButtonCTA.css";


const ButtonCTA = ({ name, className }) => (
    <button className={ className }>
        {name}
    </button>
);

export default ButtonCTA;