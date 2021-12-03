import React from "react";
import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
}



const Template = (args) => <Button {...args} />


export const Default = Template.bind({})
Default.args = {
    name: "Get New Token",
    onClick: function(){console.log('give me a token')}
}
