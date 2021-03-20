import React from "react";
import TextSection from "../../../components/TextSection/TextSection";
import TwoPhotosSection from "./TwoPhotosSection/TwoPhotosSection";
import img1 from "../../../img/brand-detail-1.jpg";
import img2 from "../../../img/brand-detail-2.jpg";

export default function BrandMessage() {
  return (
    <section className="brandMsg" aria-label="Page heading">
      <TextSection
        section="brandMsg"
        message="Brand message"
        caption="Write a short pitch about what you do and why"
        subcaption="I help you create a home you love, so you can relax and refresh in a pure and simple space."
      ></TextSection>
      {/* <TwoPhotosSection
        el={"img"}
        img={[img1, img2]}
        alt={[
          "large ombre wall hanging in blue",
          "detail of a wall hanging in ombre pink shades",
        ]}
      /> */}
    </section>
  );
}
