import "./App.css";
import Nav from "./components/Nav.js";
import Header from "./components/Header.js";
import MissionStatement from "./components/MissionStatement.js";
import ProductCategories from "./components/ProductCategories.js";
import BrandMessage from "./components/BrandMessage.js";
import Newsletter from "./components/Newsletter.js";
import Featured from "./components/Featured.js";
import CustomSlider from "./components/Slider.js";
import About from "./components/About.js";

// import "./flickity.css";

function App() {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <BrandMessage></BrandMessage>
      <MissionStatement></MissionStatement>
      <ProductCategories></ProductCategories>
      <Newsletter></Newsletter>
      <Featured
        section={"featured"}
        message={"Featured promo"}
        caption={"The Styling Book"}
        subcaption={"now available"}
        paragraph={
          " All my best-kept secrets to decorate your entire home. From minimal table settings to cozy bathroom decorations. Everything helpful and inspiring to pour love into your home. "
        }
        btn={"buy now"}
      ></Featured>

      <CustomSlider></CustomSlider>
      <About
        section={"about"}
        message={"About me"}
        caption={
          "I have a affinity for simple and organic materials. I see beauty in the purest of things and I am so excited to share my love for design to help you create a cozy and sereen home. "
        }
        subcaption={"hey lovely, I am"}
        btn={"read more"}
      ></About>
    </>
  );
}

export default App;
