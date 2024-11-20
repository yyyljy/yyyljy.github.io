/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "typing-top": {
          "0%": { width: "0", visibility: "visible" },
          "100%": { width: "500px", visibility: "visible" },
        },
        "typing-mid": {
          "0%": { width: "0", visibility: "visible" },
          "100%": { width: "500px", visibility: "visible" },
        },
        "typing-bottom": {
          "0%": { width: "0", visibility: "visible" },
          "100%": { width: "500px", visibility: "visible" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "typing-top": "typing-top 1s steps(20) forwards 200ms",
        "typing-mid": "typing-mid 1s steps(20) forwards 1000ms",
        "typing-bottom": "typing-bottom 1s steps(20) forwards 1800ms",
        "fade-in": "fade-in ease-in forwards 3000ms",
      },
    },
  },
  plugins: [],
};
