import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserInfo } from '@/components/molecules';
export default {
    title: 'Component/UserInfo',
    component: UserInfo,
} as ComponentMeta<typeof UserInfo>;

const Template: ComponentStory<typeof UserInfo> = (args) => <UserInfo {...args} />;

export const Default = Template.bind({});
Default.args = {};
