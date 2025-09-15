/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1E293B",
        sky: "#38BDF8",
        success: "#22C55E",
        violet: "#7C3AED",
        surface: "#F7F7FB"
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0,0,0,0.15)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      backgroundImage: {
        'hero': "linear-gradient(180deg, #F0F9FF 0%, #F8F5FF 100%)",
        'tint': "linear-gradient(180deg, rgba(56,189,248,0.08) 0%, rgba(124,58,237,0.06) 100%)",
        'cta': "linear-gradient(90deg, #38BDF8 0%, #7C3AED 100%)"
      }
    },
  },
  plugins: [],
}