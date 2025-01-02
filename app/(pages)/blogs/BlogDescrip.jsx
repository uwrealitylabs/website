import Image from "next/image";
import Divider from "@/public/images/assets/blog-date-divider.png";

export default function BlogDescrip({ title, body, date, description }) {
  return (
    <section className="flex gap-2 max-w-990 max-md:flex-col-reverse px-4">
      <div className="max-w-full grid gap-y-6">
        <h2 className="font-neraphic text-h3 break-words">{title}</h2>
        <div className="font-suse text-bodyLarge tracking-tight break-words">{body}</div>
      </div>

      <Image
        src={Divider}
        className="h-72 w-auto object-contain ml-6 || max-md:hidden"
        alt=""
      />

      <div className="mt-4 font-suse w-full text-grey-40 text-bodyLarge flex flex-col gap-4 || mobile:max-md:flex-row max-md:justify-between max-md:mb-12">
        <div>
          <p className="text-h4 font-bold ">Date Published</p>
          <p className="text-text-darkBody">{date}</p>
        </div>

        <div className="mobile:max-md:self-end max-w-96">
          <p className="text-h4 font-bold">Description</p>
          <p className="text-text-darkBody">{description}</p>
        </div>
      </div>
    </section>
  );
}
