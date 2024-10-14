export default function ButtonDark({
  text,
  link,
  icon = "",
  target = "no",
  border = "",
  className = ""
}) {

  return (
    <a
      href={link}
      target={target === "yes" ? "_blank" : "_self"}
      className={`bg-bck-grey  text-text-lightBody button-styling font-normal font-neraphic hover:scale-y-97 duration-300 group
              ${border ? "border-solid border-bck-white border-2" : ""}
              ${className}
        `}
    >
      {text}
      {icon && <img src={icon} className="w-4 mb-1 group-hover:rotate-[315deg] duration-300"  alt=""/>}
    </a>
  );
}
