import NavBar from "@/app/components/NavBar";
import Image from "next/image";
import ButtonDark from "@/app/components/ButtonDark";
import ButtonSecondary from "@/app/components/ButtonSecondary";
import Footer from "@/app/components/Footer";

export default function Linktree() {
  return (
    <div className="bg-[url('/images/assets/grid.png')] bg-bck-white">
      <NavBar />
      <main className="grid justify-center text-center gap-y-6 py-24 px-12 max-w-640 mx-auto">
        <h1 className="font-neraphic text-h1">Our Links</h1>
        <p className="font-suse text-bodyLarge mb-4">
          Shoot us a quick message with ideas, questions about starting a
          project, or sponsorships. We are also active on our socials!
        </p>

        <section className="grid gap-y-2 w-640">
        <a
          target="_blank"
            href="https://forms.gle/X9uLTh6qCSu9p8Ra6"
            className="font-neraphic text-button bg-bck-white border border-solid border-1 border-bck-grey rounded-md p-4 "
          >
            Join the team here for summer 2025!
          </a>
          <a
          target="_blank"
            href="https://uwrl.notion.site/ad61b3a584a14659a3a56e723da43f23?v=5180ad28466e4c8f928847bb57235581"
            className="font-neraphic text-button bg-bck-white border border-solid border-1 border-bck-grey rounded-md p-4 "
          >
            Docs
          </a>
          {/* <a className="font-neraphic text-button bg-bck-white border border-solid border-1 border-bck-grey rounded-md p-4">Link</a>
          <a className="font-neraphic text-button bg-bck-white border border-solid border-1 border-bck-grey rounded-md p-4">Link</a>
          <a className="font-neraphic text-button bg-bck-white border border-solid border-1 border-bck-grey rounded-md p-4">Link</a>
          */}
        </section>

        {/* SOCIAL LINKS */}
        <section className="grid grid-cols-2 text-bodyLarge font-suse gap-2 justify-center items-center mx-auto">
          <a href="https://discord.gg/vs9XdfuMJu" className="flex items-center gap-4 mrx-auto">
            <Image
              src="/images/icons/discord.png"
              width={23}
              height={17}
              className="object-contain"
              alt=""
            />
            Discord
          </a>
          <a href="https://github.com/uwrealitylabs" className="flex items-center gap-4">
            <Image
              src="/images/icons/github.png"
              width={20}
              height={20}
              className="object-contain"
              alt=""
            />
            Github
          </a>
          <a href="https://www.linkedin.com/company/uwrealitylabs/" className="flex items-center gap-4">
            <Image
              src="/images/icons/linkedin.png"
              width={20}
              height={20}
              className="object-contain"
              alt=""
            />
            LinkedIn
          </a>
          <a href="https://www.instagram.com/uwrealitylabs/" className="flex items-center gap-4">
            <Image
              src="/images/icons/instagram.png"
              width={20}
              height={20}
              className="object-contain"
              alt=""
            />
            Instagram
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
