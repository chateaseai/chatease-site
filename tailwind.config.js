/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F172A",       // a bit deeper for contrast
        sky: "#38BDF8",
        success: "#22C55E",
        violet: "#7C3AED",
        surface: "#F4F6FB"
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0,0,0,0.15)"
      },
      backgroundImage: {
        'hero': "linear-gradient(180deg, #EBF8FF 0%, #F5EEFF 100%)",
        'tint': "linear-gradient(180deg, rgba(56,189,248,0.10) 0%, rgba(124,58,237,0.08) 100%)",
        'cta': "linear-gradient(90deg, #38BDF8 0%, #7C3AED 100%)"
      }
    },
  },
  plugins: [],
}