import ButtonSecondary from "@/app/components/ButtonSecondary";
export default function ProjDescrip({
  projecttype,
  details,
  heading,
  description,
  link,
  linktype = "GitHub",
}) {
  return (
    <section
      className="font-suse text-bodyLarge leading-normal text-text-darkBody grid 
      
      md:grid-cols-projects md:grid-flow-col 
      
      max-md:grid-cols-3  max-md:gap-y-6

      max-mobile:text-body
    "
    >
      <div className="flex flex-col mr-12 || max-md:mr-0 || max-mobile:col-span-full">
        <b className="text-grey-40 text-2xl">Project Type</b>
        {projecttype}
      </div>

      <div
        className="flex flex-col || max-md:col-start-2 max-md:col-span-2 max-md:ml-10 || max-mobile:col-span-full max-mobile:mx-0">
        <b className="text-grey-40 text-2xl">Details</b>
        {details}
      </div>

      {/* for spacing... */}
      <div></div> 

      <div
        className="flex flex-col gap-6

      max-md:col-span-full max-md:row-span-2 
      "
      >
        <h2 className="font-neraphic text-h2 leading-snug || max-md:text-h3 || max-mobile:text-h4">{heading}</h2>

        {description}

        {link ? (
          <ButtonSecondary
            link={link}
            text={linktype}
            icon="/images/icons/arrow-up-right-dark.png"
            target="yes"
            bg="bck-white"
            border="bck-grey"
            rotate="360deg"
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
