import React from "react";
import Repository from "./Repository";

export default {
    title: "Containers/Repository",
    component: Repository,
}

const Template = args => <Repository {...args} />;

const Default = Template.bind({});
Default.args = {
    projectName: "MF-Plugins",
    content: "The public repository for Frontends at C8 organization. The name stands our for 'Micro Frontends'",
}

export { Default };