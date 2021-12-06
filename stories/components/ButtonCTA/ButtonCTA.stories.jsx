// import React from "react";
import ButtonCTA from "./ButtonCTA";

export default {
    title: "Components/Button CTA",
    component: ButtonCTA,
}


const Template = args => <ButtonCTA {...args}/>;

const Default = Template.bind({});
Default.args = {
    name: "Install Now!",
};

export { Default };