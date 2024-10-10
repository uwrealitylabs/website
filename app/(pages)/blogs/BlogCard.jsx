import Image from "next/image";

export default function BlogCard({ title, descrip, img, link, date }) {
  return (
    <a
      href={`/blogs/${link}`}
      className="hover:scale-102 duration-300 max-mobile:col-span-full"
    >
      <div
        className="bg-bck-white border-solid border-bck-grey border-2 rounded-xl p-6 h-full
        flex flex-col gap-6 justify-between"
      >
        <div className="overflow-hidden aspect-4/3 max-mobile:aspect-[10/9]">
          <Image
            src={img}
            className="w-full h-full object-cover"
            loading="eager"
            alt=" "
          />
        </div>
        <header>
          <div className="flex justify-between">
            <h2 className="text-h4 font-neraphic max-mobile:text-button mb-2 || max-md:text-button">
              {title}
            </h2>
            <p className="font-suse text-body text-text-darkSub tracking-tight || max-md:text-small">
              {date}
            </p>
          </div>
          <p className="font-suse text-bodyLarge tracking-tight leading-normal max-md:text-body">
            {descrip}
          </p>
        </header>
      </div>
    </a>
  );
}
