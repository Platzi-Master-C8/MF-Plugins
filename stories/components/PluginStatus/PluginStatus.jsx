import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

import "../../globals.css";
import "./PluginStatus.css";

import Checked from "../../assets/checked.svg";

const PluginStatus = ({ title, text, date, loading }) => (
    <React.Fragment>
        {
            loading?
            <div className="loading2">
                <Skeleton containerClassName="loading-skeletonContainer" className="skeleton-item"/>
            </div>
            :
            null
        }
        {
            !loading ?
            <div className="plugin-status">
                <span className="plugin-status__icon"> 
                    <img src={ Checked } alt="checked icon" /> 
                </span>

                <div>
                    <h3>{ title }</h3>
                    <p>{ text }</p>
                    <p>{ date }</p>
                </div>
            </div>:
            null
        }
    </React.Fragment>
);

export default PluginStatus;

PluginStatus.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
}