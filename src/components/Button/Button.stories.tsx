import Button, { ButtonProps } from "./index";

export default {
  title: "Button",
  component: Button,
};

const Template = (args: ButtonProps) => <Button {...args}>ButtonBase</Button>;

export const ButtonBase = Template.bind({});

