export const metadata = {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
};

import ButtonSecondary from "./ButtonSecondary";

export default function JoinUs() {
  return (
    <div className="grid grid-flow-col grid-cols-two py-36
    ---768px---
    max-md:grid-flow-row max-md:gap-y-12
    ">
      <h2
        className="text-h2 font-neraphic text-text-darkBody max-w-990 mr-44 

        ---1024px---
        max-lg:text-h3 max-lg:mr-24

        ---520px---
        max-mobile:text-button max-mobile:leading-snug max-mobile:col-span-2  
        "
      >
        Interested in starting your own project?
        <span className="text-grey-60">
          {" "}
          Join us in crafting impactful visual experiences`
        </span>
      </h2>
      <div
        className="ml-auto
        ---768px---
        max-md:mx-0 
        ---520px---
        max-mobile:col-span-2 max-mobile:mx-0
        
        "
      >
        <ButtonSecondary
          text="JOIN US"
          link="https://discord.gg/vs9XdfuMJu"
          border="bck-grey"
          bg="bck-white"
          icon="/images/icons/arrow-right.png"
          target="yes"
        />
      </div>
    </div>
  );
}
