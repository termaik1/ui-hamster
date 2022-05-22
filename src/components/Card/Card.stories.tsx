import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./index";

export default {
  title: "components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const CardExample: ComponentStory<typeof Card> = ({
  children,
  ...rest
}) => <Card {...rest}>{children}</Card>;

CardExample.args = {
  isMobile: false,
  children: <div>Card Example</div>,
};
