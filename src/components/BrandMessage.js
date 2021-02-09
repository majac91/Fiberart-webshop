import React from "react";
import TextSection from "./TextSection/TextSection";
import TwoPhotosSection from "./TwoPhotosSection/TwoPhotosSection";

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
      <TwoPhotosSection el={"div"} img={["img3", "img4"]} />
    </>
  );
}
