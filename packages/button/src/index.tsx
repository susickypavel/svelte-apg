import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("aurora-button")
export class Button extends LitElement {
	protected render() {
		return html`
			<button>
				<slot />
			</button>
		`;
	}
}
