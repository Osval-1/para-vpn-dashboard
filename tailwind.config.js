/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'inter': ['"inter"',"sans-serif"],
      "mont":['"montserrat"',"sans-serif"],
    },
    extend: {
      colors: {
        border: {
          light: "#E8DECF",
          dark: "#918C73",
        },
        text: {
          blue: "#1814F3",
          grey: "#B1B1B1",
          header: "#343C6A",
          body:"#718EBF"
        },
        background: {
          input: "#F5F7FA",
        },
      },
    },
  },
  plugins: [],
};
