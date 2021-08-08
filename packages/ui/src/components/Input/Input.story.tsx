import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from ".";

export default {
  title: "Example/My Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  primary: true,
  label: "Button",
};
