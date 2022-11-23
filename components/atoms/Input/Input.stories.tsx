import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './index';
import { Envelope } from 'phosphor-react';
export default {
  title: 'Component/Header',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  icon: <Envelope />,
  title: 'Email',
  placeholder: 'Your email...',
  id: 'email',
  name: 'email',
  variation: '--sm',
  onChange: () => {},
};
