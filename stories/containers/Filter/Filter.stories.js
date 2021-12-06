import React from "react";
import Filter from "./Filter";

export default {
    title: "Containers/Filter",
    component: Filter,
}

const Template = args => <Filter {...args} />;

const Default = Template.bind({});

export { Default };