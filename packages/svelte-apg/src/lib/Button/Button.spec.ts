import { render } from "@testing-library/svelte";

import Button from "./Button.svelte";
import { createButton } from "./Button";

describe("Button", () => {
	describe("Component", () => {
		it("should render", () => {
			const { getByText } = render(Button);

			getByText("Button");
		});

		it("should have type button by default", () => {
			const { getByText } = render(Button);

			const button = getByText("Button");

			expect(button.getAttribute("type")).toBe("button");
		});
	});

	describe("createButton primitive", () => {
		it("should pass", () => {
			createButton();
		});
	});
});
