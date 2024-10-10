import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import BackButton from "@/app/components/BackButton";
import BlogCard from "./BlogCard";

import Image from "next/image";
import Shapes from "@/public/images/assets/shapes.png";
import RFS from "@/public/images/photos/realityfromscratch/reality-from-scratch.png";

export default function Blogs() {
  return (
    <div className="bg-[url('/images/assets/grid.png')]">
      <NavBar />
      <main className="px-24 py-6 || max-md:px-8 || max-mobile:px-4">
        <a
          href="/"
          className="font-suse text-text-darkBody font-bold text-body leading-normal flex gap-1 items-center py-4"
        >
          <img className="w-6" src="/images/icons/arrow-left-dark.png" />
          Back
        </a>{" "}
        <header className="flex justify-between items-end gap-24 mb-12 mt-4">
          <div className="max-w-640 flex flex-col gap-4">
            <h1 className="font-neraphic text-h2 text-text-darkBody max-md:text-h3">
              Research Blogs & Updates
            </h1>
            <p className="font-suse text-bodyLarge leading-normal text-text-darkBody">
              See how we’ve turned ideas into{" "}
              <span className="line-through">virtual</span> reality.{" "}
              <span className="text-grey-40">
                Dive into our teams’ current research.
              </span>
            </p>
          </div>
          <Image src={Shapes} className="h-10 w-auto max-md:hidden" alt="" />
        </header>
        {/* BLOG POSTS */}
        <section className="grid grid-cols-3 gap-6 max-md:grid-cols-2 mb-24">
          <BlogCard
            title="Our First Kickoff Meeting!"
            descrip="The modular, open-source VR headset for research and experimentation."
            img={RFS}
            link="firstkickoff"
            date="23/6/24"
          />
          {/* <BlogCard
              title="Reality From Scratch"
              descrip="The modular, open-source VR headset for research and experimentation."
              img={RFS}
              link="/"
              date="23/6/24"
            />
            <BlogCard
              title="Reality From Scratch"
              descrip="The modular, open-source VR headset for research and experimentation."
              img={RFS}
              link="/"
              date="23/6/24"
            /> */}
        </section>
      </main>
      <Footer />
    </div>
  );
}
