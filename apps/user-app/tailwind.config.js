/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgprimary: "hsl(0, 0%, 10%)",
        bgsecondary: "hsla(0, 0%, 10%,0.7)",
        textprimary: "hsl(0, 0%, 100%);",
        textsecondary: "hsla(0, 0%, 100%, 0.9)",
        texttertiary: "hsla(0, 0%, 100%, 0.7)",
        accentprimary: "hsl(196, 100%, 50%)",
      },
    },
  },
  plugins: [],
};
