import { ComponentStory, ComponentMeta } from "@storybook/react";

import Fieldset from "./index";

export default {
  title: "components/Fieldset",
  component: Fieldset,
} as ComponentMeta<typeof Fieldset>;

export const FieldsetExample: ComponentStory<typeof Fieldset> = (args) => (
  <Fieldset {...args} >test</Fieldset>
);

FieldsetExample.args = {
  title: <>Title</>,
};
