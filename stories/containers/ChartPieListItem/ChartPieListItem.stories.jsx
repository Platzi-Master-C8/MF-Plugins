import React from "react";
import { ChartPieListItem } from './ChartPieListItem';

export default {
    title: 'Containers/Chart Pie List Item',
    component: ChartPieListItem,
}



const Template = (args) => <ChartPieListItem {...args} />


export const Default = Template.bind({})
Default.args = {
    loading: false,
    error: false
}


export const Loading = Template.bind({})
Loading.args = {
    loading: true,
    error: false
}

export const Error = Template.bind({})
Error.args = {
    loading: false,
    error: true
}