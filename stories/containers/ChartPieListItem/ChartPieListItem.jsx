import React from 'react';
import { ChartPieItem } from '../../components/ChartPieItem/ChartPieItem';

import "../../globals.css";
import './ChartPieListItem.css';


const args = {
    name: "Rust",
    percentage: "45%",
}

export const ChartPieListItem = () => {

    return (
        <>
            <ul className="ChartPieListItem">
                <ChartPieItem {...args} />
                <ChartPieItem {...args} />
                <ChartPieItem {...args} />
            </ul>
        </>
    )
}