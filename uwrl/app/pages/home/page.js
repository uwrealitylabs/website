import "./page.css";
import ButtonDark from "@/app/components/ButtonDark";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Card from "./card";

export default function Home() {
  return (
    <div>
      <NavBar />
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
            <h1 className="font-neraphic text-h1 w-990 text-center">
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
      <section className="bg-bck-grey bg-[url('/images/assets/grid-dark.png'),_url('/images/assets/proj-vectors.png')] bg-no-repeat bg-center bg-cover text-text-lightBody flex flex-col items-center">
        <h2 className="font-neraphic text-h2 py-24">Our Projects</h2>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center items-center mx-44 gap-12">
          <Card
            heading="Reality From Scratch"
            body={["Building a custom ", <b>VR headset</b>, " from scratch"]}
            link=""
            image=""
          />
          <Card
            heading="Northstar"
            body={["Building a working ", <b>AR headset</b>, " from scratch"]}
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
          className="
           w-fit
           button
           border-dashed border-bck-white border-2
           rounded-lg font-bold font-suse text-body px-6 py-4 mb-24 mt-12"
           
        >
          View All Projects
        </a>
      </section>
      <Footer />
    </div>
  );
}
