import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button2 from '../Button2';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Button2',
    component: Button2,
} as ComponentMeta<typeof Button2>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button2> = (args) => <Button2 {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    label: 'Hello world!',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
    label: 'Click me!',
};