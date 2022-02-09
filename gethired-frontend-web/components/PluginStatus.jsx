import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import Image from 'next/image';
import Checked from "../public/checked.svg";



const PluginStatus = ({ date, loading }) => (
    <React.Fragment>
        {
            loading ?
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
                    <Image 
                        src={Checked} 
                        width="20"
                        height="20"
                    /> 
                </span>

                <div className="plugin-description">
                    <h3>Plugin status</h3>
                    <div>
                        <p>Last tracking: </p>
                        <p>{ date }</p>
                    </div>
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