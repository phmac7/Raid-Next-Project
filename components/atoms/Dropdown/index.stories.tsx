import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '.';
import { DropdownType } from '@/models/components';

export default {
  title: 'Component/Dropdown',
  component: Dropdown,
  args: {
    id: 'dropDownGames',
    name: 'games',
    options: [
      { text: 'Valorant', value: 'valorant' },
      { text: 'League of legends', value: 'lol' },
    ],
  },
} as Meta<DropdownType>;

export const Default: StoryObj<DropdownType> = {};
