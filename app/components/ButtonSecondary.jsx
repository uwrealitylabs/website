// have to make it so that they can change the bg color and outline
// to call this -> blank = "yes" if want to bring to other page
// border="-bck-white"  bg="bck-grey"
"use client";

export const metadata = {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
};

export default function ButtonSecondary({
  text,
  link,
  icon = "",
  animateIcon = "",
  target = "no",
  border = "",
  bg,
  className = ""
}) {
  const img = icon;
  return (
    <a
      href={link}
      target={target === "yes" ? "_blank" : "_self"}
      className={`
      bg-${bg}  text-${border}
      button-styling font-neraphic
      border-${border} border-solid border-1 
      ${className} 
      hover:scale-x-97 duration-300  ease-out
      max-md:text-body group
      `}
      // onMouseOver={(e) => {
      //   const img = e.currentTarget.querySelector("img");
      //   if (img && animateIcon) img.src = animateIcon;
      // }}
      // onMouseOut={(e) => {
      //   const img = e.currentTarget.querySelector("img");
      //   if (img && icon) img.src = icon;
      // }}
    >
      {text}
      {icon && <img src={img} alt="" className="w-4 mb-1 group-hover:rotate-[315deg] duration-300" />}
    </a>
  );
}
