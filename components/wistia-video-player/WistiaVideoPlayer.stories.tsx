import type { Meta, StoryObj } from "@storybook/react";
import { WistiaVideoPlayer } from "./WistiaVideoPlayer";

/**
 * A video player component built using React and the [Wistia Player API](https://docs.wistia.com/docs/javascript-player-api).
 *
 * To use this component, provide the Wistia id of the video you want to load via the `videoId` prop.
 *
 * When you provide the `videoId`, the component asynchronously handles and loads two scripts to build
 * the player and load the required video assets. For more information about these scripts and why they
 * are needed, see https://wistia.com/support/developers/e-v1.
 *
 * By default, the component is responsive and will resize itself to the width of its container.
 *
 * You can access and manage the video player data inside your React component using the `onReady` callback prop,
 * which sends back the wisita video data for your video when the video is ready and embedded.
 */
const meta = {
  component: WistiaVideoPlayer,
  title: "Components/Wistia Video Player",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[600px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WistiaVideoPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    videoId: "hb26s9rudm",
    onReady: (video) => console.log(video),
  },
};
