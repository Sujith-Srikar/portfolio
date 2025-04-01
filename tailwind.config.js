/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "custom-small": "calc(11vw + 40px)",
        "custom-large": "calc(11vw + 15px)",
      },
    },
  },
  plugins: [],
};

