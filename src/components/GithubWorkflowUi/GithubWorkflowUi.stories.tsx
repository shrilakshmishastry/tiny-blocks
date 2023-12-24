import type { Meta } from "@storybook/react";
import GithubWorkflowUi from "./GithubWorkflowUi";

const meta: Meta<typeof GithubWorkflowUi> = {
  component: GithubWorkflowUi,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "link",
      url: "https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions",
    },
  },
};

export default meta;

export const Default = {};
