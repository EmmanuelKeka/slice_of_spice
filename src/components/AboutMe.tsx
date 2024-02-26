import image from "../image/dds.jpg";
function AboutMe() {
  const handleMouseMove = (e: React.MouseEvent) => {
    const pupils = document.querySelectorAll<HTMLElement>(".pupille");
    pupils.forEach((pupil) => {
      const rect = pupil.getBoundingClientRect();
      const x = (e.pageX - rect.left) / 10 + "px";
      const y = (e.pageY - rect.top) / 10 + "px";
      pupil.style.transform = `translate3d(${x},${y},0px)`;
    });
  };
  return (
    <section className="eye h-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 grid-rows-1 gap-12">
        <div className=" flex justify-center items-center">
          <div className=" liquid pupil blue">&nbsp;</div>
          <h1 className="text-6xl font-semibold text--effect absolute text-center text-white">
            About Me
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-semibold text--effect  text-center ">
            Hi, I'm Emmanuel Keka, a web designer and developer. Let's build
            your online presence together
          </h1>
        </div>
        <div className=" flex justify-center items-center">
          <div className="aspect-square h-full rounded-full overflow-hidden border-zinc-800 border-4">
            <img src={image} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
