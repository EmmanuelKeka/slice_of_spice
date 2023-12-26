function RightCard({
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
    <div className="grid grid-cols-4 grid-rows-1 gap-4 py-15 card">
      <div className="col-span-3 flex flex-col justify-center">
        <h1 className="text-3xl">{title}</h1>
        <p className="TopBorder">{descrip}</p>
      </div>
      <div>
        <img src={chefImg} className=" h-full ml-auto" alt="chef" />
      </div>
    </div>
  );
}
export default RightCard;
