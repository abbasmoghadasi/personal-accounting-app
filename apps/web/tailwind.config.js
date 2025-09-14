/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // your app files
    "../../packages/ui/**/*.{ts,tsx}", // shared UI package
  ],
  theme: { extend: {} },
  plugins: [],
};
