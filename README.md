# DDRC DMT Learning Platform

A professional learning platform for DDRC Professional Services' Diver Medic Technician (DMT) training courses. The platform supports two course types — the 60-hour Full DMT Course (11 online modules) and the 30-hour DMT Refresher (7 online modules) — with role-based access for candidates and administrators.

## Tech Stack

- **Framework:** React 18 with Vite
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Backend:** Firebase (Authentication + Firestore)
- **Hosting:** Netlify

## Local Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd ddrc-dmt-platform
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the project root with your Firebase configuration:

   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

## Creating the First Admin Account

Admin accounts cannot be self-registered. To create the first admin:

1. Go to the [Firebase Console](https://console.firebase.google.com/) and select your project.
2. Navigate to **Authentication > Users** and click **Add user**. Enter an email and password.
3. Copy the **User UID** from the newly created user.
4. Navigate to **Firestore Database** and create a document in the `users` collection:
   - **Document ID:** paste the User UID
   - **Fields:**
     - `uid` (string): the User UID
     - `name` (string): Admin name
     - `email` (string): Admin email
     - `role` (string): `admin`
     - `courseType` (null)
     - `enrolmentCode` (string): `manual`
     - `enrolledAt` (timestamp): current date
     - `lastActive` (timestamp): current date

5. You can now log in at `/login` with the admin credentials.

## Deploying to Netlify

1. Connect your Git repository to Netlify.
2. Set the **build command** to `npm run build` and **publish directory** to `dist`.
3. Add all `VITE_FIREBASE_*` environment variables in Netlify's **Site settings > Environment variables**.
4. Deploy. The `netlify.toml` and `_redirects` files handle SPA routing automatically.

## Project Structure

```
src/
  components/       # Reusable UI components (Layout, PrivateRoute, AdminRoute, etc.)
  pages/            # Page components (Login, Register, Dashboard, Admin pages)
  modules/          # Module data definitions
  context/          # React context providers (AuthContext)
  firebase/         # Firebase configuration and helper functions
  styles/           # Tailwind CSS and custom styles
  App.jsx           # Root component with routing
  main.jsx          # Application entry point
```

## Development Phases

- **Phase 1** (current): Core app shell — authentication, dashboard, admin tools, module definitions
- **Phase 2**: Module content — full teaching material for each module
- **Phase 3**: Quiz engine, reference library content, and assessment features
