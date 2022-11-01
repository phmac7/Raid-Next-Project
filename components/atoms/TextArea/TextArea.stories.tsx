import { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';
import { TextAreaType } from '@/models/components';

export default {
  title: 'Component/TextArea',
  component: TextArea,
  args: {
    id: 'textArea',
    placeholder: "What's is happening",
    label: 'Post Message',
  },
} as Meta<TextAreaType>;

export const Default: StoryObj = {};
