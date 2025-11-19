# njs-guy's Svelte Kit Template

A nice and simple Svelte Kit template to let me (or anyone else)
quickly whip up new projects.

## Features

- [Svelte](https://svelte.dev/) + [Svelte Kit](https://svelte.dev/docs/kit/introduction)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [PNPM](https://pnpm.io/) for package management
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
  with some sensible defaults.
- [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- [Vitest](https://vitest.dev/) for testing

## Coding style

This ESLint and Prettier config uses double-quotes and semicolons.

```ts
const msg = "wow";
```

## Installation

You can download this repo as a .zip or clone it with git,
but a cleaner approach is with [degit](https://github.com/Rich-Harris/degit).

```bash
npx degit njs-templates/svelte new-project
cd new-project
yarn
```

## Recommended IDE

This was meant to be used with VS Code, but it should work with any editor.
You'll be prompted to install any recommended extensions that aren't installed.
If no one on your team is using VS Code, just delete the `.vscode/` folder.

## Next steps

1. Run `pnpm dev` to start Vite and make sure everything's working.
2. Run `pnpm build` to make sure that building works.
3. Run `pnpm test` to make sure Vitest is working.
4. In `package.json`, change the project name and version.
5. Delete the following:
    1. `LICENSE.txt` from the root of the directory.
        - If your project still uses an MIT License, just edit the author and year.
	2. Either delete `CHANGELOG.md` or remove its contents.
    3. The boilerplate from `src/lib/`, and  `static/`.
    4. `pnpm-lock.yaml` if you want to use a different package manager.
    5. The `.git/` folder if you cloned this repo.
6. Run a `git init` to start tracking changes.

After all that, do whatever. This code is yours now.
Credit is appreciated but not needed.
