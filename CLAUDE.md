# DDRC DMT Learning Platform

## Project Overview
React + Vite + Firebase web application for delivering Diving Medical Technician (DMT) training courses. Supports both Full DMT Course and DMT Refresher course types.

## Tech Stack
- **Frontend**: React 18, React Router 6, Tailwind CSS
- **Backend**: Firebase (Auth, Firestore, Storage, Hosting)
- **Build**: Vite 5
- **PDF**: jsPDF for certificate generation
- **Email**: EmailJS for notifications

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build
- `npm test` — Run tests (Vitest)
- `npm run test:ui` — Run tests with UI

## Architecture

### Directory Structure
```
src/
  components/    — Reusable UI components (Layout, ModuleCard, QuizEngine, etc.)
  context/       — React context (AuthContext for auth state)
  data/          — Static data (referenceCards)
  firebase/      — Firebase config, auth, firestore, storage helpers
  modules/
    content/     — Module teaching content (O1_1.js, RM1.js, etc.)
    quizzes/     — Formative quiz question banks per module
  pages/         — Route-level page components
  utils/         — Certificate generator, email service
```

### Key Patterns
- **Auth**: Firebase Auth with Firestore user profiles. `AuthContext` provides `currentUser`, `userProfile`, `isAdmin`, `isCandidate`.
- **Routing**: `PrivateRoute` (authenticated) and `AdminRoute` (admin role) wrappers.
- **Modules**: Defined in `src/modules/moduleData.js`. Each has an `id`, `courseTypes` array, `phase` (online or in-person), and `contentReady` flag.
- **Progress**: Stored in Firestore subcollection `users/{uid}/progress/{moduleId}`. States: `not_started`, `in_progress`, `complete`.
- **Quizzes**: Formative quizzes per module with best-score tracking. Questions have `question`, `options[]`, `correct` (index), `explanation`.
- **Summative Assessment**: Final exam system at `src/modules/quizzes/summativeAssessment.js` with 50+ cross-module questions. Pass mark: 70%. Managed via `SummativeExam` component and `/assessment` route.
- **Enrolment**: Code-based enrolment system. Codes have courseType, maxUses, expiry.

### Firestore Collections
- `users` — User profiles (role: admin/candidate, courseType, cohortId)
- `users/{uid}/progress` — Module completion progress
- `users/{uid}/certificates` — Issued certificates
- `enrolmentCodes` — Enrolment codes with usage tracking
- `sessions` — Scheduled sessions with Zoom links
- `attendance` — Session attendance records
- `notifications` — Notification log

### Roles
- **candidate**: Standard learner. Sees dashboard, modules, quizzes, certificate.
- **admin**: Course administrator. Access to admin dashboard, cohort management, candidate management, session scheduling, notifications, sign-off.

### Module ID Conventions
- `O{day}_{seq}` — Online theory modules (e.g., O1_1 = Day 1, Session 1)
- `RM{n}` — Refresher-only modules
- `IP{day}_{seq}` — Full course in-person practical modules
- `RD{day}_{seq}` — Refresher in-person practical modules

## Style Guide
- Tailwind CSS utility classes throughout
- Custom colors: `navy`, `teal`, `success-green`, `error-red`, `warning-amber`, `text-primary`, `text-muted`
- Custom classes: `card`, `btn-primary`, `btn-secondary`, `btn-outline`, `input-field`, `label`
- Font: `font-heading` for headings

## Firebase Configuration
- Config in `src/firebase/config.js`
- Security rules in `firestore.rules` and `storage.rules`
- Hosting config in `firebase.json`
