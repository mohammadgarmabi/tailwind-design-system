import { NumberInput } from "@/components/Input/Number";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Number",
    placeholder: "Enter a number",
    helperText: "We'll never share your email with anyone else.",
    onChange: () => {},
    value: 12,
    max: 50,
    min: 50,
    required: true,
  },
};
