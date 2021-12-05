import React from "react";
import PluginStatus from "./PluginStatus";

export default {
    title: "Components/Plugin Status",
    component: PluginStatus
}

const Template = args => <PluginStatus {...args} />;

const Default = Template.bind({});
Default.args = {
    classContainer: "plugin-status",
    date: new Date(2021, 11, 4, 5).toLocaleString("en-US", {weekday: "long", hour: "numeric"}),
    title: "Plugin Status",
    text: "Last tracking:",
    iconClass: "plugin-status__icon",
}

export { Default };