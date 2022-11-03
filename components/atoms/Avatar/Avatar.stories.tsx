import { Meta, StoryObj } from '@storybook/react';
import AvatarInput from './Avatar';
import styles from './avatarInput.module.scss';
import { AvatarType } from '@/models/components';

export default {
  title: 'Component/AvatarInput',
  component: AvatarInput,
  args: {
    avatar:
      'https://s2.glbimg.com/U7TAp42IcAp-o-2tTFI5HBJbUvA=/0x0:1024x1024/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/t/P/kBI0LWRUemtdGTdIi9iQ/mussumdivulgacao.jpg',
    id: 'createPost',
  },
  argTypes: {
    avatar: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={styles['avatarInput__decorator']}>
        <Story />
      </div>
    ),
  ],
} as Meta<AvatarType>;

export const Default: StoryObj<AvatarType> = {};
