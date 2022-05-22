import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from "./index";

export default {
  title: "components/Button",
  component: Button,
} as ComponentMeta<typeof Button>

export const ButtonGrey: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

ButtonGrey.args = {
  size: 'large',
  theme: 'grey'
}
