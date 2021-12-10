import React from 'react';
import NavbarItem from './NavbarItem';

export default {
  title: 'Components/Navbar Item',
  component: NavbarItem,
  argTypes: {
    section: {
      control: {
        type: 'select',
        options: [
          'Messages',
          'Notifications',
          'Forum',
          'Jobs',
          'Blogpost',
          'My Website',
        ],
      },
    },
  },
};

const Template = (args) => <NavbarItem {...args} />;

const Default = Template.bind({});
Default.args = {};

export { Default };
