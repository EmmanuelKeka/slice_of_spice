import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import ImageBanner from "./ImageBanner";

function Description() {
  return (
    <section className=" flex flex-col justify-center items-center">
      <LeftCard
        title="Head chef"
        descrip="Slice of Spice's chef is a culinary master.Each dish is expertly crafted and bursting with flavor, leaving a lasting impression on your taste buds. From perfectly cooked steaks to heavenly desserts, every bite is a culinary adventure."
        srcImage="Rectangle 4.png"
      />
      <ImageBanner imgSrc="Polygon.png" />
      <RightCard
        title="Dishes"
        descrip="Slice of Spice offers a diverse and tantalizing selection of dishes for every taste and preference. From classic comfort foods to exotic and spicy delights, the menu has something for everyone. The head chef's expert use of spices and seasonings adds depth and complexity to each dish, making every bite a new adventure."
        srcImage="Rectangle 6.png"
      />
      <ImageBanner imgSrc="Polygon1.png" />
      <LeftCard
        srcImage="Rectangle 7.png"
        title="Seafood"
        descrip="At Slice of Spice, we take pride in offering only the freshest and highest quality seafood. Our head chef carefully selects the freshest catches of the day and expertly prepares them to perfection. From delicate and buttery whitefish to rich and flavorful salmon, our seafood dishes are a true feast for the senses."
      />
      <ImageBanner imgSrc="Polygon2.png" />
      <RightCard
        srcImage="Rectangle 8.png"
        title="Ambiance"
        descrip="Step into Slice of Spice and be transported to a world of culinary bliss. Our restaurant's warm and inviting ambiance is the perfect setting for a memorable dining experience. Whether you're enjoying a romantic dinner for two or a night out with friends and family, our comfortable and cozy seating arrangements will make you feel right at home."
      />
    </section>
  );
}
export default Description;
