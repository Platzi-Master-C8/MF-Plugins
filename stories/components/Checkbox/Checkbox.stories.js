import React from "react";
import Checkbox from "./Checkbox";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
}

const Template = args => <Checkbox {...args} />;

const Default = Template.bind({});
Default.args = {
    divClass: "checkbox-container",
    id: "checkbx",
    name: "Development time",
    checked: true,
}

export { Default };