# Svelte APG

## 1. Local development

### 1.1 Prerequisites

- [**Node >=20**](https://nodejs.org/en)
- [**pnpm >=8**](https://pnpm.io)

### 1.2 Installation

```sh
git clone https://github.com/susickypavel/svelte-apg.git

cd svelte-apg

pnpm install
```

### 1.3 Projects

This repository is divided into several pnpm workspaces. Each workspace has its own `package.json` with its own scripts to be executed for development.

#### 1.3.1 Storybook

[Storybook](./projects/sveltekit-demo) for showcase of Svelte components. It's powered by SvelteKit so the project is co-located with [SvelteKit demo app](./projects/sveltekit-demo/).

#### 1.3.2 SvelteKit demo

[SvelteKit demo app](./projects/sveltekit-demo/) is co-located with [Storybook](./projects/storybook/). It's main purpose is to test out created components in real app.

#### 1.3.3 Astro demo

[Astro demo app](./projects/astro-demo/) is a simple app created with [Astro](https://astro.build/). It's main purpose is to test out created components in island architecture.
