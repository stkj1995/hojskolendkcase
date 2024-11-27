/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],


  theme: {
    extend: {
      /* Farvepalette */
      colors: {
        transparent: "transparent",
        current: "currentColor",
        orange: {
          50: "#FFF1E5", // beige
          100: "#FFE2CC",
          200: "#FFC599",
          300: "#FFA866",
          400: "#FF8B33",
          500: "#FF6E00", // orange
          600: "#CC5800",
          700: "#994200",
          800: "#662C00",
          900: "#331600",
        },
        blue: {
          50: "#F2F5F8",
          100: "#E5EBF0", // lightblue
          200: "#C8D4DF",
          300: "#AEC0D0",
          400: "#91A9BF",
          500: "#7794B0", // blue
          600: "#567694",
          700: "#425A71",
          800: "#2B3B4A",
          900: "#161F27",
        },
        white: "#fff", // white
        black: "#000", // black
        beige: "#FFF1E5", // beige
      },
      backgroundColor: {
        beige: "#FFF1E5", // Brug samme farve til baggrund
      },
      textColor: {
        white: "#FFF", // Hvid som tekstfarve
        black: "#000", // Sort tekstfarve
      },
   

      /* Spacing */
      spacing: {
        "spacing-none": "0",
        xs: "15px",
        s: "20px",
        sm: "30px",
        m: "42px",
        ml: "49px",
        lg: "60px",
        xl: "75px",
        "1xl": "88px",
        "2xl": "96px",
        "3xl": "107px",
        "4xl": "120px",
        "5xl": "132px",
        "6xl": "148px",
        "7xl": "152px",
        "8xl": "162px",
      },

      /* Fonte */
      fontFamily: {
        onestBlack: ["Onest-Black", "sans-serif"],
        onestRegular: ["Onest-Regular", "sans-serif"],
        albert: ["Albert Sans", "sans-serif"],
        londrina: ["Londrina Solid", "sans-serif"],
      },

      /* Typografisk hierarki */
      fontSize: {
        xs: "13px",
        sm: "15px",
        base: "18px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "36px",
        "4xl": "40px",
        "5xl": "44px",
        "6xl": "45px",
        "7xl": "52px",
        "8xl": "64px",
        "9xl": "90px",
      },

      /* Fontvægt */
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },

      /* Border størrelser */
      borderWidth: {
        DEFAULT: "1px",
        0: "0px",
        2: "2px",
        3: "3px",
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "32px",
        "2xl": "128px",
        "3xl": "360px",
      },

      /* Border radius størrelser */
      borderRadius: {
        DEFAULT: "1.25rem",
        none: "0px",
        20: "20px",
        30: "30px",
        50: "50px",
        100: "100px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
