import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserGameCard } from '@/components/molecules';
export default {
    title: 'Component/UserGameCard',
    component: UserGameCard,
} as ComponentMeta<typeof UserGameCard>;

const Template: ComponentStory<typeof UserGameCard> = (args) => <UserGameCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    elo:'Silver',
    eloImg: '',
    gameImg: '',
    gameName: 'League of Legends',
    role: 'Top Lane',
    roleImg: ''
};
