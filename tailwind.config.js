/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1E293B",
        sky: "#38BDF8",
        success: "#22C55E",
        violet: "#7C3AED"
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0,0,0,0.15)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      backgroundImage: {
        'grid': "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)"
      }
    },
  },
  plugins: [],
}