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
    usedLanguages: [
        {
          name: "JS",
          value: 12.5,
        },
        {
          name: "Rust",
          value: 25,
        },
        {
          name: "php",
          value: 25,
        },
        {
          name: "Java",
          value: 12.5,
        },
        {
          name: "Python",
          value: 25,
        },
    ]
}
