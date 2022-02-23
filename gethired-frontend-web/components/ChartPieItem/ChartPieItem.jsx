import React from 'react';

export const ChartPieItem = ({ name, color, percentage }) => {
  return (
    <li className="ChartPieItem">
      <span className="ChartPieItem-color" 
      style={{background : color}}
      ></span>
      <p>{name} <span className="percentage">({ percentage })</span></p>
    </li>
  )
}