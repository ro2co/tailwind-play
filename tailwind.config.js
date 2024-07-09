/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: "16px",
        label1: [
          "var(--font-size-12)",
          {
            fontWeight: "var(--font-weight-regular)",
            lineHeight: "var(--line-height-sm)",
            letterSpacing: "var(--letter-spacing-none)",
          },
        ],
      }
    },
  },
  plugins: [],
}

