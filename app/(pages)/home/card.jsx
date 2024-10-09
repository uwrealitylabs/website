export const metadata = {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
};
import Image from "next/image";

export default function Card({ heading, body, image, link, width, height }) {
  return (
    <section
      className="bg-bck-grey rounded-xl h-495 w-425 hover:bg-bck-card
      border-solid border-bck-white border-1
      ---1024px---
      max-lg:w-340

      ---520px---
      max-mobile:scale-[.95]
      hover:scale-105 duration-500">
        
      <a href={link}>
        <div className="flex flex-col justify-center items-center px-3 pt-3 gap-5">
          {/* IMAGE HERE WITH BCK -define height --cards will stay same size, flex will change */}
          <div
            className="h-370 w-390 bg-bck-card 
          ---1024px---
          max-lg:w-310
          transition-colors
          hover:bg-grey-90 duration-500

          "
          >
            <Image
              src={image}
              alt=" "
              loading="eager"
              className="w-380 h-370 object-cover opacity-75 hover:opacity-100 duration-500"
            />
          </div>

          <div className="flex flex-col items-center gap-1 h-28">
            {/* WORDS HERE */}
            <h3 className="font-neraphic text-text-lightBody text-subheading pt-5">
              {heading}
            </h3>
            {/* PASS BOLD TAG WITH PROP WHEN CALLING FUNCTION */}
            <p className="font-suse text-text-lightSub font-body w-325 text-center leading-normal">
              {body}
            </p>
          </div>
        </div>
      </a>
    </section>
  );
}
