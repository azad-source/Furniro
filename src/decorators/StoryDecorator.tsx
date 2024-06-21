import { ReactRenderer } from "@storybook/react";
import { PartialStoryFn } from "@storybook/types";
import GlobalStyles from "globalStyles";
import "reset-styles.css";
import "index.css";
import { ThemeProvider } from "styled-components";
import theme from "theme";

export type StoryType = PartialStoryFn<ReactRenderer, { [x: string]: any }>;

export const StoryDecorator = (Story: StoryType) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
);
