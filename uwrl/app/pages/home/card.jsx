export default function Card({ heading, body, image, link }) {
  return (
    <section className="bg-bck-grey rounded-xl h-495 w-425
      border-solid border-bck-white border-1
    ">
      <a href={link}>
        <div className="flex flex-col justify-center items-center px-3 pt-3 gap-5">
          {/* IMAGE HERE WITH BCK -define height --cards will stay same size, flex will change */}
          <div className="h-370 w-395 bg-bck-card ">
            <img src={image} alt="" className="" />
          </div>

          <div className="flex flex-col items-center gap-1 h-24">
            {/* WORDS HERE */}
            <h3 className="font-neraphic text-text-lightBody text-subheading">
              {heading}
            </h3>
            {/* PASS BOLD TAG WITH PROP WHEN CALLING FUNCTION */}
            <p className="font-suse text-text-lightSub font-body w-325 text-center">{body}</p>
          </div>
        </div>
      </a>
    </section>
  );
}
