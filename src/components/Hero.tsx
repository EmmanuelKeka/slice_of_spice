import NavBar from "./NavBar";
function Hero() {
  const handleMouseMove = (e: React.MouseEvent) => {
    const pupils = document.querySelectorAll<HTMLElement>(".mover");
    pupils.forEach((pupil) => {
      const rect = pupil.getBoundingClientRect();
      const x = (e.pageX - rect.left) / 10 + "px";
      const y = (e.pageY - rect.top) / 10 + "px";
      pupil.style.transform = `translate3d(${x},${y},0px)`;
    });
  };

  return (
    <section
      className="eye h-full flex flex-col justify-center"
      onMouseMove={handleMouseMove}
    >
      <div className="grid grid-cols-3 grid-rows-3 gap-0">
        <div className="col-span-2">
          <h1 className=" text-9xl font-semibold text--effect inline-block">Media</h1>
        </div>
        <div className="col-span-2 col-start-1 row-start-2">
          <h1 className=" text-9xl font-semibold text--effect inline-block">Floating</h1>
        </div>
        <div className="col-span-2 col-start-1 row-start-3">
          <p className="font-bold pl-2 inline-block">Boost your brand with Media Floats.</p>
          <p className="font-bold pl-2 ">
            Our exceptional websites Floats above the competition.
          </p>
        </div>
        <div className="row-span-3 col-start-3 row-start-1 flex flex-col justify-center blue">
          <div className="liquid pupil mover">&nbsp;</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
