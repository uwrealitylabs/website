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
          <ImageHeader title="VITracker" img={HorizontalRender} notion={"https://uwrl.notion.site/VITracker-342202a3e1f64faaa4811aaedcf2bff2"} />
        </div>

        <ProjDescrip
          projecttype="Hardware"
          details="Building custom hardware for real-time visual-inertial SLAM tracking"
          heading=""
          description={[
            
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
