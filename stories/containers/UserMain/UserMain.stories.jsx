import React from "react";
import { UserMain } from './UserMain';

export default {
    title: 'Containers/UserMain',
    component: UserMain,
}



const Template = (args) => <UserMain {...args} />


export const Default = Template.bind({})
Default.args = {
    loading: false,
    error: false,
    name: "Jito",
    currentToken: "superhyperextremefuckingtoken"
}

export const Loading = Template.bind({})
Loading.args = {
    loading: true,
    error: false
}

export const Error = Template.bind({})
Error.args = {
    loading: false,
    error: true
} 
