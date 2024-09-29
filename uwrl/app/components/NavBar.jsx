import ButtonDark from "./ButtonDark";

export default function NavBar() {
  return (
    <nav className="w-screen bg-bck-white h-20 flex justify-between items-center px-8 border-solid border-grey-60 border-1">
      <a href="/pages/home">
        <img src="/images/assets/uwrl-logo-main.png" alt="" className="h-14"/>
      </a>
      <div className="flex font-normal font-neraphic text-button gap-10 items-center">
          <a href="/pages/projects">Projects</a>
      <a href="/pages/about">About</a>
      <a href="/pages/contact">Contact</a>
      <ButtonDark text="Join the Team" target="" className=""/>
      </div>
    
    </nav>
  );
}
