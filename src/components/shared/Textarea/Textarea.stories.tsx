import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "./Textarea";

const meta = {
  title: "shared/Textarea",
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Label name",
    placeholder: "Field placeholder",
  },
};
