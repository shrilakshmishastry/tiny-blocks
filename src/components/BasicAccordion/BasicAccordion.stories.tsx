import type { Meta } from "@storybook/react";
import BasicAccordion from "./BasicAccordion";

const meta: Meta<typeof BasicAccordion> = {
  component: BasicAccordion,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "link",
      url: "https://dribbble.com/shots/18840156-Mentoree-com-Beta-Everyone-needs-a-mentor",
    },
  },
  args: {
    allowMultiplePanelOpen: true,
    data: [
      {
        title: "Section 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Section 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Section 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  },
};

export default meta;

export const Default = {};
