# Portfolio Admin Panel

A React-based admin dashboard for managing all content on the portfolio site — built to work with the custom `portfolio-backend-cms` API.

## Tech Stack
- React 18 + Vite
- React Router
- Tailwind CSS v4
- Axios (with automatic access token refresh)

## Features
- JWT-protected login
- Config-driven CRUD manager — a single component (`CrudManager.jsx`) handles all 7 content types via `contentTypes.js`
- Sidebar navigation to every content section
- Contact form message viewer

## Project Structure

src/
api/ → axios instance with auto token refresh
components/ → Sidebar, CrudManager
config/ → contentTypes.js (field definitions for every content type)
context/ → AuthContext (login/logout state)
pages/ → Login, Dashboard, Messages
routes/ → ProtectedRoute


## Setup

```bash
npm install
cp .env
```

Fill in `.env`:
VITE_API_URL=http://localhost:5000


Run it:
```bash
npm run dev
```

Visit `http://localhost:5173/login`.

## Logging In
Use the admin credentials created via the backend's `/auth/register` endpoint. There is no public registration page in this app by design — only one admin account is expected.

## Managing Content
Each sidebar link (`/manage/about`, `/manage/skills`, `/manage/projects`, etc.) is powered by the same `CrudManager` component, driven entirely by the field definitions in `src/config/contentTypes.js`. Adding a new content type only requires:
1. A new entry in `contentTypes.js`
2. A matching model + route on the backend
3. A sidebar link in `Sidebar.jsx`

No new page component is needed.

## Deployment
Deployed on [Vercel](https://vercel.com) as a static Vite build.

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Environment variable:** `VITE_API_URL` set to the live backend URL
- `vercel.json` included to handle client-side routing (SPA rewrites)

Live URL: `https://portfolio-admin-panel.vercel.app` *(update with your actual URL)*

## Related Repos
- [portfolio-backend-cms](https://github.com/<your-username>/portfolio-backend-cms) — API and database
- [portfolio-frontend](https://github.com/<your-username>/portfolio-frontend) — public portfolio site