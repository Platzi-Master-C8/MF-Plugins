import React from "react";
import { ChartPie } from './ChartPie';

export default {
    title: 'Containers/ChartPie',
    component: ChartPie,
}



const Template = (args) => <ChartPie {...args} />


export const Default = Template.bind({})
Default.args = {
    loading: false,

}
