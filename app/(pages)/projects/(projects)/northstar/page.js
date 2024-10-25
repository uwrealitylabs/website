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
          heading=""
          description={[
  
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
