import TextSection from "./TextSection";
import TwoPhotosSection from "../components/TwoPhotosSection.js";

export default function BrandMessage() {
  return (
    <>
      <TextSection
        section={"brandMsg"}
        message={"Brand message"}
        caption={"Write a short pitch about what you do and why"}
        subcaption={
          "I help you create a home you love, so you can relax and refresh in a pure and simple space."
        }
      ></TextSection>
      <TwoPhotosSection el={"div"} img={["img1", "img2"]} />
    </>
  );
}
