import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import ImageHeader from "../../../../components/ImageHeading";
import ProjDescrip from "../../ProjDescrip";
import ContentImages from "../../ContentImages";
import JoinUs from "@/app/components/JoinUs";
import BackButton from "@/app/components/BackButton";

import ProjectStandaloneHero from "@/public/images/photos/northstar/northstar.png";
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
              Project Standalone is a new, long-term effort to build a fully open
              XR system with open hardware and software. We take inspiration from
              Project Northstar, the open-source mixed-reality headset known for
              its wide field of view, high-resolution displays, and optical
              see-through AR design.
            </p>,
            <p key="2">
              Northstar relies on an external device to run. Our goal is to make
              this platform fully standalone, with embedded compute, custom
              drivers, and a Linux-based OS running entirely on the headset.
            </p>,
            <p key="3">
              We are building the software stack alongside the hardware: an
              OpenXR runtime, a custom launcher and UI in Godot, and support for
              WebXR experiences so the system can boot directly into immersive
              environments.
            </p>,
            <p key="4">
              This work is ambitious by design. You will work on real systems,
              from embedded graphics and drivers to XR windowing behavior and
              interaction design. Project Standalone welcomes members of all
              majors and experience levels.
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
            Expect to dive into embedded compute, custom drivers, OpenXR runtime
            work, and a Godot-based launcher shell. We are also exploring WebXR
            boot flows and next-generation interaction models beyond standard
            controllers.
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
