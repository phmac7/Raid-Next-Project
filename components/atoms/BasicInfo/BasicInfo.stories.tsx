import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicInfo } from '@/components/atoms';
export default {
    title: 'Component/BasicInfo',
    component: BasicInfo,
} as ComponentMeta<typeof BasicInfo>;

const Template: ComponentStory<typeof BasicInfo> = (args) => <BasicInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
    property: 'email',
    value: 'test@test.com',
};
