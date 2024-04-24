# sanchezyspace Next.js Template

This is a Next.js + TypeScript + Firebase project template, perfect for starting your new projects in sanchezyspace.

![image](https://github.com/sanchezyspace/.github/assets/12378384/91906d08-cc93-4ee9-931d-14ee9a4a5ed1)

## Getting Started

1. Install [pnpm](https://pnpm.io/) with:
(You can use `npm` or `yarn` instead to skip this step)
```bash
npm install -g pnpm
```

2. Create a new project based on this template using:
```bash
pnpm create next-app -e https://github.com/sanchezyspace/next-template/tree/main/
```

3. Install dependencies:
```bash
pnpm install
```

4. Start the development server with:
```bash
pnpm run dev
```

5. Visit http://localhost:3000 to view your application in the browser. 
Edit app/page.tsx for live updates as you code.

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
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [Firebase Authentication](https://firebase.google.com/docs/auth)

## Firebase support
This template uses Firebase [Firestore](https://firebase.google.com/docs/firestore) and [Authentication](https://firebase.google.com/docs/auth) to store data and authenticate users.

### How to setup Firebase
1. Create a new project on [Firebase Console](https://console.firebase.google.com/).
2. Create a new web app and copy the configuration.
3. Create a new Firestore database and enable authentication.
4. Create a `.env.local` file in the root directory and add the following:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="xxxxxxxxxxxxxxxxx.firebaseapp.com"
    NEXT_PUBLIC_FIREBASE_PROJECT_ID="xxxxxxxxxxxxxxxx"
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="xxxxxxxxxxxxxxxx.appspot.com"
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="000000000000"
    NEXT_PUBLIC_FIREBASE_APP_ID="0:0000000000000:web:xxxxxxxxxxxxxxxxxx"
    ```
Now you can use firestore and authentication by importing `db` and `app` from `@/utils/firebase`.

### Recommended coding rules for Firebase
#### Creating new collections
1. Create a new collection in console.
2. Create a new type in `types/db-post.ts`
    Example
    ```typescript
    import { Timestamp } from 'firebase/firestore';

    export type DBPost = {
        uid: string;
        createdAt: Timestamp;
        createdBy: DocumentReference;
        title: string;
        content: string;
    };
    ```
    - Make sure that the type name starts with `DB`.
    - Make sure that the object has `uid` and `createdAt` fields.
    - Use `DocumentReference` for references to other collections.
3. Define database operations in `@/stores/firestore/posts.ts`
    Example
    ```typescript
    import { db } from '@/utils/firebase';
    import { DBPost } from '@/types/db-post';

    export const collectionName = 'posts';
    export const postsRef = collection(db, collectionName);
    export const getPostRef = (uid: string) => doc(db, collectionName, uid);

    export const createPost = async (post: DBPost) => {
        await postsRef.add(post);
    };
    ```
    - 

## Tips
### How husky works
This template uses [Husky](https://typicode.github.io/husky/#/) to run `lint-staged` before every commit.

### How to remove Tailwind CSS
1. Remove `tailwind.config.js` and `postcss.config.js`.
2. Run `pnpm remove tailwindcss postcss autoprefixer`.
3. Remove `@tailwind xxxx;` from `app/globals.css`.

### How to remove Husky
If you want to remove husky, you can remove the following code from `package.json`:
```jsonc
// ...
"scripts": {
    // ...
    "prepare": "husky"
},

// ...
"lint-staged": {
    "*.{js,jsx,ts,tsx}": "eslint --max-warnings 0",
    "src/app/**": "prettier --write"
}
```

### How to change formatting rules
You can change the formatting rules by editing `.prettierrc`.

## Contributing
Contributions for this template are welcome at [GitHub Repository](https://github.com/sanchezyspace/next-template).