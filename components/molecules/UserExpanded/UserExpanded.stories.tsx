import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserExpanded } from '@/components/molecules';
export default {
    title: 'Component/UserExpanded',
    component: UserExpanded,
} as ComponentMeta<typeof UserExpanded>;

const Template: ComponentStory<typeof UserExpanded> = (args) => <UserExpanded {...args} />;

export const Default = Template.bind({});
Default.args = {
    userName: 'Mussum Cacilds',
    picture:
        'https://s2.glbimg.com/U7TAp42IcAp-o-2tTFI5HBJbUvA=/0x0:1024x1024/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/t/P/kBI0LWRUemtdGTdIi9iQ/mussumdivulgacao.jpg',
    discordId: 'discord#9999'
};
