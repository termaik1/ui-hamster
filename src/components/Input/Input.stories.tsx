import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./index";

export default {
  title: "components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const InputExample: ComponentStory<typeof Input> = ({ ...rest }) => (
  <Input {...rest} />
);

InputExample.args = {
};
