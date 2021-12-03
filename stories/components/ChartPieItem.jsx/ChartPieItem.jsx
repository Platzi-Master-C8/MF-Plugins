import React from 'react';
import './ChartPieItem.css';


export const ChartPieItem = ({ name, color }) => {

    return (
        <>
            <li className="ChartPieItem">
                <div className="ChartPieItem-color" 
                style={{background : color}}
                ></div>
                <span className="ChartPieItem-text">{name}</span>    
            </li>
        </>
    )
}