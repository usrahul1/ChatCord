/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    daisyui: {
      themes: ["light", "dark", "cupcake", "retro"], // Ensure these themes are applied correctly
    },
  },
  plugins: [require("daisyui")], // DaisyUI plugin must be here
};
