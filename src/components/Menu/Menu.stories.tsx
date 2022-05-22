import { ComponentStory, ComponentMeta } from "@storybook/react";

import Menu from "./index";

export default {
  title: "components/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

export const MenuExample: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} />
);

const items = [
  {
    icon: <>icon 1</>,
    element: "element 1",
    onClick: () => {},
    isActive: false,
  },
  {
    icon: <>icon 2</>,
    element: "element 2",
    onClick: () => {},
    isActive: true,
  },
];

MenuExample.args = {
  items,
};
