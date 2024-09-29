import ButtonDark from "./ButtonDark";

export default function NavBar() {
  return (
    <nav className="w-screen bg-bck-white h-20 flex justify-between items-center px-8 border-solid border-grey-60 border-1">
      <div className="flex items-center gap-3">
      <a href="/pages/home">
        <img src="/images/assets/uwrl-logo-main.png" alt="" className="h-14"/>
      </a>
      <h2 className="font-neraphic text-bodyLarge text-text-darkBody mt-2 tracking-logo">
        Waterloo Reality Labs
      </h2>
      </div>
      <div className="flex font-normal font-neraphic text-button gap-10 items-center">
          <a href="/pages/projects">Projects</a>
      <a href="/pages/about">About</a>
      <a href="/pages/contact">Contact</a>
      <ButtonDark text="Join the Team" target="https://discord.gg/vs9XdfuMJu" className="" />
      </div>
    
    </nav>
  );
}
