"use client";
import { useState } from "react";

import ButtonDark from "./ButtonDark";
import ButtonSecondary from "./ButtonSecondary";

export default function NavBar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
    if (!isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav className="w-full bg-bck-white h-20 flex shrink justify-between items-center px-8 border-solid border-grey-60 border-b-1">
      <a href="/" className="flex items-center gap-3">
        <img src="/images/assets/uwrl-logo-main.png" alt="" className="h-14" />
        <h2 className="font-neraphic text-bodyLarge text-text-darkBody tracking-logo || max-lg:hidden mobile:max-md:block">
          Waterloo Reality Labs
        </h2>
      </a>

      <button onClick={toggleOverlay} className="md:hidden">
        {isOverlayOpen ? (
          ""
        ) : (
          <img src="/images/icons/stack.png" alt="nav stack" className="w-6" />
        )}
      </button>

      {isOverlayOpen && (
        <div className="fixed inset-0 bg-[url('/images/assets/grid-dark.png')] bg-black bg-opacity-95 flex items-center justify-center z-50 md:hidden">
          <div className="text-white grid text-center gap-9 font-neraphic text-button">
            <a href="/projects">Projects</a>
            <a href="/blogs">Blog</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <ButtonSecondary
              text="Join the Team"
              link="https://discord.gg/vs9XdfuMJu"
              target="yes"
            />

            <button onClick={toggleOverlay} className="font-suse text-4xl">
              X
            </button>
          </div>
        </div>
      )}

      <div
        className="flex shrink font-normal font-neraphic text-button gap-10 items-center
      max-lg:text-body

      max-md:hidden
      "
      >
        <a href="/projects">Projects</a>
        <a href="/blogs">Blog</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <ButtonDark
          text="Join the Team"
          link="https://discord.gg/vs9XdfuMJu"
          target="yes"
          className="max-lg:text-body"
        />
      </div>
    </nav>
  );
}
