import React from 'react';
import {Greeting} from "component1";

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Greeting',
  component: Greeting,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Greeting {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Greeting',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Greeting',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Greeting',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Greeting',
};
