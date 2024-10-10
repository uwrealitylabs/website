import BackButton from "@/app/components/BackButton";
import Image from "next/image";

export default function ImageHeader({ img, title }) {
  return (
    <div>
      <header className="bg-bck-white p-6 border-solid border-bck-grey border-2 rounded-xl flex flex-col gap-6">
        <h1 className="font-neraphic text-h2 || max-mobile:text-h4">{title}</h1>
        <Image src={img} className="aspect-16/7 w-full object-cover max-mobile:aspect-4/3" alt=""/>
      </header>
    </div>
  );
}
