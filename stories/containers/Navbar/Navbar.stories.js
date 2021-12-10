import React from 'react';
import Navbar from './Navbar';

export default {
  title: 'Containers/Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  // system: 'Linux',
};

// const Loading = Template.bind({});
// Loading.args = {
//   loading: true,
// };

// export { Default, Loading };
