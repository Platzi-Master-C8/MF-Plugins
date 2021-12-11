import React from "react";
// import './ChartButton.css'

export const ChartButton = () => {

    return (
        <>
            <select className="ChartButton" name="time">
                <option className="ChartButton-option" value="Last Month">Last Month</option>
                <option className="ChartButton-option" value="Last Week">Last Week</option>
                <option className="ChartButton-option" value="Last Day">Last Day</option>
            </select>
        </>
    )
}