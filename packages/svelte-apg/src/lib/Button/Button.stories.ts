import type { Meta, StoryObj } from "@storybook/svelte";

import Button from "./Button.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: "Components/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: { type: "radio" },
			options: ["button", "submit", "reset"],
			description: "Behaviour of the button according to the HTML spec"
		}
	},
	args: {
		type: "button"
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
	args: {}
};
