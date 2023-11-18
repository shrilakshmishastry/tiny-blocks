import type { Meta } from "@storybook/react";
import FeedbackCard from "./FeedbackCard";

const meta: Meta<typeof FeedbackCard> = {
  component: FeedbackCard,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "link",
      url: "https://dribbble.com/shots/18840156-Mentoree-com-Beta-Everyone-needs-a-mentor",
    },
  },
  args: {
    name: "Shrilakshmi",
    textColor: "#ffffff",
    backgroundColor: "#00BBBD",
    designation: "Frontend developer",
    profilePhoto: "https://fakeimg.pl/50x50/?text=Emoji",
    feedback:
      "Had a great time talking with Menghan. I've learned a lot about UX design process and gained feedback about my portfolio ",
  },
};

export default meta;

export const Default = {};
