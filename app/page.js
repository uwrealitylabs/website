"use client";
import { useRef } from "react";

import "./page.css";
import ButtonDark from "@/app/components/ButtonDark";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Card from "./(pages)/home/card";

import Image from "next/image";
import ProjectStandalone from "@/public/images/photos/project-standalone/project-standalone-hero.png";
import RFSHeadset from "@/public/images/photos/realityfromscratch/headset.png";
import VITracker from "@/public/images/photos/vitracker/teammeeting.png";
import NorthStar from "@/public/images/photos/northstar/northstar-headset.png";
import UniversalGestures from "@/public/images/photos/universalgestures/socratica.jpeg";
import UniversalText from "@/public/images/photos/universaltext/UTDemo.png";
import Anima from "@/public/images/photos/anima/anima.png";
import Humanoid from "@/public/images/photos/humanoid/humanoid.png";
import LogoAnimation from "@/public/images/assets/uwrl-logo-animation.gif";
import NotionLogo from "@/public/images/assets/notion-logo.webp";
import WeefLogo from "@/public/images/assets/weef_logo.webp";
import QuadoaLogo from "@/public/images/assets/quadoa_logo.svg";

export default function App() {
  const Projects = useRef(null);

  const ScrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <NavBar />
      {/* --------------- HERO SECTION -------------------- */}
      <header
        className="hero       
      bg-[url('/images/assets/grid.png')] bg-bck-white 
      flex justify-center items-center"
      >
        <div
          className="
        hero-main 
        bg-[url('/images/assets/iso-grid-hero.webp'),_url('/images/assets/city.webp')] bg-bck-white bg-no-repeat bg-bottom
        relative 
        flex justify-center items-center flex-col gap-7
        border-solid border-bck-grey border-1 rounded-2xl
        my-12 mx-32 
        ---1024px---
        max-lg:mx-20
        ---768px--- 
        max-md:mx-6
        max-md:pb-10
        ---520px--- 
        max-mobile:mx-2 max-mobile:my-6 max-mobile:h-96
        "
        >
          <span
            className="font-suse font-bold text-body leading-normal
          ---520px---
          max-md:text-sm
          "
          >
            VR/AR/XR - Spatial Computing
          </span>
          <div className="flex flex-col gap-6 items-center mb-36">
            <h1
              className="font-neraphic text-h1 max-w-990 wrap text-center px-24
            ---1024px---
            max-lg:px-12

            ---768[x--- 
            max-md:text-h3
            
            ---520px---
            max-mobile:text-h4

            max-[600]:text-h4
            
            "
            >
              The University of Waterloo&apos;s XR and spatial computing design
              team.
            </h1>
            <button
              onClick={() => ScrollToSection(Projects)}
              className="bg-bck-grey text-text-lightBody button-styling font-normal font-neraphic group hover:scale-x-97 duration-300"
            >
              Dive Deeper
              <img
                src="images/icons/arrow-right-white.png"
                className="w-4 mb-1 group-hover:rotate-[90deg] duration-300"
                alt=""
              />
            </button>
          </div>
        </div>
      </header>

      {/* --------------- PROJECTS SECTION -------------------- */}
      <section
        className="bg-bck-grey bg-[url('/images/assets/grid-dark.png'),_url('/images/assets/proj-vectors.png')] bg-no-repeat bg-center bg-cover 
      text-text-lightBody 
      flex flex-col items-center justify-center px-20 || max-lg:px-6 || max-md:rounded-3xl
      "
        id="projects"
        ref={Projects}
      >
        <h2 className="font-neraphic text-h2 py-24 || max-md:text-h3 || max-mobile:pb-16">
          Our Projects
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-3 gap-6 max-w-1360 || max-lg:grid-cols-2 || max-lg:mx-6  || max-sm:grid-cols-1 max-sm:mx-6 || ">
          <Card
            heading="Project Standalone"
            body={[
              "TBD ",
              <b key="standalone">TBD</b>,
              " TBD.",
            ]}
            link="/projects/project-standalone"
            image={ProjectStandalone}
          />
          <Card
            heading="Reality From Scratch"
            body={[
              "Our magnum opus: a ",
              <b key="">VR headset</b>,
              " built from open-source principles",
            ]}
            link="/projects/realityfromscratch"
            image={RFSHeadset}
          />
          <Card
            heading="Humanoid"
            body={[
              "Ambitious project to assemble a ",
              <b key="humanoid">humanoid bot with high dexterity</b>,
              ", that can be tele-operable via VR and autonomous via sensors.",
            ]}
            link="/projects/humanoid"
            image={Humanoid}
          />
          <Card
            heading="VITracker"
            body="Building custom hardware for real-time visual-inertial SLAM tracking"
            link="/projects/vitracker"
            image={VITracker}
          />
          <Card
            heading="North Star"
            body={[
              "An open-source, birdbath optics-based ",
              <b key="1">AR headset</b>,
              " built from scratch",
            ]}
            link="/projects/northstar"
            image={NorthStar}
          />
          <Card
            heading="Universal Gestures"
            body="Using on-device machine learning to recognize hand gestures on Meta Quest"
            link="/projects/universalgestures"
            image={UniversalGestures}
          />
          <Card
            heading="Universal Text"
            body="Unity software package for dynamic text representation of a user's virtual environment."
            link="/projects/universaltext"
            image={UniversalText}
          />
          <Card
            heading="Anima"
            body="Unity VR app for exploring life-sized, real-world building scans."
            link="/projects/anima"
            image={Anima}
          />
        </div>

        <a
          href="/projects"
          className="
           w-fit
           button
           border-solid border-bck-white border-2
           bg-bck-grey
           rounded-lg font-bold font-suse text-body leading-normal px-6 py-4 mb-24 mt-12
           hover:bg-bck-white hover:text-text-darkBody hover:scale-y-97 duration-300 ease-in-out
           "
        >
          View All Projects
        </a>
      </section>

      {/* --------------- ABOUT SECTION -------------------- */}
      <section
        className=" bg-[url('/images/assets/grid.png')] bg-bck-white
      "
      >
        {/* --MAIN ABOUT CONTENT --*/}
        <div
          className="px-64 py-28
          grid grid-cols-2 gap-x-24 max-w-1360 mx-auto justify-center items-center


        ---1536---
        2xl:px-0 lg:px-12

        ---1024px---
        max-lg:px-24 max-lg:gap-x-14

        ---768px---
        max-md:px-12 max-md:gap-x-12

        ---520px---
        max-mobile:gap-y-12 max-mobile:px-6

        "
        >
          {/* TEXT SECTION */}
          <div
            className="max-w-lg 
          ---1024px---
          min-lg:min-w-72

          ---520px---
          max-mobile:col-span-2
          
          
          "
          >
            <span className="font-bold text-body leading-normal bg-[url('/images/assets/paper-tape.png')] bg-contain bg-no-repeat bg-center p-5">
              About Us
            </span>
            <div className="flex flex-col gap-4">
              <>
                <h2
                  className="font-neraphic text-h2 mt-6 leading-tight
            ---1024px---
            max-lg:text-h3

            --520px---
            max-mobile:text-h4
            "
                >
                  We venture into the rift between dimensions.
                </h2>
              </>

              <>
                <p className="font-suse text-body 2xl:text-bodyLarge leading-normal">
                  <b className="block">
                    Researching, experimenting, and building.
                  </b>
                  <span className="block">
                    We create real-life interfaces for the virtual world.
                  </span>
                </p>
                <p className="font-suse text-body  2xl:text-bodyLarge leading-normal">
                  Waterloo Reality Labs is the{" "}
                  <b>first design team in Canada</b> that offers students
                  hands-on experience with consumer VR (virtual reality) and AR
                  (augmented reality) technologies.
                </p>
              </>
              <ButtonDark
                text="Docs"
                icon="/images/icons/arrow-right-white.png"
                link="https://uwrl.notion.site/"
                target="yes"
              />
            </div>
          </div>
          {/* LOGO */}
          <Image
            alt=""
            src={LogoAnimation}
            unoptimized
            className=" ml-auto 
            ---520px---
            max-mobile:row-start-2 max-mobile:row-span-2 max-mobile:col-span-2 max-mobile:mx-auto 
          "
          />
        </div>





        {/* SPONSORSHIP SECTION */}
        <section
          className="pb-24 grid grid-cols-2 2xl:max-w-1500 mx-auto
        ---1536px---
        max-2xl:mx-20

        ---768px---
        max-md:mx-12

        ---520px---
        max-mobile:gap-y-6
        "
        >
          <h2
            className="text-h2 font-neraphic text-text-darkBody max-w-900 

          ---1024px---
          max-lg:text-h3

          ---520px---
          max-mobile:text-button max-mobile:leading-snug max-mobile:col-span-2  
          "
          >
            Interested in supporting our research?
            <span className="text-grey-60">
              {` View our sponsorship benefits.`}
            </span>
          </h2>
          <div
            className="ml-auto
          ---520px---
          max-mobile:col-span-2 max-mobile:mx-0
          "
          >
            <ButtonDark
              text="Sponsor package"
              border="-bck-white"
              target="yes"
              link="/documents/Waterloo-Reality-Labs-Sponsor-Package-2024.pdf"
              icon="/images/icons/arrow-right-white.png"
            />
          </div>
        </section>
        {/* SPONSORS */}
        <div className="max-w-1360 mx-auto flex items-center flex-col gap-24 py-24">
          <h2 className="text-h2 font-neraphic max-sm:text-h3">Our Sponsors</h2>

          <section className="grid grid-cols-3 mx-44 gap-24 items-center justify-center max-lg:grid-cols-2 max-sm:mx-12 16 max-sm:grid-cols-1">
            <Image src={WeefLogo} alt=""  className="mx-auto"/>
            <Image src={NotionLogo} alt="" className="mx-auto"/>
            <Image
              src={QuadoaLogo}
              alt=""
              className="max-lg:col-span-full max-lg:sm:max-w-64 max-lg:sm:w-auto mx-auto max-w-96 w-full"
            />
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
