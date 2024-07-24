/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FF9401",
        titleColor: "var(--title)",
        mutedColor: "var(--muted)",
        searchInputColor: "var(--searchInput)",
        skeletonDetailsColor: "var(--skeletonDetails)",
        skeletonShadowColor: "var(--skeletonShadow)",
        inputBgColor: "var(--inputBg)",

        lightColor: "#ffffff",
        backgroundColor: "var(--background)",
        lightBg: "#ffffff",
        darkBg: "#0D0D0D",
        boxBg: "var(--box)",
      },
    },
    screens: {
      xs: "540px",
      sm: "640px",
      // => @media (min-width: 640px)

      md: "768px",
      // => @media (min-width: 768px)
      xlg: "992px",

      lg: "1024px",
      // => @media (min-width: 1024px)

      xl: "1280px",
      // => @media (min-width: 1280px)

      "2xl": "1536px",
      // => @media (min-width: 1536px)
      "3xl": "1720px",
    },
  },
  plugins: [require("daisyui")],
};
