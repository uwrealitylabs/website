import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import ImageHeader from "../../../../components/ImageHeading";
import ProjDescrip from "../../ProjDescrip";
import JoinUs from "@/app/components/JoinUs";
import BackButton from "@/app/components/BackButton";
import ContentImages from "../../ContentImages";

import HumanoidRobot from "@/public/images/photos/humanoid/humanoid.png";
import HandOpen from "@/public/images/photos/humanoid/hand-open.png";
import HandPeace from "@/public/images/photos/humanoid/hand-peace.png";
import HandProgress from "@/public/images/photos/humanoid/hand-progress.jpg";
import Tendon1 from "@/public/images/photos/humanoid/tendon1.jpg";
import Tendon2 from "@/public/images/photos/humanoid/tendon2.jpg";

export default function Humanoid() {
  return (
    <div className="bg-[url('/images/assets/grid.png')] bg-bck-white">
      <NavBar />
      <main className="px-24 py-6 grid gap-y-16 || max-lg:px-12  || max-mobile:px-4">
        <div>
          <BackButton />
          <ImageHeader title="Humanoid" img={HumanoidRobot} />
        </div>

        <ProjDescrip
          projecttype="Mechanical + Electrical + Firmware + VR Software"
          details="Building the best remote piloting system for humanoid robotics using VR headsets and hand tracking."
          heading="Complete immersion and precise control of digits and arms"
          description={[
            <p key="1">
              We're building the next generation of humanoid robotics
              interactions! Our ambitious goal is to implement fine control over
              a robotic hand and arm from a VR headset wirelessly, with complete
              immersion through cameras and head movement tracking.
            </p>,

            <p key="2">
              <b>Mechanical Design:</b> Designing the fingers, forearm, arm, and
              stand with high dexterity capabilities for precise manipulation
              tasks.
              <br />
              <b>Electrical Design:</b> Developing custom PCBs, power systems,
              and signal processing for seamless communication between
              components.
              <br />
              <b>Firmware:</b> Writing custom firmware for the PCBs, motors, and
              sensors to enable real-time control and feedback.
              <br />
              <b>VR Software:</b> Gathering hand data using the Meta SDK and
              transmitting commands to the robot via WebSocket for instantaneous
              response.
            </p>,

            <p key="3">
              The use cases are endless: human remote control of robots for
              dangerous situations, interactions with heavy equipment,
              physically difficult tasks, and enhanced mobility for people with
              physical disabilities. We're creating a tele-operable humanoid bot
              that bridges the gap between human intention and robotic
              execution.
            </p>,
          ]}
          // link="https://github.com/uwrealitylabs/humanoid"
        />

        <section className="text-bodyLarge font-suse leading-normal max-mobile:text-body">
          <h2 className="text-h2 font-neraphic leading-snug max-md:text-h3 max-mobile:text-h4">
            Robotic Hand Development
          </h2>
          <br />
          <p>
            Our robotic hand features articulated fingers with tendon-driven
            actuation systems, allowing for precise control and natural movement
            patterns. Each finger is equipped with multiple degrees of freedom,
            enabling complex grasping and manipulation tasks.
          </p>
          <br />
          <p>
            The hand can achieve various poses from fully open configurations to
            precise pinch grips and gesture recognition. The tendon system
            provides the mechanical advantage needed for strong grips while
            maintaining the flexibility for delicate operations, making it ideal
            for telepresence applications.
          </p>
        </section>

        <section className="text-bodyLarge font-suse leading-normal max-mobile:text-body">
          <h2 className="text-h2 font-neraphic leading-snug max-md:text-h3 max-mobile:text-h4">
            Vision & Implementation
          </h2>
          <br />
          <p>
            This project combines VR technology with robotics to create a real
            life avatar, in the form of a humanoid robot. The applications are
            endless. These robots can be deployed in dangerous scenarios, such
            as war zones, to perform tasks without risking human lives. We are
            starting of with the goal of playing the violin with the robot
            through tele-operation. Eventually, we aim to incorporate autonomy
            into the humanoid, similar to Tesla's Optimus project.
          </p>
        </section>

        <section className="mobile:grid mobile:grid-cols-2 mx-auto max-mobile:flex max-mobile:flex-col gap-6 my-16">
          <ContentImages photo={HandOpen} aspect="square" />
          <ContentImages photo={HandPeace} aspect="square" />
          <ContentImages photo={HandProgress} grid="full" />
          <ContentImages photo={Tendon1} />
          <ContentImages photo={Tendon2} />
        </section>

        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}
