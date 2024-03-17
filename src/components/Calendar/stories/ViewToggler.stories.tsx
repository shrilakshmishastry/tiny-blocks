import type { Meta } from "@storybook/react";
import ViewToggler from "../components/ViewToggler/ViewToggler";

const meta: Meta<typeof ViewToggler> = {
  title: "Calendar/ViewToggler",
  component: ViewToggler,
  tags: ["autodocs"],
  argTypes: {
    onViewChange: { action: true },
  },
};

export default meta;

export const Default = {};
