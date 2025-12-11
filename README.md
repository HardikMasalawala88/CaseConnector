
---

````markdown
# Firebase Studio Web App

This repository contains the source code generated via [Firebase Studio](https://studio.firebase.google.com). You can use this code to run the project locally, customize features, and deploy to Firebase Hosting or any other preferred platform.

---

## 🚀 Features

- Firebase Authentication (optional)
- Firestore/Realtime Database Integration (if configured)
- Hosting-ready with `firebase.json`
- Easy local development with Firebase CLI
- Built with open-source web technologies (React / Angular / Vanilla JS depending on setup)

---

## 🧰 Prerequisites

- [Node.js & npm](https://nodejs.org) (v18+ recommended)
- [Firebase CLI](https://firebase.google.com/docs/cli) (`npm install -g firebase-tools`)
- [Git](https://git-scm.com/) (for version control & cloning)

---

## 🔧 Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/HardikMasalawala88/studio.git
cd studio
````

### 2. Install dependencies

```bash
npm install
```

### 3. Log in to Firebase (if not already)

```bash
firebase login
```

### 4. (Optional) Initialize Firebase project locally

```bash
firebase use --add
# Select or add your Firebase project
```

### Environment configuration (development & production)

This project reads the API base URL from an environment variable named `NEXT_PUBLIC_API_BASE_URL`. Create the following files at the project root to configure dev/prod values, or set the variable in your hosting/CI environment.

- Example `.env.development` (used when running `next dev`):

```text
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

- Example `.env.production` (used for production builds — replace with your real backend URL):

```text
NEXT_PUBLIC_API_BASE_URL=https://api.yourdomain.com
```

Notes:
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser by Next.js — only put non-secret values there (the API base URL is fine).
- Do NOT commit secrets or private keys to VCS. Use your host/CI settings to store real secrets and production values.

How to run with these configs (PowerShell examples):

- Run development server (uses `.env.development` automatically):

```powershell
npm run dev
```

- Build for production (ensure `NEXT_PUBLIC_API_BASE_URL` is set for the build environment):

```powershell
# Set in current PowerShell session (temporary)
$env:NEXT_PUBLIC_API_BASE_URL = "https://api.yourdomain.com"

# Then build and start
npm run build
npm start
```

For hosted deployments (Vercel, Netlify, Firebase Hosting, etc.), set `NEXT_PUBLIC_API_BASE_URL` in the project's environment/variables settings in the provider dashboard instead of committing `.env.production`.


### 5. Run locally

If this is a typical frontend app (React/Vue/etc):

```bash
npm run dev
# or
npm start
```

To emulate Firebase features locally (Hosting, Functions, Firestore, etc.):

```bash
firebase emulators:start
```

---

## 🌐 Deployment

To deploy your project to Firebase Hosting:

```bash
firebase deploy
```

Make sure `firebase.json` is properly configured before deploying.

---

## 📁 Project Structure

| Folder/File     | Purpose                            |
| --------------- | ---------------------------------- |
| `public/`       | Static assets for Firebase Hosting |
| `src/`          | Source code for your web app       |
| `firebase.json` | Firebase project configuration     |
| `.firebaserc`   | Firebase project alias settings    |
| `package.json`  | Project scripts and dependencies   |

---

## 📄 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute.

---

## 🙌 Support

For questions or improvements, feel free to open an [issue](https://github.com/HardikMasalawala88/studio/issues) or submit a [pull request](https://github.com/HardikMasalawala88/studio/pulls).

