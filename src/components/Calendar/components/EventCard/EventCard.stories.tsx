import { Meta, StoryObj } from "@storybook/react";
import EventCard from "./EventCard";
import "./EventCard.stories.css";

const meta: Meta<typeof EventCard> = {
  title: "calendar/EventCard",
  component: EventCard,
};

export default meta;

export const Default: StoryObj<typeof EventCard> = {
  render: () => (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
        position: "relative",
      }}
    >
      <div className="grid-container">
        <EventCard />
      </div>
    </div>
  ),
};
