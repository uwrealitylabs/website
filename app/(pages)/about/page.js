import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import JoinUs from "@/app/components/JoinUs";
import Member from "./Member";

import Image from "next/image";
import Gears from "@/public/images/assets/gears.png"
import Squiggle from "@/public/images/assets/squiggle.png"
import Star from "@/public/images/assets/star.png"
import Table from "@/public/images/assets/table-illustration.png"
import Collage from "@/public/images/photos/collage.png"

export default function About() {
  return (
    <div className="bg-bck-white bg-[url('/images/assets/grid.png')]">
      <NavBar />
      <main
        className="
      px-24 py-12

      ---768px---
      max-md:px-8

      ---520px---
      max-mobile:px-4 "
      >
        <header className="max-w-830 text-center mx-auto grid gap-y-6 mb-24 relative">
            <Image src={Gears} className="absolute max-md:hidden" alt=""/>
            <Image src={Squiggle} className="absolute -bottom-12 -right-64 max-md:hidden" alt=""/>
            <Image src={Star} className="absolute bottom-20 -right-10 max-md:hidden" alt=""/>
          <p
            className="font-suse text-body font-bold leading-normal bg-[url('/images/assets/paper-tape.png')] 
          bg-no-repeat bg-contain bg-center w-fit p-6 mx-auto
          "
          >
            About Us
          </p>
          <h1 className="font-neraphic text-h2">
            We are a design team focused on research, user experience, and
            hands-on development.
          </h1>
          <h2 className="font-suse text-bodyLarge font-bold max-w-640 mx-auto mt-4">
            The XR industry is only beginning to grow. We aim to place our
            students at the forefront of innovation within the field.
          </h2>
        </header>

        <section className="lg:grid grid-cols-3 gap-6">
          <div className="grid grid-flow-row row-span-2">
            <Image
              src={Table}
              className=" object-cover m-auto p-10 lg:row-start-2 max-md:px-32 max-mobile:px-0 max-md:hidden max-lg:w-640"
              alt=""
            />
            <section className="p-6 border-dashed border-3 border-accents-yellow rounded-lg h-fit lg:row-start-1 max-lg:my-6">
              <h3 className="font-neraphic text-h4 mb-6">Project Philosophy</h3>
              <p className="font-suse text-bodyLarge leading-normal">
                We believe in community driven, open-to-all project development.
              </p>
            </section>
          </div>

          <section className="p-6 border-dashed border-3 border-accents-green grid gap-y-6 col-start-2 col-span-2 row-span-2 row-start-1 rounded-lg">
            <div>
              <h3 className="font-neraphic text-h4 mb-6">
                Extending our passion for XR to the community
              </h3>
              <p className="font-suse text-bodyLarge leading-normal">
                Anyone is free to explore and work on a project. Waterloo
                Reality Labs is not exclusive or invite-only! All students are
                welcome to join and learn to build XR devices alongside team
                members.
              </p>
            </div>
            <div>
              <h3 className="font-neraphic text-h4 mb-6">
                Becoming a regular team member
              </h3>
              <p className="font-suse text-bodyLarge leading-normal inline">
                Our signups occur near the beginning of every term. Keep an eye
                out for our member signup forms on{" "}
              </p>
              <a
                href="https://discord.gg/vs9XdfuMJu"
                className="underline font-suse text-bodyLarge leading-normal inline"
              >
                Discord.
              </a>
              <br />
              <br />
              <p className="font-suse text-bodyLarge leading-normal">
                As a team member, you can push to the main GitHub repository, as
                well as gain independent access to our rooms and materials.
              </p>
            </div>
            <div>
              <h3 className="font-neraphic text-h4 mb-6">
                Taking on your own project: Project Leads
              </h3>
              <p className="font-suse text-bodyLarge leading-normal">
                Following your proposition of a new project, if and once your
                project has its first meeting and begins development, you&apos;ll
                become a Project Lead, with all of the administrative
                permissions to take control of your project.{" "}
              </p>
            </div>
          </section>
        </section>

        <Image
          alt=""
          src={Collage}
          className="w-full mx-auto my-16"
        />

        {/* ----MEMBERS---- */}
        <section></section>
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}
