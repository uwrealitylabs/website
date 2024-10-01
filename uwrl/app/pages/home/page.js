export const metadata = {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
};

import "./page.css";
import ButtonDark from "@/app/components/ButtonDark";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Card from "./card";
import ButtonSecondary from "@/app/components/ButtonSecondary";

export default function Home() {
  return (
    <div>
      <NavBar />
      {/* --------------- HERO SECTION -------------------- */}
      <main
        className="hero       
      bg-[url('/images/assets/grid.png')] bg-bck-white 
      flex justify-center items-center"
      >
        <div
          className="
        hero-main 
        bg-[url('/images/assets/iso-grid-hero.png'),_url('/images/assets/city.png')] bg-bck-white bg-no-repeat bg-bottom
        relative 
        rounded-2xl
        flex justify-center items-center flex-col gap-7
        border-solid border-bck-grey border-1
        "
        >
          <span className="font-suse font-bold text-body leading-normal">
            VR/AR/XR - Spatial Computing
          </span>
          <div className="flex flex-col gap-6 items-center mb-36">
            <h1 className="font-neraphic text-h1 max-w-990 text-center px-24">
              The University of Waterloo's XR and spatial computing design team.
            </h1>
            <ButtonDark
              text="Dive Deeper"
              target="#"
              icon="/images/icons/arrow-right-white.png"
            />
          </div>
        </div>
      </main>

      {/* --------------- PROJECTS SECTION -------------------- */}
      <section
        className="bg-bck-grey bg-[url('/images/assets/grid-dark.png'),_url('/images/assets/proj-vectors.png')] bg-no-repeat bg-center bg-cover 
      text-text-lightBody 
      flex flex-col items-center justify-center px-24
      "
      >
        <h2 className="font-neraphic text-h2 py-24">Our Projects</h2>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          <Card
            heading="Reality From Scratch"
            body={[
              "Building a custom ",
              <b key="2">VR headset</b>,
              " from scratch",
            ]}
            link=""
            image=""
          />
          <Card
            heading="Northstar"
            body={[
              "Building a working ",
              <b key="1">AR headset</b>,
              " from scratch",
            ]}
            link=""
            image=""
          />
          <Card
            heading="Universal Gestures"
            body="Using deep learning to understand hand-tracked movements"
            link=""
            image=""
          />
          <Card
            heading="DeepFocus (Redux)"
            body="Creating natural, eye-like defocus blur in real-time game engines for VR"
            link=""
            image=""
          />
          <Card
            heading="Varifocal"
            body="Bringing adjustable focus to VR headsets"
            link=""
            image=""
          />
        </div>

        <a
          href="/pages/projects"
          className="
           w-fit
           button
           border-solid border-bck-white border-2
           bg-bck-grey
           rounded-lg font-bold font-suse text-body leading-normal px-6 py-4 mb-24 mt-12"
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
          grid grid-cols-2 gap-x-24


        ---1536---
        max-2xl:px-40

        ---1024px---
        max-lg:px-32 max-lg:gap-x-14

        ---768px---
        max-md:px-12 max-md:gap-x-12

        ---520px---
        max-mobile:gap-y-12 max-mobile:px-6

        "
        >
          {/* TEXT SECTION */}
          <div className="max-w-lg 
          ---1024px---
          min-lg:min-w-72

          ---520px---
          max-mobile:col-span-2
          
          
          ">
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
                <p className="font-suse text-body leading-normal">
                  <b className="block">
                    Researching, experimenting, and building.
                  </b>
                  <span className="block">
                    We create real-life interfaces for the virtual world.
                  </span>
                </p>
                <p className="font-suse text-body leading-normal">
                  UW Reality Labs is the <b>first design team in Canada</b> that
                  offers students hands-on experience with consumer VR (virtual
                  reality) and AR (augmented reality) technologies.
                </p>
              </>
              <ButtonDark
                text="About us"
                icon="/images/icons/arrow-right-white.png"
                link="/pages/about"
              />
            </div>
          </div>
          {/* LOGO */}
          <img
            src="/images/assets/uwrl-logo-main.png"
            className=" ml-auto max-w-xs w-full 
            ---520px---
            max-mobile:row-start-2 max-mobile:row-span-2 max-mobile:col-span-2 max-mobile:mx-auto 
          "
          />
        </div>

        {/* SPONSORSHIP SECTION */}
        <section
          className="pb-24 mx-44 grid grid-cols-2
        ---1536px---
        max-2xl:mx-20

        ---768px---
        max-md:mx-12

        ---520px---
        max-mobile:gap-y-6
        "
        >
          <h2 className="text-h2 font-neraphic text-text-darkBody max-w-900 

          ---1024px---
          max-lg:text-h3

          ---520px---
          max-mobile:text-button max-mobile:leading-snug max-mobile:col-span-2  
          ">
            Interested in supporting our research?
            <span className="text-grey-60">
              {` View our sponsorship benefits.`}
            </span>
          </h2>
          <div className="ml-auto
          ---520px---
          max-mobile:col-span-2 max-mobile:mx-0
          ">
            <ButtonDark
              text="Sponsor package"
              border="-bck-white"
              target="yes"
              link="/documents/Waterloo-Reality-Labs-Sponsor-Package-2024.pdf"
              icon="/images/icons/arrow-right-white.png"
            />
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}
