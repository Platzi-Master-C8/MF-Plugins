import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import Image from 'next/image';
import Checked from "../public/checked.svg";



const PluginStatus = ({ date }) => (
    <div className="plugin-status">
        <span className="plugin-status__icon"> 
            <Image
                alt=""
                src={Checked} 
                width="20"
                height="20"
            /> 
        </span>

        <div className="plugin-description">
            <h3>Plugin status</h3>
            <div>
                {date ? (
                    <React.Fragment>
                        <p>Last tracking: </p>
                        <p>{ date }</p>
                    </React.Fragment>
                ) : (
                    <p>Plugin has not been activated</p>
                )}
            </div>
        </div>
    </div>
);

export default PluginStatus;

PluginStatus.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
}