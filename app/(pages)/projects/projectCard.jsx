// adding new projects --> grid = "double" will make it the smaller proj (2 take up one row)
// other props are self explanatory :)
import Image from "next/image";

export default function ProjectCard({ title, descrip, img, link, grid = "" }) {
  return (
    <a
      href={`/projects/${link}`}
      className={`
    hover:scale-102
    duration-300
    max-mobile:col-span-2
    ${grid === "double" ? "col-span-1" : "col-span-2"}`}
    >
      <div
        className="bg-bck-white 
        border-solid border-bck-grey border-2 rounded-xl
        p-6 h-full
        flex flex-col gap-6 justify-between
        "
      >
        <header>
          <h2 className="text-h4 font-neraphic max-mobile:text-button mb-2">
            {title}
          </h2>
          <p className="font-suse text-bodyLarge tracking-tight leading-normal max-mobile:text-body">
            {descrip}
          </p>
        </header>
        <div
          className="relative border-solid border-bck-grey border-2 rounded-lg overflow-hidden aspect-[20/7] max-md:aspect-[13/8] max-mobile:aspect-[10/9]"
        >
          <Image
            src={img}
            fill
            className="object-cover"
            quality={90}
            sizes={
              grid === "double"
                ? "(max-width: 768px) 100vw, 40vw"
                : "(max-width: 768px) 100vw, 80vw"
            }
            loading="eager"
            alt=" "
            />
        </div>
      </div>
    </a>
  );
}
