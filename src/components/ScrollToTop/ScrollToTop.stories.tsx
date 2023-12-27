import type { Meta, StoryObj } from "@storybook/react";
import ScrollToTop from "./ScrollToTop";

const meta: Meta<typeof ScrollToTop> = {
  component: ScrollToTop,
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

export const Default: StoryObj<typeof ScrollToTop> = {
  render: () => {
    return (
      <div
        style={{
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        <ScrollToTop />
      </div>
    );
  },
};
