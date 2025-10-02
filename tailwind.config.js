/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",   // harmless if you don't use Pages Router
    "./src/**/*.{js,ts,jsx,tsx,mdx}",     // harmless if you don't have /src
  ],
  theme: {
    extend: {
      // Optional: add your brand tokens here if you want to use via theme()
      colors: {
        accent: "#4195D9",
        "accent-dark": "#1D4A73",
      },
    },
  },
  plugins: [
    // Optional: enable if you have forms later
    // require("@tailwindcss/forms"),
  ],
};
