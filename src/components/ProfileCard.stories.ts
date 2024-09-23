import type { Meta, StoryObj } from "@storybook/vue3";
import "../style.css";

import ProfileCard from "./ProfileCard.vue";
import App from "../App.vue";

const meta = {
  title: "Components/ProfileCard",
  component: ProfileCard,
  render: (args: any) => ({
    components: { ProfileCard },
    setup() {
      return { args };
    },
    template: "<profile-card></profile-card>",
  }),
  parameters: {
    layout: "fullscreen",
  },
  args: {
    // onLogin: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        percy: {
            name: 'Profile Pic Default',
            additionalSnapshots: [
              { prefix: '[Dark mode] ', args: { colorScheme: 'dark' } },
              { suffix: ' with globals', globals: { textDirection: 'rtl' } },
            ]
          }
    },
  args: {},
};

export const WithBrightlyNav: Story = {
    parameters: {
        percy: {
            name: 'Profile Pic Brightly App',
            additionalSnapshots: [
              { prefix: '[Dark mode] ', args: { colorScheme: 'dark' } },
              { suffix: ' with globals', globals: { textDirection: 'rtl' } },
            //   { name: 'Search snapshot', queryParams: { search: '.profile-social' } }
            ]
          }
    },
  render: (args: any) => ({
    components: { ProfileCard, App },
    setup() {
      return { args };
    },
    template: "<app><profile-card></profile-card></app>",
  }),
};
