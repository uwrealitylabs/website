import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import ButtonDark from "@/app/components/ButtonDark";

export default function Contact() {
  return (
    <div className="bg-bck-white bg-[url('/images/assets/grid.png')]">
      <NavBar />
      <main className="px-24 py-12 || max-md:px-8 || max-mobile:px-4 ">
        <section className="grid grid-flow-col">
          <div>
            <h2 className="font-suse text-body font-bold 
            bg-[url('/images/assets/paper-tape.png')] bg-contain bg-no-repeat bg-center p-6 w-fit">
              Contact
            </h2>
            <h1 className="text-h1 font-neraphic">Want to get involved?</h1>
            <p className="text-bodyLarge font-suse">
              Shoot us a quick message with ideas, questions about starting a
              project, or sponsorships. We are also active on our socials!
            </p>
          </div>
          <div>contact stuff here</div>
        </section>

        {/* SPONSORSHIP SECTION */}
        <section className="pb-24  grid grid-cols-2 || max-2xl:mx-20 || max-md:mx-12 || max-mobile:gap-y-6">
          <h2 className="text-h2 font-neraphic text-text-darkBody max-w-900 || max-lg:text-h3 || max-mobile:text-button max-mobile:leading-snug max-mobile:col-span-2 ">
            Interested in supporting our research?
            <span className="text-grey-60">
              {` View our sponsorship benefits.`}
            </span>
          </h2>
          <div className="ml-auto || max-mobile:col-span-2 max-mobile:mx-0">
            <ButtonDark
              text="Sponsor package"
              border="-bck-white"
              target="yes"
              link="/documents/Waterloo-Reality-Labs-Sponsor-Package-2024.pdf"
              icon="/images/icons/arrow-right-white.png"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
