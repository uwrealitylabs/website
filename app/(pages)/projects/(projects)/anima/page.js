import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import ImageHeader from "../../../../components/ImageHeading";
import ProjDescrip from "../../ProjDescrip";
import JoinUs from "@/app/components/JoinUs";
import BackButton from "@/app/components/BackButton";

import HeaderImage from "@/public/images/photos/anima/anima.png";

export default function Anima() {
  return (
    <div className="bg-[url('/images/assets/grid.png')] bg-bck-white">
      <NavBar />
      <main className="px-24 py-6 grid gap-y-16 || max-lg:px-12  || max-mobile:px-4">
        <div>
          <BackButton />
          <ImageHeader title="Anima" img={HeaderImage} />
        </div>

        <ProjDescrip
          projecttype="Proof of Concept"
          details="A Unity VR application that allows users to explore real-life building scans in true scale using a Meta Quest headset."
          heading="Delivering an immersive and realistic virtual experience"
          description={[
            <p key="">
              We are creating a Unity VR application that allows
              users to explore real-life building scans in true scale using a
              Meta Quest headset. The application will focus on photogrammetry
              scans sourced primarily from OpenHeritage3D, providing detailed
              and accurate models of culturally significant buildings.
            </p>,

            <p key="">
              The project will involve importing and optimising these 3D scans,
              integrating VR interaction systems, and ensuring smooth
              performance on Meta Quest devices. The end goal is to deliver an
              immersive and realistic virtual experience where users can walk
              through and interact with real-world buildings as if they were
              physically present.
            </p>,
            <p key="">
              From the users perspective, they would be able to download the
              Anima application either on the Meta Quest storefront or through
              other means, select one of the preloaded scans or import one into
              the application, and then enter a rendering of the building and be
              able to view it from multiple different angles through the VR
              headset. This would include a 360 degree view of the rendered
              building and the application responding to the orientation of the
              headset.
            </p>,
          ]}
          // link="https://github.com/uwrealitylabs/universal-gestures-unity"
        />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}
