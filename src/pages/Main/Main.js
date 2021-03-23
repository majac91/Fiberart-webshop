import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import About from "./components/About";
import Featured from "./components/Featured";
import Categories from "../Categories/Categories";
import Header from "../../components/Header/Header";

const Main = () => {
  return (
    <>
      <Hero page="main" />
      <main className="mainPage">
        <Categories />
        <Slider />
        <Featured
          section="featured"
          message="Featured promo"
          caption="The Styling Book"
          subcaption="now available"
          paragraph=" All my best-kept secrets to decorate your entire home. From minimal table settings to cozy bathroom decorations. Everything helpful and inspiring to pour love into your home. "
          btn="buy now"
        />
        <Header
          page="checkout"
          caption={"lorem ipsum lorem ipsum lorem ipsum"}
        />
        <About
          section="about"
          message="About me"
          caption="I have a affinity for simple and organic materials. I see beauty in the purest of things and I am so excited to share my love for design to help you create a cozy and sereen home. "
          subcaption="hey lovely, I am"
          btn="read more"
        />
      </main>
    </>
  );
};

export default Main;
