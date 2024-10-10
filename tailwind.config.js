
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      1: "1px",
      2: "2px",
      3: "3px"
    },
    extend: {
      screens: {
        mobile: "520px",
        biggest: "1920px",
      },
      spacing: {
        1920: "1920px",
        360: "35rem",
        390: "24.3rem",
        1360: "85rem",
        1500: "94rem",
        990: "75rem",
        900: "56rem",
        830: "52rem",
        280: "17.5rem",
        640: "40rem",
        550: "35rem",
      },
      padding: {
        4.5: "1.125rem",
      },
      width: {
        990: "62rem",
        830: "52rem",
        325: "20rem",
        280: "17.5rem",
        390: "24.3rem",
        495: "31rem",
        340: "21.25rem",
        310: "19.4rem",
      },
      height: {
        830: "52rem",
        370: "23rem",
        425: "27rem",
        700: "43.75rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accents: {
          pink: "#F8979C",
          orange: "#F69B7C",
          yellow: "#E2B029",
          green: "#929965",
          blue: "#357F82",
        },
        text: {
          darkBody: "#2A231E",
          darkSub: "#3D3733",
          lightBody: "#FFFCF3",
          lightSub: "#C9BFB7",
          copyright: "#747474",
        },
        bck: {
          white: "#FFFCF3",
          grey: "#2A231E",
          card: "#322C27",
        },
        grey: {
          60: "#928987",
          40: "#544F4A",
          90: "#443D37",
        },
      },
      fontSize: {
        h1: "3rem",
        h2: "2.25rem",
        h3: "1.875rem",
        h4: "1.5rem",
        subheading: "1.2rem",
        body: "1rem",
        bodyLarge: "1.25rem",
        button: "1.125rem",
      },
      fontFamily: {
        suse: "var(--font-suse)",
        neraphic: "var(--font-neraphic)",
      },
      letterSpacing: {
        logo: "-0.0625rem",
      },
      scale: {
        97: "97%",
        102: "102%",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "16/7": "16 / 7",
        "3/2": "3 / 2",
        "2/1": "2 / 1",
        "15/16": "15 / 16"
      },
      gridTemplateColumns: {
        two: "repeat(2, (2fr, 1fr));",
        projects: "1fr, 1fr, 1fr 4fr",
      },
    },
  },
  plugins: [],
};
