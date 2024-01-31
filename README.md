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
pnpm dev
```

Visit http://localhost:3000 to view your application in the browser. Edit app/page.tsx for live updates as you code.

## Tips
### How to remove Tailwind CSS
1. Remove `tailwind.config.js` and `postcss.config.js`.
2. Run `pnpm remove tailwindcss postcss autoprefixer`.
3. Remove `@tailwind xxxx;` from `styles/globals.css`.

## Contributing
Contributions for this template are welcome at [GitHub Repository](https://github.com/sanchezyspace/next-template).