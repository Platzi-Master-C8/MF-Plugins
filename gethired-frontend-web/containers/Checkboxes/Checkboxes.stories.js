import React from "react";
import Checkboxes from "./Checkboxes";

export default {
    title: "Containers/Checkboxes section",
    component: Checkboxes,
}

const Template = args => <Checkboxes {...args} />;

const Default = Template.bind({});
Default.args = {
    title: "Data to show",
    props: {
        name: "Lenguages",
        checked: true,
    }
}

export { Default };