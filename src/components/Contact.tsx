import React from "react";

export default () => {
  return (
    <section className=" flex flex-col justify-center items-center rounded-t-2xl h-full bg-black">
      <div className=" flex justify-center items-center">
        <div className="liquid blue bg-red-700 h-60 aspect-square">&nbsp;</div>
        <h1 className="text-2xl font-semibold text--effect absolute text-center text-white">
          Contact Me
        </h1>
      </div>
      <div className="marquee h-56 overflow-hidden my-10 ">
        <div className="track">
          <div className="content text-9xl font-semibold text--effect border-2 py-10 text-white flex border-y-white">
            kekaemmanuel05@gmail.com kekaemmanuel05@gmail.com
            kekaemmanuel05@gmail.com kekaemmanuel05@gmail.com
            Kekaemmanuel05@gmail.com kekaemmanuel05@gmail.com
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <div className="liquid blue bg-red-700 h-60 aspect-square">&nbsp;</div>
        <h1 className="text-2xl font-semibold text--effect absolute text-center text-white">
          Let's Work together
        </h1>
      </div>
    </section>
  );
};
