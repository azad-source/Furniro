import type { Meta, StoryObj } from "@storybook/react";
import Select, { OptionType } from "./Select";

const meta = {
  title: "shared/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: OptionType[] = [
  { value: "moscow", label: "Москва" },
  { value: "kazan", label: "Казань" },
  { value: "samara", label: "Самара" },
  { value: "stpeterburg", label: "Санкт-Петербург" },
];

export const Primary: Story = {
  args: { items },
};
