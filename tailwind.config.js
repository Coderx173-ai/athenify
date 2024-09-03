/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        AvenirRomanFont: ["AvenirRoman", "sans-serif"], // Define your custom font
        AvenirBlackFont: ["AvenirBlack", "sans-serif"], // Define your custom font
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        heroBG: "url('/bg.png')",
        methodBg: "url('/method.png')",
        footerBg: "url('/footer-bg.png')",
        phone: "url('/iphone.png')"
        // method: "url('/method.png')",
        // methodBg: " url('/method-img-1.png'), url('/method-img-2.png'), url('/method.png')",
        
      },
    },
  },
  plugins: [],
};
