import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from ".";

export default {
  title: "Example/Button",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Basic: typeof Template = Template.bind({});

Basic.args = {
  placeholder: "My placeholder",
};
