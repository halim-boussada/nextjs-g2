import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import Navbar from "./navbar";

const meta = {
  title: "Example/navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const test1: Story = {
  args: {
    username: "halim boussada",
  },
};
export const test2: Story = {
  args: {
    username: "halim dsakdsnulaikdsalnmadsondsoinadsoasdnoadsnoiadsn",
  },
};
