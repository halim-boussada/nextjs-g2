import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import { Input } from "./Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Username: Story = {
  args: {
    size: "small",
    label: "username",
    placeholder: "username ...",
    type: "text",
  },
};

export const Password: Story = {
  args: {
    size: "large",
    label: "password",
    placeholder: "password ...",
    type: "password",
  },
};

export const age: Story = {
  args: {
    size: "medium",
    label: "age",
    placeholder: "ex (77 , 29) ...",
    type: "number",
  },
};
