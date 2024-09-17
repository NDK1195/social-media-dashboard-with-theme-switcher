/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        "toggle-light": "hsl(230, 22%, 74%)",
        "background-dark": "hsl(230, 17%, 14%)",
        "top-background-dark": "hsl(232, 19%, 15%)",
        "card-background-dark": "hsl(228, 28%, 20%)",
        "text-dark": "hsl(228, 34%, 66%)",
        "top-background-light": "hsl(225, 100%, 98%)",
        "card-background-light": "hsl(227, 47%, 96%)",
        "text-light-1": "hsl(228, 12%, 44%)",
        "text-light-2": "hsl(230, 17%, 14%)",
      },
      backgroundImage: {
        "toggle-dark":
          "linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)",
      },
    },
  },
  plugins: [],
};
