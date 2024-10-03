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
    <section className="font-suse text-body leading-normal text-text-darkBody grid grid-cols-projects grid-flow-col ">
      <div className="flex flex-col mr-12">
        <b className="text-grey-40 text-2xl">Project Type</b>
        {projecttype}
      </div>
      <div className="flex flex-col">
        <b className="text-grey-40 text-2xl">Details</b>
        {details}
      </div>
        <div></div>
      <div className="flex flex-col gap-6">
        <h2 className="font-neraphic text-h2 leading-snug">{heading}</h2>
        {description}

        {link ? <ButtonSecondary link={link} text={linktype} icon="/images/icons/arrow-up-right-dark.png" target="yes" bg="bck-white" border="bck-grey"/> : ""}
      </div>
    </section>
  );
}
