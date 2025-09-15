/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1E293B",       // primary
        sky: "#38BDF8",        // accent
        success: "#22C55E"     // CTA green
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0,0,0,0.15)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
}