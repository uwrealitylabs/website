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
          <a className="font-neraphic text-button bg-bck-grey text-text-lightBody rounded-md p-4">Link</a>
          <a className="font-neraphic text-button bg-bck-white border border-solid border-1 border-bck-grey rounded-md p-4">Link</a>
          <a className="font-neraphic text-button bg-bck-white border border-solid border-1 border-bck-grey rounded-md p-4">Link</a>
          <a className="font-neraphic text-button bg-bck-white border border-solid border-1 border-bck-grey rounded-md p-4">Link</a>
         
         
        </section>

        {/* SOCIAL LINKS */}
        <section className="grid grid-cols-2 text-bodyLarge font-suse gap-2 justify-center items-center mx-auto">
          <a href="" className="flex items-center gap-4">
            <Image
              src="/images/icons/discord.png"
              width={22}
              height={17}
              className="object-contain"
            />
            Discord
          </a>
          <a href="" className="flex items-center gap-4">
            <Image
              src="/images/icons/github.png"
              width={20}
              height={20}
              className="object-contain"
            />
            Github
          </a>
          <a href="" className="flex items-center gap-4">
            <Image
              src="/images/icons/linkedin.png"
              width={20}
              height={20}
              className="object-contain"
            />
            LinkedIn
          </a>
          <a href="" className="flex items-center gap-4">
            <Image
              src="/images/icons/instagram.png"
              width={20}
              height={20}
              className="object-contain"
            />
            Instagram
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
