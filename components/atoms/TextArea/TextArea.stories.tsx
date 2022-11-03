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
  argTypes: {
    rows: {
      control: {
        type: 'number',
        min: 1,
        max: 10,
        step: 1,
      },
    },
    cols: {
      control: {
        type: 'number',
        min: 1,
        max: 10,
        step: 1,
      },
    },
  },
} as Meta<TextAreaType>;

export const Default: StoryObj<TextAreaType> = {};
