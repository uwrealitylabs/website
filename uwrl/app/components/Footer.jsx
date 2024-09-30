export default function Footer() {
  return (
    <footer className="w-screen h-830 bg-cover bg-no-repeat bg-bottom bg-[url('/images/assets/city-footer.png')] bg-bck-grey flex">
     
      <div className="flex gap-32 mt-48 ml-48">
    
      {/* main body of text   */}
      <div className="flex flex-col gap-12">
        <h1 className="font-neraphic text-h1 text-text-lightBody w-830">
          Let's build the future together, one reality at a time.
        </h1>
        <a
          href="notionfuckassbitch"
          className="bg-bck-white  button-styling"
        >
          Join the team
          <img src="/images/icons/arrow-right.png" alt="" />
        </a>
    <div>

        <p className="text-text-copyright font-suse text-xl mt-16">
            @ 2024 UW Reality Labs.
        </p>
        <p className="text-text-copyright font-suse text-xl">
        Designed by Spark Mark, Keyan Virani, Flora Hu
        </p>
    </div>
      </div>
      {/* footer navigation */}
      <nav className="flex gap-12 ">
        <div className="flex flex-col gap-2">
          <a
            href="/pages/home"
            className="font-suse text-text-lightBody text-xl"
          >
            Home
          </a>
          <a
            href="/pages/projects"
            className="font-suse text-text-lightBody text-xl"
          >
            Projects
          </a>
          <a
            href="/pages/about"
            className="font-suse text-text-lightBody text-xl"
          >
            About
          </a>
          <a
            href="/pages/contact"
            className="font-suse text-text-lightBody text-xl"
          >
            Contact
          </a>
        </div>

        {/* Social links  */}
        <div>
          <a
            href="https://discord.gg/vs9XdfuMJu"
            target="_blank"
            className="font-suse text-text-lightSub text-xl underline decoration-text-lightSub flex justify-between items-center w-36"
          >
            Discord
            <img
              src="/images/icons/arrow-up-right-grey.png"
              alt=""
              className="h-6"
            />
          </a>

          <a
            href="https://github.com/uwrealitylabs"
            target="_blank"
            className="font-suse text-text-lightSub text-xl underline decoration-text-lightSub flex justify-between items-center w-36"
          >
            GitHub
            <img
              src="/images/icons/arrow-up-right-grey.png"
              alt=""
              className="h-6"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/uwrealitylabs/"
            target="_blank"
            className="font-suse text-text-lightSub text-xl underline decoration-text-lightSub flex justify-between items-center w-36"
          >
            LinkedIn
            <img
              src="/images/icons/arrow-up-right-grey.png"
              alt=""
              className="h-6"
            />
          </a>

          <a
            href="https://www.instagram.com/uwrealitylabs/"
            target="_blank"
            className="font-suse text-text-lightSub text-xl underline decoration-text-lightSub flex justify-between items-center w-36"
          >
            Instagram
            <img
              src="/images/icons/arrow-up-right-grey.png"
              alt=""
              className="h-6"
            />
          </a>
        </div>
      </nav> 
      </div>
    </footer>
  );
}
