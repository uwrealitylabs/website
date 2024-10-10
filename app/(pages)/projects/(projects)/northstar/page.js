import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import ImageHeader from "../../../../components/ImageHeading";
import ProjDescrip from "../../ProjDescrip";
import ContentImages from "../../ContentImages";
import JoinUs from "@/app/components/JoinUs";
import BackButton from "@/app/components/BackButton";

import NorthStar from "@/public/images/photos/northstar/northstar.png";
import FrontView from "@/public/images/photos/northstar/frontview.png";
import OnHead2 from "@/public/images/photos/northstar/onhead2.png";
import PCB from "@/public/images/photos/northstar/pcb.png";
import TopView from "@/public/images/photos/northstar/topview.png";

export default function Northstar() {
  return (
    <div className="bg-[url('/images/assets/grid.png')] bg-bck-white">
      <NavBar />
      <main className="px-24 py-6 grid gap-y-16 || max-lg:px-12  || max-mobile:px-4">
        <div>
          <BackButton />
          <ImageHeader title="Project North Star" img={NorthStar} />
        </div>

        <ProjDescrip
          projecttype="AR Hardware"
          details="A fully self-contained AR device based on Ultraleap's Project North Star"
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
              Wand-style controllers, which we&apos;ll show below.
            </p>,

            <p key="12">
              From this headset, we plan to build other systems, such as an
              inside-out 6DoF tracking solution using visual-inertial odometry,
              or a varifocal optical stack using eye tracking and motors or
              voice coils.
            </p>,
          ]}
          //   link="https://github.com/uwrealitylabs/realityfromscratch"
        />

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
