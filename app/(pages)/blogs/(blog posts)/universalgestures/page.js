import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import BackButton from "@/app/components/BackButton";
import ImageHeader from "@/app/components/ImageHeading";
import BlogDescrip from "../../BlogDescrip";

import UG from "@/public/images/photos/universalgestures/universalgesturesblogthumbnail.png";

export default function UniversalGestures() {
  return (
    <div className="bg-[url('/images/assets/grid.png')]">
      <NavBar />
      <main className="px-24 py-6|| max-md:px-8 || max-mobile:px-4">
        <BackButton />
        <div className="max-w-1360 mx-auto grid md:gap-y-12">
          <ImageHeader title="Introducing Universal Gestures" img={UG} />
          <BlogDescrip
            title="Waterloo Reality Labs has developed 5 on-device machine learning models that can recognize complex hand shapes from a first-person perspective."
            body={[
              <p key="1">
                <b>
                  Releasing today to Unity developers in preview, Universal Gestures raises the bar for ease-of-use and accessibility when implementing gesture recognition in VR.
                </b>
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
            date="01/01/2025"
            description="Authored by Justin Lin, Brian Zhang, Varun Parikh, Sandra Huang, Lily Ni, Brandon Ling, Nathanael Richard Ha Hanes, and Charlotte Ma of Waterloo Reality Labs"
          />
        </div>
        <a href="/blogs" className="my-16 button-styling font-neraphic border-dashed border-bck-grey border-2 mx-auto">View More Blogs</a>
      </main>
      <Footer />
    </div>
  );
}
