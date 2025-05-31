export const metadata = {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
};

import NavBar from "@/app/components/NavBar";
import ProjectCard from "./projectCard";
import Footer from "@/app/components/Footer";
import JoinUs from "@/app/components/JoinUs";
import Image from "next/image";

import Shapes from "@/public/images/assets/shapes.png"
import RealityFromScratch from "@/public/images/photos/realityfromscratch/reality-from-scratch.png"
import ProjectNorthStar from "@/public/images/photos/northstar/northstar.png"
import UniversalGestures from "@/public/images/photos/universalgestures/socratica-uni-gestures.png"
import UniversalText from "@/public/images/photos/universaltext/UTDemo.png"
import VITracker from "@/public/images/photos/vitracker/vitracker_v0_s5.png"
import HorizontalRender from "@/public/images/photos/vitracker/vitracker_v0_s3.png";

import Anima from "@/public/images/photos/anima/anima.png"
import Humanoid from "@/public/images/photos/humanoid/humanoid.png"

export default function Projects() {
  return (
    <>
      <NavBar />
      <section
        className="bg-bck-white bg-[url('/images/assets/grid.png')] px-24 py-12 || max-md:px-8 || max-mobile:px-4">
        <main>
          <header className="flex justify-between items-end gap-24 mb-12">
            <div className="max-w-640 flex flex-col gap-4">
              <h1 className="font-neraphic text-h2 text-text-darkBody max-md:text-h3">
                The Project Collective
              </h1>
              <p className="font-suse text-bodyLarge leading-normal text-text-darkBody">
                See how we’ve turned ideas into{" "}
                <span className="line-through">virtual</span> reality.{" "}
                <span className="text-grey-40">
                  Dive into our teams’ current research.
                </span>
              </p>
            </div>
            <Image
              src={Shapes}
              className="h-10 w-auto max-md:hidden"
              alt=""
            />
          </header>

          {/* ---PROJECT CARDS--- */}
          <section
            className="grid grid-cols-2 gap-x-6 gap-y-16
        ---786px---
        max-md:gap-y-12 

        ---520px---
        max-mobile:gap-y-8

        "
          >
            <ProjectCard
              title="Humanoid"
              descrip={[
                "Ambitious project to assemble a ",
                <b key="humanoid">humanoid bot with high dexterity</b>,
                ", that can be tele-operable via VR and autonomous via sensors.",
              ]}
              img={Humanoid}
              link="humanoid"
            />
            <ProjectCard
              title="Reality From Scratch"
              descrip={[
                "By using an IMU connected to an Arduino Pro Micro, we achieved ",
                <b key="rotational">rotational (3DoF) tracking.</b>,
                " The IMU motion vector data is translated into SteamVR readable input through drivers forked from the OpenVR SDK.",
              ]}
              img={RealityFromScratch}
              link="realityfromscratch"
            />
            <ProjectCard
              title="Project Northstar"
              descrip={[
                "A fully self-contained ",
                <b key="proj AR">AR device</b>,
                " using optical combiners and Intel's RealSense T265. Based on Ultraleap's Project North Star.",
              ]}
              img={ProjectNorthStar}
              link="northstar"
            />
            <ProjectCard
              title="Universal Gestures"
              descrip="Using deep learning to understand hand-tracked movements."
              img={UniversalGestures}
              link="universalgestures"
            />
            <ProjectCard
              title="VITracker"
              descrip="Building custom hardware for real-time visual-inertial SLAM tracking"
              img={HorizontalRender}
              link="vitracker"
              grid=""
            />
            <ProjectCard
              title="Universal Text"
              descrip="Developing a structured software package for Unity that provides a dynamic textual representation of a user's virtual environment and their interactions within it"
              img={UniversalText}
              link="universaltext"
              grid="double"
            />
            <ProjectCard
              title="Anima"
              descrip="Developing a Unity VR app for Meta Quest that lets users explore full-scale photogrammetry scans of real-world buildings"
              img={Anima}
              link="anima"
              grid="double"
            />
          </section>
          <JoinUs />
        </main>
      </section>
      <Footer />
    </>
  );
}
