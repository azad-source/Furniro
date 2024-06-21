import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";

const meta = {
  title: "shared/Pagination",
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstPage: Story = {
  args: { pageNumber: 1, pageCount: 5, switchPage: () => {} },
};

export const SecondPage: Story = {
  args: { pageNumber: 2, pageCount: 5, switchPage: () => {} },
};

export const ThirdPage: Story = {
  args: { pageNumber: 3, pageCount: 5, switchPage: () => {} },
};

export const FourthPage: Story = {
  args: { pageNumber: 4, pageCount: 5, switchPage: () => {} },
};

export const LastPage: Story = {
  args: { pageNumber: 5, pageCount: 5, switchPage: () => {} },
};

export const LongFirstPage: Story = {
  args: { pageNumber: 1, pageCount: 10, switchPage: () => {} },
};

export const LongSecondPage: Story = {
  args: { pageNumber: 2, pageCount: 10, switchPage: () => {} },
};

export const LongThirdPage: Story = {
  args: { pageNumber: 3, pageCount: 10, switchPage: () => {} },
};

export const LongFourthPage: Story = {
  args: { pageNumber: 4, pageCount: 10, switchPage: () => {} },
};

export const LongFifrthPage: Story = {
  args: { pageNumber: 5, pageCount: 10, switchPage: () => {} },
};

export const LongSixthPage: Story = {
  args: { pageNumber: 6, pageCount: 10, switchPage: () => {} },
};

export const LongSeventhPage: Story = {
  args: { pageNumber: 7, pageCount: 10, switchPage: () => {} },
};

export const LongEightPage: Story = {
  args: { pageNumber: 8, pageCount: 10, switchPage: () => {} },
};

export const LongNinhtPage: Story = {
  args: { pageNumber: 9, pageCount: 10, switchPage: () => {} },
};

export const LongLastPage: Story = {
  args: { pageNumber: 10, pageCount: 10, switchPage: () => {} },
};
