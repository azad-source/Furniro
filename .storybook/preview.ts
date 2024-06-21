import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import { StoryDecorator } from "../src/decorators/StoryDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withRouter, StoryDecorator],
};

export default preview;
