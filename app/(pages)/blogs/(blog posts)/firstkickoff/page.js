import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import BackButton from "@/app/components/BackButton";
import ImageHeader from "@/app/components/ImageHeading";
import BlogDescrip from "../../BlogDescrip";

import RFS from "@/public/images/photos/realityfromscratch/reality-from-scratch.png";

export default function FirstKickoff() {
  return (
    <div className="bg-[url('/images/assets/grid.png')]">
      <NavBar />
      <main className="px-24 py-6|| max-md:px-8 || max-mobile:px-4">
        <BackButton />
        <div className="max-w-1360 mx-auto grid md:gap-y-12">
          <ImageHeader title="Our First Kickoff Meeting!" img={RFS} />
          <BlogDescrip
            title="The modular, open-source VR headset for research and experimentation."
            body={[
              <p key="1">
                We are building our very own, fully custom VR headset. We call
                it Reality from Scratch.
              </p>,
              <br key="2" />,
              <p key="3">
                We first soldered an inertial measurement unit (IMU) and
                microcontroller unit (MCU) together, and got real-time motion
                vector data translated into SteamVR with drivers forked from the
                OpenVR SDK. Then, the VR Compositor output was routed to our VR
                displays, which comes with accompanying lenses and a custom
                3D-printed housing. In addition to the HMD, we are building Vive
                Wand-style controllers, which we'll show below.
              </p>,
              <br key="4" />,
              <p key="5">
                From this headset, we plan to build other systems, such as an
                inside-out 6DoF tracking solution using visual-inertial
                odometry, or a varifocal optical stack using eye tracking and
                motors or voice coils.
              </p>,
            ]}
            date="23/06/2024"
            description="The modular, open-source VR headset for research and experimentation."
          />
        </div>
          <a href="/blogs" className="my-16 button-styling font-neraphic border-dashed border-bck-grey border-2 mx-auto">View More Blogs</a>
      </main>
      <Footer />
    </div>
  );
}
