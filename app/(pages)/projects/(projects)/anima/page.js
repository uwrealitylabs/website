import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import ProjHeader from "../../ProjHeader";
import ProjDescrip from "../../ProjDescrip";
import JoinUs from "@/app/components/JoinUs";

import Anima from "@/public/images/photos/anima/anima.png"

export default function UniversalGestures() {
  return (
    <div className="bg-[url('/images/assets/grid.png')] bg-bck-white">
      <NavBar />
      <main className="px-24 py-6 grid gap-y-16 || max-lg:px-12  || max-mobile:px-4">
        <ProjHeader
          title="Anima"
          img={Anima}
        />

        <ProjDescrip
          projecttype="R&D Sowftware"
          details="Building a software package for Meta Quest headsets geared towards developers of mixed-reality video games and apps that use hand tracking"
          heading="The modular, open-source VR headset for research and experimentation."
          description={[
            <p key="10">
              When you prompt a virtual assistant (for example Meta AI on
              Raybans glasses), what happens when you ask “What am I looking
              at”? Currently, the pipeline seems rather simplistic. The cameras
              on the glasses take a picture, that picture is passed through a
              model that can assign text labels to images, and finally that text
              label describing the whole image is passed into an LLM. This
              process, especially the step where a model must describe
              everything in an image using words, is often inaccurate.
            </p>,

            <p key="12">
              What if we could build a system that…
              <br />
              …provides a richer text summary of a virtual environment, complete
              with descriptions of how objects compose each other, are placed
              within/next to/on top of each other?
              <br />
              …also describes how you, the user, is interacting with that
              environment at any moment? Could we assign additional text to
              describe that you are pointing at a specific object, or reaching
              out for one?
              <br />
              …runs in real time, that is, can constantly update every frame to
              provide an updated description. That way, we wouldn&apos;t have to
              wait for text generation, and we could create a live captioning
              system? …runs entirely on-device, meaning this information is
              never sent to the cloud?
            </p>,
            <p key="13">
              If we created this, we could use it for…
              <br />
              …in-application virtual assistants that make use of a rich text
              summary for high-accuracy responses
              <br />
              …virtual science labs where users could receive detailed
              auto-generated scientific explanations about tools and objects
              they interact with
              <br />
              …dynamic VR scene descriptions for the visually impaired,
              describing layout and objects, or even what they&apos;re holding,
              pointing at or nearby to
              <br />
              …and so much more
            </p>,
            <p key="14">
              Universal Text aims to explore this. We are creating a structured
              software package for Unity that allows for real time captioning of
              a VR user&apos;s interactions with their virtual environment. In
              other words, tools provided by our package aim to describe in
              natural language "what&apos;s happening" in a VR application at
              any moment in time, as if recounted by a third party observer.
              This textual description will be rich in detail and generated
              on-the-fly, providing seamless integration of tutorials, live
              captioning for accessibility, or virtual assistants into VR
              applications.
            </p>,
          ]}
          link="https://github.com/uwrealitylabs/universal-gestures-unity"
        />
        <JoinUs/>
      </main>
      <Footer />
    </div>
  );
}
