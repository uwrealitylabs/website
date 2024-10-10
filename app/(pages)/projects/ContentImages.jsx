import Image from "next/image";

export default function ContentImages({ photo, grid="" }) {
  return (
    <Image
      alt=""
      src={photo}
      className={`max-mobile:w-full max-mobile:aspect-4/3 object-cover rounded-2xl w-full
        ${grid === "" ? "aspect-4/3" : ""}
        ${grid === "full" ? "col-span-full aspect-16/9" : ""}
        `}
    />
  );
}
