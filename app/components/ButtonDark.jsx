export default function ButtonDark({
  text,
  link,
  icon = "",
  target = "no",
  border = "",
}) {
  return (
    <a
      href={link}
      target={target === "yes" ? "_blank" : "_self"}
      className={`bg-bck-grey  text-text-lightBody button-styling font-normal
              ${border ? "border-solid border-bck-white border-2" : ""}
        `}
    >
      {text}
      {icon && <img src={icon} className="w-4 mb-1" />}
    </a>
  );
}
