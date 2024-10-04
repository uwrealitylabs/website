export default function ContentImages({ photo, grid="" }) {
  return (
    <img
      src={`/images/photos/${photo}`}
      className={`max-mobile:w-full max-mobile:aspect-4/3 object-cover
        ${grid === "full" ? "col-span-full" : ""}
        `}
    />
  );
}
