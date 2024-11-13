/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: {
          light: "#E8DECF",
          dark: "#918C73",
        },
        text: {
          blue: "#1814F3",
          grey: "#B1B1B1",
        },
      },
    },
  },
  plugins: [],
};
