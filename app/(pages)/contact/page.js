'use client'
import React from "react";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import ButtonDark from "@/app/components/ButtonDark";
import Image from "next/image";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1d5590de-5fef-4f4a-b496-40dbad549e24");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="bg-bck-white bg-[url('/images/assets/grid.png')]">
      <NavBar />
      <main className="px-24 py-12 || max-md:px-8 || max-mobile:px-4 ">
        <section className="grid grid-flow-col my-20 gap-y-12 || max-md:grid-flow-row">
          <div className="max-w-550 grid gap-y-4">
            <div>
              <h2
                className="font-suse text-body font-bold 
            bg-[url('/images/assets/paper-tape.png')] bg-contain bg-no-repeat bg-center p-6 w-fit"
              >
                Contact
              </h2>
              <h1 className="text-h1 font-neraphic">Want to get involved?</h1>
            </div>
            <p className="text-bodyLarge font-suse">
              Shoot us a quick message with ideas, questions about starting a
              project, or sponsorships. We are also active on our socials!
            </p>

            {/* SOCIAL LINKS */}
            <div className="grid grid-flow-row text-bodyLarge font-suse underline gap-y-2">
              <a
                href="https://discord.gg/vs9XdfuMJu"
                target="_blank"
                className="flex items-center gap-4"
              >
                <Image
                  src="/images/icons/discord.png"
                  alt=" "
                  width={22}
                  height={17}
                  className="object-contain"
                />
                Discord
              </a>
              <a
                href="https://github.com/uwrealitylabs"
                target="_blank"
                className="flex items-center gap-4"
              >
                <Image
                  src="/images/icons/github.png"
                  alt=" "
                  width={20}
                  height={20}
                  className="object-contain"
                />
                Github
              </a>
              <a
                href="https://www.linkedin.com/company/uwrealitylabs/"
                target="_blank"
                className="flex items-center gap-4"
              >
                <Image
                  src="/images/icons/linkedin.png"
                  alt=" "
                  width={20}
                  height={20}
                  className="object-contain"
                />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/uwrealitylabs/"
                target="_blank"
                className="flex items-center gap-4"
              >
                <Image
                  src="/images/icons/instagram.png"
                  alt=" "
                  width={20}
                  height={20}
                  className="object-contain"
                />
                Instagram
              </a>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={onSubmit} className="border-dashed border-2 border-accents-blue grid grid-flow-row gap-y-8 p-6">
            <div className="flex flex-col gap-4">
              <p className="font-suse font-bold font-bodyLarge">Full Name</p>
              <input
                className="border-b-1 border-bck-grey p-2 bg-bck-white"
                type="text"
                name="name"
                maxLength="50"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-suse font-bold font-bodyLarge">Email</p>
              <input
                className="border-b-1 border-bck-grey p-2 bg-bck-white"
                type="email"
                maxLength="50"
                name="email"
                placeholder="johndoe@gmail.com"
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-suse font-bold font-bodyLarge">Message</p>
              <input
                className="border-b-1 border-bck-grey pb-24 p-2 bg-bck-white"
                type="text"
                maxLength="250"
                name="message"
                placeholder="Hey There!"
              />
            </div>

            <button
              type="submit"
              className="border border-dashed border-2 font-suse border-bck-grey font-bold w-fit h-fit px-16 py-2 rounded-lg ml-auto
              hover:bg-bck-grey hover:text-text-lightBody duration-300 
              "
            >
              Send
            </button>
          </form>
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
