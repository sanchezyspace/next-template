# sanchezyspace Next.js Template

This is a Next.js + TypeScript project template, perfect for starting your new projects.

![image](https://github.com/sanchezyspace/.github/assets/12378384/91906d08-cc93-4ee9-931d-14ee9a4a5ed1)

## Getting Started

Insatll [pnpm](https://pnpm.io/) with:
(You can use `npm` or `yarn` instead)
```bash
npm install -g pnpm
```

Install dependencies with:
```bash
pnpm install
```

Start the development server with:
```bash
pnpm run dev
```

Visit http://localhost:3000 to view your application in the browser. Edit app/page.tsx for live updates as you code.

## Installing recommended extensions
This template recommends the following extensions for VS Code:
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

By searching `@recommended` in the extensions tab, you can install all the recommended extensions at once.

## Features
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [pnpm](https://pnpm.io/)
- [Husky](https://typicode.github.io/husky/#/)

### How husky works
This template uses [Husky](https://typicode.github.io/husky/#/) to run `lint-staged` before every commit.

## Tips
### How to remove Tailwind CSS
1. Remove `tailwind.config.js` and `postcss.config.js`.
2. Run `pnpm remove tailwindcss postcss autoprefixer`.
3. Remove `@tailwind xxxx;` from `styles/globals.css`.

### How to remove Husky
If you want to remove husky, you can remove the following code from `package.json`:
```json
// ...
"scripts": {
    // ...
    "prepare": "husky"
  },

// ...
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": "eslint --max-warnings 0",
    "app/**": "prettier --write"
  }
```

### How to change formatting rules
You can change the formatting rules by editing `.prettierrc`.

## Contributing
Contributions for this template are welcome at [GitHub Repository](https://github.com/sanchezyspace/next-template).