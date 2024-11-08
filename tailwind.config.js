/** @type {import('tailwindcss').Config} */
import preline from 'preline/plugin'
import forms from '@tailwindcss/forms'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    preline,
    forms
  ],
}

