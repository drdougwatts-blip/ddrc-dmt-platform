/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B3A5C',
        teal: '#2A7F8E',
        'light-bg': '#F0F5F7',
        'text-primary': '#333333',
        'text-muted': '#666666',
        'success-green': '#2E8B57',
        'warning-amber': '#CC8800',
        'error-red': '#CC3333',
      },
      fontFamily: {
        heading: ['Georgia', 'serif'],
        body: ['system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
