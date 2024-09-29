import "./page.css"
import ButtonDark from "@/app/components/ui/ButtonDark"

export default function Home(){
    return(
      <div className="hero w-screen bg-[url('/images/assets/grid.png')] bg-bck-white flex justify-center items-center">
  
        <div className="hero-main bg-[url('/images/assets/iso-grid-hero.png')] bg-bck-white grid grid-rows-1 grid-cols-1 rounded-2xl">
        <img src="/images/assets/city.png" className="hero-img grid-rows-1 grid-cols-1" />
  
        <div className="flex justify-center items-center flex-col gap-7 grid-cols-1 grid-rows-1">
        <span className="font-suse font-bold text-body">VR/AR/XR - Spatial Computing</span>
        <div className="flex flex-col gap-6 items-center">
        <h1 className="font-neraphic text-h1 w-990 text-center">
          The University of Waterloo's XR and spatial computing design team.
        </h1>
        <ButtonDark text = "Dive Deeper" target ="#" icon="/images/icons/arrow-right-white.png"/>
        </div>
        </div>
  
  
        </div>
      </div>
    )
  }