import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import ImageHeader from "../../../../components/ImageHeading";
import ProjDescrip from "../../ProjDescrip";
import ContentImages from "../../ContentImages";
import JoinUs from "@/app/components/JoinUs";
import BackButton from "@/app/components/BackButton";

import ProjectStandaloneHero from "@/public/images/photos/project-standalone/horizonos.png";
import FrontView from "@/public/images/photos/northstar/frontview.png";
import OnHead2 from "@/public/images/photos/northstar/onhead2.png";
import PCB from "@/public/images/photos/northstar/pcb.png";
import TopView from "@/public/images/photos/northstar/topview.png";

export default function ProjectStandalone() {
  return (
    <div className="bg-[url('/images/assets/grid.png')] bg-bck-white">
      <NavBar />
      <main className="px-24 py-6 grid gap-y-16 || max-lg:px-12  || max-mobile:px-4">
        <div>
          <BackButton />
          <ImageHeader title="Project Standalone" img={ProjectStandaloneHero} />
        </div>

        <ProjDescrip
          projecttype="Open XR Systems"
          details="A fully open, standalone XR system inspired by Project Northstar."
          heading="Open hardware and software for the first standalone Northstar-class headset."
          description={[
            <p key="1">
            Project Standalone is a brand-new, long-term effort at UW Reality Labs to build a fully open, standalone XR system with open hardware and software.
            </p>,
            <p key="2"> 
            We’re taking inspiration from Project Northstar, a well-known open-source mixed-reality headset originally developed by Leap Motion. Northstar is respected for its wide field of view, high-resolution displays, and optical see-through AR design, and it remains one of the most capable open source XR hardware platforms available.  Currently, the Northstar headset requires an external device (e.g., a PC) to be functional. Though this was a common requirement in older headsets, newer models like the Meta Quest 3 have dropped this setup and are now standalone. That is, they no longer require any external hardware other than the headset itself.            </p>,
            <p key="3">
            So, at UWRL, we’ve decided to take it a step further and ask: How can we make Project Northstar standalone? Though seemingly straightforward, this has become an involved project requiring effort in both hardware design and software development.
            </p>,
            <p key="4">
            We’re not stopping at the hardware level; we’re building the software too. Our goal is to build the first open, XR software stack that brings together the pieces people need to actually build and experiment with immersive systems.
            </p>,
            <p key="5">
              This work is ambitious by design. We are building a Linux-based system that runs entirely on the headset, powered by embedded compute, custom drivers, and an OpenXR runtime. On top of that, we’re developing a custom XR launcher and user interface in Godot, along with support for WebXR experiences, so the headset can boot directly into immersive environments without a PC.
            </p>,
            <p key="6">
              If you join Project Standalone, you’ll be working on real systems, not demos or abstractions. Some members will focus on operating systems and systems-level work. Others will work closer to user-facing XR software, including building the system launcher and shell in Godot, designing XR windowing behaviour, and shaping how users interact with the headset (i.e., gesture UX; universal gestures is not the only team that touches interaction!). 
            </p>,
            <p key="7">
              The kind of work done here - XR runtimes, embedded graphics, hardware integration- is typically locked behind industry roles or proprietary platforms. The scope is broad by necessity, and contributors should expect to develop a rare understanding of how XR systems actually work in practice.
            </p>,
          ]}
          // link=""
        />

        <section className="text-bodyLarge font-suse leading-normal md:w-1/2 max-mobile:text-body">
          <h2 className="text-h2 font-neraphic leading-snug max-md:text-h3 max-mobile:text-h4">
            Why Standalone?
          </h2>
          <br />
          <p>
            Standalone headsets remove the need for tethered PCs and open up new
            ways to prototype XR systems. We are building a self-contained
            platform that still stays open, modifiable, and research-friendly.
          </p>
        </section>

        <section className="text-bodyLarge font-suse leading-normal md:w-1/2 max-mobile:text-body">
          <h2 className="text-h2 font-neraphic leading-snug max-md:text-h3 max-mobile:text-h4">
            What You Might Build
          </h2>
          <br />
          <p>
            Expect to dive into OpenXR runtime, custom drivers, and a Godot-based launcher shell. We are also exploring WebXR
            boot flows and next-generation interaction models beyond standard controllers.
          </p>
        </section>

        <section className="mobile:grid mobile:grid-cols-2 mx-auto max-mobile:flex max-mobile:flex-col gap-6 my-16">
          <ContentImages photo={TopView} grid="full" />
          <ContentImages photo={PCB} />
          <ContentImages photo={FrontView} />
          <ContentImages photo={OnHead2} grid="full" />
        </section>
        <JoinUs />

      </main>
      <Footer />
    </div>
  );
}
