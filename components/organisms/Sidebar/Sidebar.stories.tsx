import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sidebar from './Sidebar';

export default {
  title: 'Component/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);
export const Default = Template.bind({});
