# svelte-apg

## 1. Local development

### 1.1 Storybook

> [!NOTE]
> Storybook url: https://svelte-apg-storybook.vercel.app

```sh
pnpm install

# Storybook dev server
pnpm storybook:dev

# Storybook build
pnpm storybook:build
```

### 1.2 SvelteKit application

```sh
pnpm install

# Vite dev server
pnpm app:dev

# Vite build
pnpm app:build
```

## 2. Testing

### 2.1 Automated tests

```sh
# Runs unit tests with Vitest
pnpm test:unit

# Runs integration tests with playwright
pnpm test:integration

# Runs both unit & integration tests
pnpm test
```

## 3. Code climate

```sh
# Runs ESLint & Prettier
pnpm lint

# Checks TypeScript errors in Svelte files
pnpm check
```
