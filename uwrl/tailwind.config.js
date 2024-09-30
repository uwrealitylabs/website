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
    },
    extend: {
      spacing: {
        360: "35rem",
        1360: "85rem",
      },
      padding: {
        4.5: "1.125rem",
      },
      width: {
        990: "62rem",
        830: "52rem",
        325: "20rem",
        390: "24.3rem",
        495: "31rem",
      },
      height: {
        830: "52rem",
        370: "23rem",
        425: "27rem",
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
    },
  },
  plugins: [],
};
