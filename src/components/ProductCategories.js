import React from "react";
import TwoPhotosSection from "../components/TwoPhotosSection.js";

export default function ProductCategories() {
  return (
    <section className="product-categories">
      <TwoPhotosSection
        el={"a"}
        link1={"https://www.npmjs.com/package/classnames"}
        link2={"https://github.com/"}
        img={["img3", "img4"]}
      />
    </section>
  );
}
