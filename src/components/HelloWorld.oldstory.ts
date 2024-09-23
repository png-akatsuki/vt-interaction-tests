import type { Meta, StoryObj } from '@storybook/vue3';
import '../style.css'

import HelloWorld from './HelloWorld.vue';
import App from '../App.vue';

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/HelloWorld',
  component: HelloWorld,
  render: (args: any) => ({
    components: { HelloWorld, App },
    setup() {
      return { args };
    },
    template: '<app><hello-world :msg="args.msg" /></app>',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    // onLogin: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    msg: "This is message of storybook"
    // user: {
    //   name: 'Jane Doe',
    // },
  },
};

export const LoggedOut: Story = {
  args: {
    msg: "",
  },
};
