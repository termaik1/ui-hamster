import { ComponentStory, ComponentMeta } from "@storybook/react";

import Portal from "./index";

export default {
  title: "common/Portal",
  component: Portal,
} as ComponentMeta<typeof Portal>;

export const PortalExample: ComponentStory<typeof Portal> = (args) => (
  <Portal {...args}>
    <div>Test Portal Element</div>
  </Portal>
);

PortalExample.args = {};
