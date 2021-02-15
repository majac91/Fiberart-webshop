import React from "react";
import TwoPhotosSection from "./TwoPhotosSection/TwoPhotosSection";
import { Link } from "react-router-dom";

export default function ProductCategories() {
  return (
    <section className="product-categories">
      <TwoPhotosSection
        el={Link}
        link1={"/collections"}
        link2={"/shop"}
        img={["img1", "img2"]}
      />
    </section>
  );
}
