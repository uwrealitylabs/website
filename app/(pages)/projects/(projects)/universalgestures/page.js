import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import ImageHeader from "../../../../components/ImageHeading";
import ProjDescrip from "../../ProjDescrip";
import JoinUs from "@/app/components/JoinUs";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import ContentImages from "../../ContentImages";

import UniGes from "@/public/images/photos/universalgestures/socratica-uni-gestures.png";
import Demo from "@/public/images/photos/universalgestures/uni-ges-demo.png";

export default function UniversalGestures() {
  return (
    <div className="bg-[url('/images/assets/grid.png')] bg-bck-white">
      <NavBar />
      <main className="px-24 py-6 grid gap-y-16 || max-lg:px-12  || max-mobile:px-4">
        <div>
          <BackButton />
          <ImageHeader title="Universal Gestures" img={UniGes} />
        </div>

        <ProjDescrip
          projecttype="R&D Software"
          details="Building a software package for Meta Quest headsets geared towards developers of mixed-reality video games and apps that use hand tracking"
          heading="Software package for Meta Quest headsets geared towards developers of mixed-reality video games and apps that use hand tracking"
          description={[
            <p key="">
              For developers who build using Unity, the most popular editor for
              creating immersive experiences, Meta provides the XR All-in-One
              SDK (UPM). This SDK enables developers to interface with the
              sensors on Quest headsets, and easily enable hand tracking
              functionality within their app. However, the functionality
              surrounding detecting specific hand poses is limited by the
              limited customization to the curl and flexion settings of the
              fingers. Additionally, the existing package does not take into
              account the relative position of your hands to one another.
            </p>,

            <p key="">
              The goal of Universal Gestures is to create an importable Unity
              package which expands and simplifies the hand gesture recognition
              system provided by Meta. Instead of using an on-or-off approach to
              finger poses, we will take the float values given by the sensors
              on the headset for finger positions and apply a Machine Learning
              approach. By collecting a training set of popular hand gestures,
              we will train neural networks to classify them. The output of
              these trained neural networks will be accessible to scripts that
              we create in C#, which will finally be attachable to GameObjects
              within Unity.
            </p>,
            <p key="">
              From the developers perspective, all they have to do is import our
              package, attach the “UWRL Hand Pose Detection” script to an object
              within their Scene, choose which gesture they want to recognize,
              and specify a function to be run when it is recognized. Just like
              that, the difficult part of recognizing a gesture is handled for
              them—they can immediately get to work on their creative project.
            </p>,
          ]}
          link="https://github.com/uwrealitylabs/universal-gestures-unity"
        />
        <section className="">
          <Image
            src={Demo}
            className="aspect-16/7 rounded-2xl mx-auto max-w-990 w-full mt-24"
          />
        </section>
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}
