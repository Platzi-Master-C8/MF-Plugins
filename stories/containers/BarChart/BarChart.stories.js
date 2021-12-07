import React from "react";
import { BarChart } from "./BarChart";

export default {
    title: "Containers/Bar Chart",
    component: BarChart,
}

const Template = args => <BarChart {...args} />;

export const Default = Template.bind({});
Default.args = {
    loading: false,
}

export const Loading = Template.bind({});
Loading.args = {
    loading: true
}