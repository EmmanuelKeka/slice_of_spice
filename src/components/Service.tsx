import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const services = [
    {
      title: "Web Design",
      description:
        "Dedicated to the art of web design, I specialize in creating stunning and visually captivating websites that elevate your online presence. Let's collaborate to showcase your unique identity through beautifully crafted digital experiences.",
    },
    {
      title: "Web Developer",
      description:
        "As a web developer, I specialize in translating innovative ideas into seamless, functional websites. With a focus on clean and efficient code, I bring your digital vision to life, ensuring a dynamic and user-friendly online experience. Let's code your success together!",
    },
    {
      title: "Deployment",
      description:
        "Proficient in seamless web deployment, I ensure your beautifully designed website goes live effortlessly. From concept to reality, let's launch your online presence with precision and reliability.",
    },
  ];
  const [serive, setService] = useState(0);
  const changeServiceRight = () => {
    if (serive === services.length - 1 ) {
      setService(0);
      return;
    }
    setService(serive + 1);
  };
  const changeServiceLeft = () => {
    if (serive === 0) {
      setService(services.length - 1);
      return;
    }
    setService(serive - 1);
  };
  return (
    <section className="eye h-full flex flex-col justify-center items-center">
      <div className=" flex justify-center items-center flex-col">
        <h1 className="text-6xl font-semibold text--effect text-center text-black mt-8">
          {services[serive].title}
        </h1>
        <p className=" w-96 text-center my-10">
          {services[serive].description}
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-1 gap-8 h-20 w-1/3">
        <div className=" flex justify-center items-center">
          <div className="liquid22" onClick={changeServiceLeft}>&nbsp;</div>
          <FontAwesomeIcon
            icon={faArrowLeft}
            color="white"
            className=" absolute pointer-events-none"
          />
        </div>
        <div className=" flex justify-center items-center">
          <div className="liquid22 bg-black" onClick={changeServiceRight}>
            &nbsp;
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            color="white"
            className=" absolute pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};
