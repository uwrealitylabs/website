export default function ProjectCard({ title, descrip, img, link, grid="" }) {
  return (
    <a className={`
    hover:scale-102
    duration-300
    ${grid === "double" ? 'col-span-1' : 'col-span-2'}`}>
      <div
        href={link}
        className="bg-bck-white 
        border-solid border-bck-grey border-2 rounded-xl
        p-6 h-full
        flex flex-col gap-6 justify-between
        "
      >
        <header>
          <h2 className="text-h4 font-neraphic">{title}</h2>
          <p className="font-suse text-bodyLarge leading-normal">{descrip}</p>
        </header>
        <div className= {`border-solid border-bck-grey border-2 rounded-lg overflow-hidden
        ${grid === "double" ? 'aspect-3/2' : 'aspect-[16/7]'}`}>
          <img
            src={img}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </a>
  );
}
