import React from "react";
import { ChartPieItem } from './ChartPieItem';

export default {
    title: 'Components/ChartPieItem',
    component: ChartPieItem,
}



const Template = (args) => <ChartPieItem {...args} />


export const Default = Template.bind({})
Default.args = {
    name: "Rust",
    color: "#8A2BE2",
    percentage: "25%",
}
