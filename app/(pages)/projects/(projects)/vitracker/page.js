import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import ImageHeader from "../../../../components/ImageHeading";
import ProjDescrip from "../../ProjDescrip";
import JoinUs from "@/app/components/JoinUs";
import ContentImages from "../../ContentImages";
import BackButton from "@/app/components/BackButton";

import HeaderPhoto from "@/public/images/photos/vitracker/vitracker_v0_s5.png";
import PCBS from "@/public/images/photos/vitracker/pcbs.png";
import TeamMeeting2 from "@/public/images/photos/vitracker/teammeeting2.png";
import HorizontalRender from "@/public/images/photos/vitracker/vitracker_v0_s3.png";
import BackRender from "@/public/images/photos/vitracker/vitracker_v0_s6.png";

export default function VITracker() {
  return (
    <div className="bg-[url('/images/assets/grid.png')] bg-bck-white">
      <NavBar />
      <main className="px-24 py-6 grid gap-y-16 || max-lg:px-12  || max-mobile:px-4">
        <div>
          <BackButton />
          <ImageHeader title="VITracker" img={HorizontalRender} />
        </div>

        <ProjDescrip
          projecttype="Hardware"
          details="Building custom hardware for real-time visual-inertial SLAM tracking"
          heading="Building custom hardware for real-time visual-inertial SLAM tracking"
          description={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          ]}
          //   link="https://github.com/uwrealitylabs/universal-gestures-unity"
        />
        <section className="grid grid-cols-2 gap-6">
          <ContentImages photo={PCBS} grid="" />
          <ContentImages photo={TeamMeeting2} grid="" />
          <ContentImages photo={HorizontalRender} grid="full" />
          <ContentImages photo={HeaderPhoto} aspect="sqaure" />
          <ContentImages photo={BackRender} aspect="square" />
        </section>
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}
