export const metadata = {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
};
import Image from "next/image";

export default function Card({ heading, body, image, link }) {
  return (
    <section
      className="bg-bck-grey rounded-xl hover:bg-bck-card hover:scale-105 duration-500 border-solid border-bck-white border-1
      ---1024px---
   

      ">
      <a href={link}>
        <div className="flex flex-col justify-center items-center px-3 pt-3 gap-5 ">
          <Image
            src={image}
            alt=" "
            loading="eager"
            className="w-full h-full object-cover opacity-75 hover:opacity-100 duration-500 rounded-md aspect-square || max-md:aspect-15/16"/>

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
