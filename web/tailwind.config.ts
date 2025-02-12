import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        borderFill: "borderFill 7s ease-in-out forwards",
      },
      backgroundImage: {
        hrLine: "url('/images/hrLine.png')",
      },
      keyframes: {
        borderFill: {
          "0%": {
            transform: "scaleX(0)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
      },
      colors: {
        background: "var(--background)",
        maroon: "var(--maroon)",
        darkMaroon:"var(--darkMaroon)",
        pink:"var(--pink)",
        darkPink:"var(--darkPink)",
        lightPink:"var(--lightPink)",
        darkPurple:"var(--darkPurple)",
        darkRed:"var(--darkRed)",
        pinkShade:"var(--pinkShade)",
        darkShade:"var(--darkShade)",
        gray900:"var(--gray-900)",
        gray500:"var(--gray-500)",
      },
      spacing: {
        'calc-padding': 'calc(1245px * 0.02)',
      },
      borderRadius:{
         xxl:'32px'
      },
      fontSize:{
         84:'84px',
         64:'64px',
         52:'52px',
         50:'50px',
         46:'46px',
         44:'44px',
         42:'42px',
         40:'40px', 
         38:'38px',
         36:'36px',
         32:'32px',
         30:'30px',
         26:'26px',
         24:'24px',
         22:'22px'
      },
    },
    screens: {
      lsm: "350px",

      esm: "400px",

      em: "480px",

      ew: "500px",

      vem: "560px",

      sm: "640px",

      md: "768px",

      emd: "1000px",

      lg: "1024px",

      xlg: "1150px",

      xl: "1280px",

      mxl: "1300px",

      "1xl": "1440px",

      "2xl": "1530px",

      "3xl": "1832px",

      "4xl": "1920px",
    },
    boxShadow: {
      buttonHovershadow: "0 20px 38px rgba(0, 0, 0, 0.16)",
      headerShadow:"5px 8px 13px -8px rgba(0,0,0,0.20)",
      cardSolutionShadow:"0px 8px 12px 0px rgba(0, 0, 0, 0.25)"
    },
    fontFamily: {
      Inter: "Inter, serif",
      Kulim: "Kulim Park, serif",
    },
  },
  plugins: [],
} satisfies Config;
