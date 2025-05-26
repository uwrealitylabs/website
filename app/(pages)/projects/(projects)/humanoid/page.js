import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import ImageHeader from "../../../../components/ImageHeading";
import ProjDescrip from "../../ProjDescrip";
import JoinUs from "@/app/components/JoinUs";
import BackButton from "@/app/components/BackButton";
import ContentImages from "../../ContentImages";

import HumanoidRobot from "@/public/images/photos/humanoid/humanoid.png";

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
          projecttype="VR Hardware + Software"
          details="Building the best remote piloting system for humanoid robotics using VR headsets and hand tracking."
          heading="Complete immersion and precise control of digits and arms"
          description={[
            <p key="1">
              We're building the next generation of humanoid robotics interactions! 
              Our ambitious goal is to implement fine control over a robotic hand and arm 
              from a VR headset wirelessly, with complete immersion through cameras and 
              head movement tracking.
            </p>,

            <p key="2">
              <b>Mechanical Design:</b> Designing the fingers, forearm, arm, and stand with 
              high dexterity capabilities for precise manipulation tasks.
              <br />
              <b>Electrical Design:</b> Developing custom PCBs, power systems, and signal 
              processing for seamless communication between components.
              <br />
              <b>Firmware:</b> Writing custom firmware for the PCBs, motors, and sensors 
              to enable real-time control and feedback.
              <br />
              <b>VR Software:</b> Gathering hand data using the Meta SDK and transmitting 
              commands to the robot via WebSocket for instantaneous response.
            </p>,

            <p key="3">
              The use cases are endless: human remote control of robots for dangerous 
              situations, interactions with heavy equipment, physically difficult tasks, 
              and enhanced mobility for people with physical disabilities. We're creating 
              a tele-operable humanoid bot that bridges the gap between human intention 
              and robotic execution.
            </p>,
          ]}
          // link="https://github.com/uwrealitylabs/humanoid"
        />

        <section className="text-bodyLarge font-suse leading-normal md:w-1/2 max-mobile:text-body">
          <h2 className="text-h2 font-neraphic leading-snug max-md:text-h3 max-mobile:text-h4">
            Vision & Implementation
          </h2>
          <br/>
          <p>
            Our system integrates cutting-edge VR technology with advanced robotics 
            to create an unprecedented level of telepresence. Users can see through 
            the robot's cameras while their head movements control the robot's head, 
            and their hand gestures are translated into precise robotic movements.
          </p>
          <br/>
          <p>
            The project represents a fusion of multiple engineering disciplines, 
            combining mechanical precision, electrical innovation, firmware expertise, 
            and immersive software development to push the boundaries of what's 
            possible in human-robot interaction.
          </p>
        </section>

        <JoinUs/>
      </main>
      <Footer />
    </div>
  );
} 