/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        themeColor1: "rgb(245 245 245)",
        themeColor2: "rgb(229 231 235)",
        sidebarColor: "rgb(23 23 23)",
        textColor1: "rgb(250 250 250)",
        textColor2: "rgb(163 163 163)",
        textHover: "rgb(64 64 64)",
        navbarColor: "rgb(255 255 255)",
      },
    },
  },
  plugins: [],
}

