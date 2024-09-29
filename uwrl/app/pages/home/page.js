import "./page.css";
import ButtonDark from "@/app/components/ButtonDark";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <main
        className="hero       
      bg-[url('/images/assets/grid.png')] bg-bck-white 
      flex justify-center items-center"
      >
        <div
          className="
        hero-main 
        bg-[url('/images/assets/iso-grid-hero.png'),_url('/images/assets/city.png')] bg-bck-white bg-no-repeat bg-bottom
        relative 
        rounded-2xl
        flex justify-center items-center flex-col gap-7"
        >
            <span className="font-suse font-bold text-body">
              VR/AR/XR - Spatial Computing
            </span>
            <div className="flex flex-col gap-6 items-center mb-36">
              <h1 className="font-neraphic text-h1 w-990 text-center">
                The University of Waterloo's XR and spatial computing design
                team.
              </h1>
              <ButtonDark
                text="Dive Deeper"
                target="#"
                icon="/images/icons/arrow-right-white.png"
              />
            </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
