import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
// Font files can be colocated inside of `pages`
const suse = localFont({
  src: [
    {
      path: "../public/fonts/SUSE-VariableFont_wght.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/SUSE-VariableFont_wght.ttf",
      weight: "700",
    },
  ],
  variable: "--font-suse",
});

const neraphic = localFont({
  src: [
    {
      path: "../public/fonts/Neraphic-BF656d6f197c86d.otf",
    },
  ],
  variable: "--font-neraphic",
});

// const neraphic = localFont({src: './fonts/Neraphic-BF656d6f197c86d.otf'})

export const metadata = {
  title: "Waterloo Reality Labs",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${suse.variable} ${neraphic.variable} `}>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body>{children}</body>
    </html>
  );
}
