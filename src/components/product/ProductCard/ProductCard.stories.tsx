import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./ProductCard";
import ProductMock from "mock/product.mock";

const meta = {
  title: "shared/ProductCard",
  component: ProductCard,
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const productMock = new ProductMock();

export const Primary: Story = {
  args: {
    card: productMock.base(),
  },
};
