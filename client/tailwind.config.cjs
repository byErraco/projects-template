/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  // important: "#app",
};
