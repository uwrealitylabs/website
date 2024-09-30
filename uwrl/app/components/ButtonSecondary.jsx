
// have to make it so that they can change the bg color and outline 
// to call this -> blank = "yes" if want to bring to other page 
// border="-bck-white"  bg="bck-grey" 

export default function ButtonSecondary({text, link, icon="", target="no", border="", bg}){
    return(
        <a href={link} target={target === "yes" ? "_blank" : "_self"}
        className={`bg-${bg}  text-text-lightBody button-styling border-${border} border-solid border-1`}>
            {text}
            {icon && <img src={icon} className="w-4 mb-1"/>}
        </a>
    )
}
