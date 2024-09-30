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
          <span className="font-suse font-bold text-body">
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
      <section className="bg-bck-grey bg-[url('/images/assets/grid-dark.png'),_url('/images/assets/proj-vectors.png')] bg-no-repeat bg-center bg-cover text-text-lightBody flex flex-col items-center justify-center px-24">
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
           rounded-lg font-bold font-suse text-body px-6 py-4 mb-24 mt-12"
        >
          View All Projects
        </a>
      </section>

      {/* --------------- ABOUT SECTION -------------------- */}
      <section className=" bg-[url('/images/assets/grid.png')] bg-bck-white">
        <div className=" flex justify-between items-center  px-64 py-28">
          <div className="max-w-360">
            <span className="font-bold text-body bg-[url('/images/assets/paper-tape.png')] bg-contain bg-no-repeat bg-center p-5">
              About Us
            </span>
            <h2 className="font-neraphic text-h2 mt-4 mb-8 leading-tight">
              We venture into the rift between dimensions.
            </h2>
            <p className="font-suse text-body leading-normal">
              <b className="block">Researching, experimenting, and building.</b>
              <span className="block">
                We create real-life interfaces for the virtual world.
              </span>
            </p>
            <p className="font-suse text-body my-6 leading-normal">
              UW Reality Labs is the <b>first design team in Canada</b> that
              offers students hands-on experience with consumer VR (virtual
              reality) and AR (augmented reality) technologies.
            </p>

            <a className="bg-grey-40 text-text-lightBody button-styling">
              Dive Deeper
              <img
                src="/images/icons/arrow-down-white.png"
                alt="whyyyy"
                className="w-6"
              />
            </a>
          </div>
          <img src="/images/assets/uwrl-logo-main.png" className="w-390" />
        </div>

        {/* SPONSORSHIP SECTION */}
        <section className="py-24 block mx-44 ">
          <div className="bg-bck-grey px-8 py-6 rounded-2xl flex justify-between">
            <h2 className="text-h2 font-neraphic text-text-lightBody max-w-990 ">
              Interested in supporting our research?
              <span className="text-text-lightSub">
               {` View our sponsorship benefits.`}
              </span>
            </h2>
            <ButtonSecondary
              text="SPONSOR PACKAGE"
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
