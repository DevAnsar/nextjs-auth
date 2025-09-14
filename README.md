# Next.js Auth Example

This project demonstrates a simple client-side authentication flow using **Next.js (App Router)**, **TypeScript**, **TailwindCSS**, and **shadcn/ui**.

## Features

- Login with Iranian mobile number validation (formats: `09xxxxxxxxx`, `+989xxxxxxxxx`, `00989xxxxxxxxx`)
- Fake API request to [randomuser.me](https://randomuser.me)
- Store user data in `localStorage`
- Dashboard with welcome message and logout functionality
- Client-side only authentication state

## Live Demo

👉 [https://nextjs-auth.vercel.app](https://nextjs-auth.vercel.app)

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 18)
- Package manager: **pnpm** (recommended), or npm/yarn

### Clone the repository

```bash
# with HTTPS
git clone https://github.com/DevAnsar/nextjs-auth.git

# or with SSH
git clone git@github.com:DevAnsar/nextjs-auth.git

cd nextjs-auth
```

### Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Run the development server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
pnpm build
# or
npm run build
# or
yarn build
```

### Run the production build

```bash
pnpm start
# or
npm run start
# or
yarn start
```

By default, the app runs at [http://localhost:3000](http://localhost:3000).

## License

MIT
