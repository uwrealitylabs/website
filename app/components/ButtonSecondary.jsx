// have to make it so that they can change the bg color and outline
// to call this -> blank = "yes" if want to bring to other page
// border="-bck-white"  bg="bck-grey"
"use client";

export default function ButtonSecondary({
  text,
  link,
  icon = "",
  animateIcon = "",
  target = "no",
  border = "",
  bg,
}) {
  const img = icon;
  return (
    <a
      href={link}
      target={target === "yes" ? "_blank" : "_self"}
      className={`
      bg-${bg}  color-${border}
      button-styling font-neraphic 
      border-${border} border-solid border-1  
      hover:scale-97 duration-300  ease-out

      max-md:text-body
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
      {icon && <img src={img} className="w-4 mb-1" />}
    </a>
  );
}
