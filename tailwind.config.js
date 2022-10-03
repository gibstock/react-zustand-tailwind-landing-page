/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dm: {
          back: '#2e3643',
          accent: '#78fff7',
          icons: '#0f172a'
        },
        primaryAccent: '#1c64f2',
        icons: 'rgba(255,255,255,0.6)',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
