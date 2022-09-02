import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import About from "./components/About";
import Featured from "./components/Featured";
import Categories from "../Categories/Categories";
import featuredImg from "../../img/featured-2.jpg";
import featuredImgSmall from "../../img/featured-1.jpg";
import featuredImg1 from '../../img/brand-detail-2.jpg';
import featuredImg1Small from '../../img/featuredPlatna1.png';
import featuredImg2Small from "../../img/ogledalaManja.jpg";
import featuredImg2 from '../../img/ogledalaVeca.jpg';

import imgStyles from "../../css-modules/photo-text-section.module.css";

const Main = () => {
  return (
    <>
      <Hero page="main" />
      <main className="mainPage">
        <Categories />
        <Featured images={[
          {
            src: featuredImg1Small,
            className: imgStyles.imgSmall,
            alt: "",
          },
          {
            src: featuredImg,
            className: imgStyles.imgBig,
            alt: "white monochrome textured painting",
          },
        ]} redirectTo={"/shop"}
          caption="Cream kolekcija"
          subcaption="Nasa najnovina kolekcija teksturalnih platana lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsu"

        />
        <Slider category={'slike'} sectionTitle='Bela teksturalna platna' />
        <Featured images={[
          {
            src: featuredImgSmall,
            className: imgStyles.imgSmall,
            alt: "",
          },
          {
            src: featuredImg1,
            className: imgStyles.imgBig,
            alt: "white monochrome textured painting",
          },
        ]} redirectTo={"/shop"}
          caption="Tapiserije"
          subcaption="Nasa najnovina kolekcija teksturalnih platana lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum"
          isReversed={true}

        />
        <Slider category={'tapiserije'} sectionTitle='Ombre tapiserije od prirodnih vlakana' />
        <Featured images={[
          {
            src: featuredImg2Small,
            className: imgStyles.imgSmall,
            alt: "",
          },
          {
            src: featuredImg2,
            className: imgStyles.imgBig,
            alt: "white monochrome textured painting",
          },
        ]} redirectTo={"/shop"}
          caption="Ogledala"
          subcaption="Nasa najnovina kolekcija ogledala lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum"
        />
        <Slider category={'ogledala'} sectionTitle='Novo iz naseg studija' />

        <About />
      </main>
    </>
  );
};

export default Main;
