import type { Meta, StoryObj } from "@storybook/react";
import FullScreenButton from "./FullScreenButton";
import "./FullScreenButton.css";

const style: React.CSSProperties = {
  position: "absolute",
  right: "20px",
  bottom: "0px",
};
const meta: Meta<typeof FullScreenButton> = {
  component: FullScreenButton,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof FullScreenButton> = {
  render: () => (
    <FullScreenButton buttonStyle={style}>
      <p>hello world</p>
    </FullScreenButton>
  ),
};
