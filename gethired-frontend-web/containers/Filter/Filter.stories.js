import React from "react";
import Filter from "./Filter";

export default {
    title: "Containers/Filter",
    component: Filter,
}

const Template = args => <Filter {...args} />;

const Default = Template.bind({});

const Loading = Template.bind({});
Loading.args = {
    loading: true,
}

export { Default, Loading };