import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from "./index";
import { EButtonSize, EButtonTheme } from './models';

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>

export const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

Template.args = {
  size: EButtonSize.LARGE,
  theme: EButtonTheme.GREY
}