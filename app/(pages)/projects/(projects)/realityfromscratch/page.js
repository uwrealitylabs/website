import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import ImageHeader from "../../../../components/ImageHeading";
import ProjDescrip from "../../ProjDescrip";
import ContentImages from "../../ContentImages";
import JoinUs from "@/app/components/JoinUs";
import BackButton from "@/app/components/BackButton";

import RFS from "@/public/images/photos/realityfromscratch/reality-from-scratch.png"
import Headset from "@/public/images/photos/realityfromscratch/headset.png"
import GroupPhoto from "@/public/images/photos/realityfromscratch/groupphoto.png"
import PCB2 from "@/public/images/photos/realityfromscratch/pcb2.png"
import Materials from "@/public/images/photos/realityfromscratch/material.png"
import PCB1 from "@/public/images/photos/realityfromscratch/pcb1.png"


export default function RealityFromScratch() {
  return (
    <div className="bg-[url('/images/assets/grid.png')] bg-bck-white">
      <NavBar />
      <main className="px-24 py-6 grid gap-y-16 || max-lg:px-12  || max-mobile:px-4">
        <div>
        <BackButton/>
        <ImageHeader
          title="Reality From Scratch"
          img={RFS}
          notion={"https://uwrl.notion.site/Reality-From-Scratch-Rev-1-111bc072402f8065bb76e64282b62d98"}
          />
          </div>

        <ProjDescrip
          projecttype="VR Hardware"
          details="The modular, open-source VR headset for research and experimentation."
          heading="The modular, open-source VR headset for research and experimentation."
          description={[
            <p key="9">
              We are building our very own, fully custom VR headset. We call it
              Reality from Scratch.
            </p>,

            <p key="10">
              We first soldered an inertial measurement unit (IMU) and
              microcontroller unit (MCU) together, and got real-time motion
              vector data translated into SteamVR with drivers forked from the
              OpenVR SDK. Then, the VR Compositor output was routed to our VR
              displays, which comes with accompanying lenses and a custom
              3D-printed housing. In addition to the HMD, we are building Vive
              Wand-style controllers, which we'll show below.
            </p>,

            <p key="12">
              From this headset, we plan to build other systems, such as an
              inside-out 6DoF tracking solution using visual-inertial odometry,
              or a varifocal optical stack using eye tracking and motors or
              voice coils.
            </p>,
          ]}
          link="https://github.com/uwrealitylabs/realityfromscratch"
        />

        <section className="mobile:grid mobile:grid-cols-2 mx-auto max-mobile:flex max-mobile:flex-col gap-6 my-16">
          <ContentImages photo={Headset} grid="full" />
          <ContentImages photo={GroupPhoto} />
          <ContentImages photo={PCB2} />
          <ContentImages photo={Materials} grid="full" />
          <ContentImages photo={PCB1} grid="full" />
        </section>

        <section className="text-bodyLarge font-suse leading-normal md:w-1/2 max-mobile:text-body">
          <h2 className="text-h2 font-neraphic leading-snug max-md:text-h3 max-mobile:text-h4">Controllers</h2>
          <br/>
          <p>
            Our team has received custom PCBs and other various electrical
            components for the build of 2 DIY Vive Wand-like controllers, which
            will be based off of this WIP open-source guide by LiquidCGS
            (creator of HadesVR).{" "}
          </p>
          <br/>
          <p>
            Each controller will have an IMU, a rechargeable battery, RF
            transceivers, tactile buttons, triggers, and joysticks. The HMD&apos;s
            microcontroller will also be upgraded and moved onto a central PCB.
            We are almost done with soldering.
          </p>
        </section>

        <JoinUs/>
      </main>
      <Footer />
    </div>
  );
}
