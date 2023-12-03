import type { Meta } from "@storybook/react";
import HeartGlow from "./HeartGlow";

const meta: Meta<typeof HeartGlow> = {
  component: HeartGlow,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "link",
      url: "https://dribbble.com/shots/18840156-Mentoree-com-Beta-Everyone-needs-a-mentor",
    },
  },
  args: {},
};

export default meta;

export const Default = {};
