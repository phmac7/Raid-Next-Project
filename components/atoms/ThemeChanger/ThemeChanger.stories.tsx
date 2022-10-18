import React from "react";
import { Story, Meta } from "@storybook/react";

import ThemeChanger from "./ThemeChanger";

export default {
  title: "Component/ThemeChanger",
  component: ThemeChanger,
  argTypes: {},
} as Meta<typeof ThemeChanger>;

const Template: Story<typeof ThemeChanger> = (args) => (
  <ThemeChanger {...args} />
);

export const Primary = Template.bind({});
