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
    errorInGetLogin: false,
    userName: "Jito",
    currentToken: "superhyperextremefuckingtoken"
}

export const Loading = Template.bind({})
Loading.args = {
    loading: true,
    errorInGetLogin: false,
}

export const LoadingGetToken = Template.bind({})
LoadingGetToken.args = {
    loading: false,
    LoadingGetToken: true,
    errorInGetLogin: false,
    userName: "Jito",
    currentToken: "superhyperextremefuckingtoken"
}

export const ErrorInGetLogin = Template.bind({})
ErrorInGetLogin.args = {
    ...Default.args,
    loading: false,
    errorInGetLogin: true
} 
