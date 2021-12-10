import React from 'react';
import OperativeSystem from './OperativeSystem';

export default {
  title: 'Containers/OperativeSystem',
  component: OperativeSystem,
  argTypes: {
    system: {
      control: {
        type: 'select',
        options: ['Linux', 'Windows', 'Mac Os'],
      },
    },
  },
};

const Template = (args) => <OperativeSystem {...args} />;

const Default = Template.bind({});
Default.args = {
  system: 'Linux',
};

const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export { Default, Loading };
