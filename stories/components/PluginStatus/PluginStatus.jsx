import React from "react";
import "../../globals.css";
import "./PluginStatus.css";

import Checked from "../../assets/checked.svg";

const PluginStatus = ({ classContainer, title, text, date, iconClass }) => (
    <div className={ classContainer }>
        <span className={ iconClass }> 
            <img src={ Checked } alt="checked icon" /> 
        </span>

        <div>
            <h3>{ title }</h3>
            <p>{ text }</p>
            <p>{ date }</p>
        </div>
    </div>
);

export default PluginStatus;