import React from 'react';
import { ChartPieItem } from '../../components/ChartPieItem/ChartPieItem';



export const ChartPieListItem = ({  usedLanguages, colors }) => {

    return (
        <>
            <ul className="ChartPieListItem">
                { 
                    usedLanguages ? 
                    usedLanguages.map((data, index) => (
                    <ChartPieItem 
                        key={data.lan} 
                        name={data.lan} 
                        percentage={data.time} 
                        color={colors[index]}/>
                    )) : 
                    null
                }  
            </ul>
        </>
    )
}