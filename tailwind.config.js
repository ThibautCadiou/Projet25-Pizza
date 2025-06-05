// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        tibo: ["Roboto Mono", "monospace"],
        sans: ["Roboto Mono", "monospace"],
      },
      colors: {
        tibo: {
          50: "#fdeef0",
          100: "#fbdde2",
          200: "#f9cdd3",
          300: "#f7bcc5",
          400: "#f5abb6",
          500: "#f39ba7", // ta couleur principale
          600: "#f18a99",
          700: "#000",
        },
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};
