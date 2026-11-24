# RateEase - Service Review Application System (Frontend)

RateEase is a platform that allows users to review and interact with services listed by others. Users can log in, add services, post reviews, manage their reviews, and explore reviews of services they have added. This project represents the frontend of the Service Review Application System.

- **Live site**: https://rateease-client-side.vercel.app/
- **Backend repository**: https://github.com/nafisahnubah/rateease-server-side

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Author](#author)

## Features
- **User Authentication**: Users can log in and sign up (with email verification through a link) to access the platform.
- **Service Listings**: Users can browse and review various services.
- **Add and Edit Services**: Users can add new services and update or delete their existing services.
- **Review Management**: Users can update and delete reviews.
- **Explore Reviews**: View reviews for services listed on the platform.
- **Pagination**: Select the number of services to be shown on the page and navigate between different pages.
- **Notifications**: Receive notifications for actions like successful login, posting a review, etc.
- **Responsive Design**: Responsive design to support use on all types of devices.

## Tech Stack
- **React** (with Vite)
- **React Router**
- **Tailwind CSS, DaisyUI**
- **Firebase** (authentication)
- **Lottie**
- **React Toastify**
- **React Rating**

## Getting Started

### Requirements
- Node.js 18, 20, or 22+ (required by Vite 6)
- A [Firebase](https://firebase.google.com/) project with Email/Password sign-in enabled

### Setup
The app lives in the [`RateEase/`](RateEase) folder:

```bash
cd RateEase
npm install
```

Create `RateEase/.env.local` with your Firebase web app config (it is git-ignored):

```
VITE_apiKey=...
VITE_authDomain=...
VITE_projectId=...
VITE_storageBucket=...
VITE_messagingSenderId=...
VITE_appId=...
```

The app talks to the deployed backend at `https://rate-ease-server-side.vercel.app`. To use
a different backend, change `API_BASE_URL` in [`RateEase/src/api.js`](RateEase/src/api.js).

### Scripts
Run these from the `RateEase/` folder:

| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production into `RateEase/dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure
```
RateEase/
├── src/
│   ├── components/   # reusable UI (cards, navbar, footer, banner, ...)
│   ├── pages/        # routed pages (Home, Services, ServiceDetails, MyReviews, ...)
│   ├── context/      # AuthContext + AuthProvider (Firebase auth state)
│   ├── firebase/     # Firebase initialisation
│   ├── hooks/        # useAuth
│   ├── api.js        # backend base URL
│   └── main.jsx      # routes and app entry point
├── vercel.json       # SPA rewrite for Vercel
└── package.json
```

## Author
- Name: Nafisah Nubah
- Email: nafisahnubah@gmail.com
