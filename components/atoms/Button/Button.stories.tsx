import { StoryObj, Meta } from '@storybook/react';
import { Button } from '@/components/atoms';
import { ButtonType } from '@/models/components';

export default {
  title: 'Component/Button',
  component: Button,
} as Meta<ButtonType>;

export const Default: StoryObj<ButtonType> = {};
