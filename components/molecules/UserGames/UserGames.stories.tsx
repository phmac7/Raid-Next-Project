import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserGames } from '@/components/molecules';
export default {
    title: 'Component/UserGames',
    component: UserGames,
} as ComponentMeta<typeof UserGames>;

const Template: ComponentStory<typeof UserGames> = (args) => <UserGames {...args} />;

export const Default = Template.bind({});
Default.args = {};
