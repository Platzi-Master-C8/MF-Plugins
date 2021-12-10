import React from 'react';
import NavbarItem from './NavbarItem';

export default {
  title: 'Components/Navbar Item',
  component: NavbarItem,
  argTypes: {
    section: {
      control: {
        type: 'select',
        options: ['Plug-in', 'Social', 'Extension'],
      },
    },
  },
};

const Template = (args) => <NavbarItem {...args} />;

const Default = Template.bind({});
Default.args = {};

export { Default };
