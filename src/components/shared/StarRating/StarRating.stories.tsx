import type { Meta, StoryObj } from "@storybook/react";
import StarRating from "./StarRating";

const meta = {
  title: "shared/StarRating",
  component: StarRating,
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Case1: Story = {
  args: { rating: 0 },
};

export const Case2: Story = {
  args: { rating: 1.3 },
};

export const Case3: Story = {
  args: { rating: 2.7 },
};

export const Case4: Story = {
  args: { rating: 3.2 },
};

export const Case5: Story = {
  args: { rating: 4.5 },
};

export const Case6: Story = {
  args: { rating: 4.7 },
};

export const Case7: Story = {
  args: { rating: 5.0 },
};
