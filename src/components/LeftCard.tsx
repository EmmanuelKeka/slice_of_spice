function LeftCard({
  title,
  descrip,
  srcImage,
}: {
  title: string;
  descrip: string;
  srcImage: string;
}) {
  const chefImg = process.env.PUBLIC_URL + "/pps/" + srcImage;
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-4 py-10  card">
      <div>
        <img src={chefImg} alt="chef" className=" h-full" />
      </div>
      <div className="col-span-3 flex flex-col justify-center ">
        <h1 className="text-3xl">{title}</h1>
        <p className="TopBorder">{descrip}</p>
      </div>
    </div>
  );
}
export default LeftCard;
