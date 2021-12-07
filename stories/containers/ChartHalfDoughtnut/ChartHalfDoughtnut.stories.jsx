import React from 'react';
import { ChartHalfDoughtnut } from './ChartHalfDoughtnut';

export default {
  title: 'Containers/ChartHalfDoughtnut',
  component: ChartHalfDoughtnut,
};

const Template = (args) => <ChartHalfDoughtnut {...args} />;

export const Default = Template.bind({});
Default.args = {};

// export const Loading = Template.bind({});
// Loading.args = {
//   loading: true,
//   errorInGetLogin: false,
// };

// export const LoadingGetToken = Template.bind({});
// LoadingGetToken.args = {
//   loading: false,
//   LoadingGetToken: true,
//   errorInGetLogin: false,
//   userName: 'Jito',
//   currentToken: 'superhyperextremefuckingtoken',
// };

// export const ErrorInGetLogin = Template.bind({});
// ErrorInGetLogin.args = {
//   ...Default.args,
//   loading: false,
//   errorInGetLogin: true,
// };
