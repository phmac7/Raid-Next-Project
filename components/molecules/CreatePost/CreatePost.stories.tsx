import { Meta, StoryObj } from '@storybook/react';
import CreatePost from './CreatePost';
import { CreatePostType } from '@/models/components';

export default {
  title: 'Component/CreatePost',
  component: CreatePost,
} as Meta<CreatePostType>;

export const Default: StoryObj<CreatePostType> = {};
