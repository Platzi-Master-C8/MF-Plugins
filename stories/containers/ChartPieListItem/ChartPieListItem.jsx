import React from 'react';
import './ChartPieListItem.css';


export const ChartPieListItem = () => {

    return (
        <>
            <ul className="ChartPieListItem">
                <li className="ChartPieItem-item">
                    <div className="ChartPieItem-color"></div>
                    <span className="ChartPieItem-text">item</span>    
                </li>
                <li className="ChartPieItem-item">
                    <div className="ChartPieItem-color"></div>
                    <span className="ChartPieItem-text">item</span>    
                </li>
                <li className="ChartPieItem-item">
                    <div className="ChartPieItem-color"></div>
                    <span className="ChartPieItem-text">item</span>    
                </li>
            </ul>
        </>
    )
}