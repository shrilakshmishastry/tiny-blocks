import type { Meta } from "@storybook/react";
import Switcher from "../components/Switcher/Switcher";

const meta: Meta<typeof Switcher> = {
  title: "Calendar/Switcher",
  component: Switcher,
  tags: ["autodocs"],
  argTypes: {
    onNextCtaClick: { action: true },
    onPreviousCtaClick: { action: true },
    onTodayCtaClick: { action: true },
    view: {
      control: { type: "select" },
      options: ["WEEK", "DAY", "MONTH"],
    },
  },
};

export default meta;

export const Default = {};
