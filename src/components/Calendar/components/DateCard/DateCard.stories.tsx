import type { Meta } from "@storybook/react";
import DateCard from "./DateCard";

const meta: Meta<typeof DateCard> = {
  title: "calendar/DateCard",
  component: DateCard,
  tags: ["autodocs"],
  argTypes: {
    onDateSelect: {
      action: true,
    },
    isActive: { control: "boolean" },
  },
  args: {
    dateInNumber: 21,
    day: "Tuesday",
  },
};

export default meta;
export const Default = {};
