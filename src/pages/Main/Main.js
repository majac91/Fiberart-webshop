import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import About from "./components/About";
import Featured from "./components/Featured";
import Categories from "../Categories/Categories";

const Main = () => {
  return (
    <>
      <Hero page="main" />
      <main className="mainPage">
        <Categories />
        <Featured />
        <Slider />
        <About />
      </main>
    </>
  );
};

export default Main;
