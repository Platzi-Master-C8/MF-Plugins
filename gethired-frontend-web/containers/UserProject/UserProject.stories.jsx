import React from "react";
import { UserProject } from './UserProject';

export default {
    title: 'Containers/UserProject',
    component: UserProject,
}



const Template = (args) => <UserProject {...args} />


export const Default = Template.bind({})
Default.args = {
    loading: false,
    projectName: "Project name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate lorem in pellentesque imperdiet. Sed euismod vel tortor at tincidunt.",
    gitHubRepo: "link"
}

export const Loading = Template.bind({})
Loading.args = {
    loading: true,
}
