import Button from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "error",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Button",
  },
};
