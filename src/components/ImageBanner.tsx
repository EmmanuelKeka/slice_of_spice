function ImageBanner({ imgSrc }: { imgSrc: string }) {
  const chefImg = process.env.PUBLIC_URL + "/dish/" + imgSrc;
  return (
    <div className="flex flex-row justify-between py-10">
      <img src={chefImg} alt="chef" className="w-full" />
    </div>
  );
}

export default ImageBanner;
