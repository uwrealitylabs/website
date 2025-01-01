import BackButton from "@/app/components/BackButton";
import Image from "next/image";

import Notion from "@/public/images/assets/notion.webp"

export default function ImageHeader({ img, title, notion }) {
  return (
    <div>
      <header className="bg-bck-white p-6 border-solid border-bck-grey border-2 rounded-xl flex flex-col gap-6 justify-center">
        <div className="grid grid-cols-2">
          <h1 className="font-neraphic text-h2 || max-mobile:text-h4">
            {title}
          </h1>

          {notion ? <a
            href={notion}
            target="_blank"
            className="my-auto group flex flex-row items-end gap-2 font-suse text-text-darkBody text-bodyLarge ml-auto underline font-bold hover:cursor-pointer"
          >
            <Image src={Notion} alt="" className="h-8 w-auto" />
            Project Doc{" "}
            <img
              src="/images/icons/arrow-up-right-dark.png"
              className="h-6  group-hover:rotate-[405deg] duration-300"
            />
          </a> : ""}
        </div>
        <Image
          src={img}
          className="aspect-16/7 w-full object-cover max-mobile:aspect-4/3"
          alt=""
        />
      </header>
    </div>
  );
}
