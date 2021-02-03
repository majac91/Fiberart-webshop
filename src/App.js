import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import MissionStatement from "./components/MissionStatement";
import ProductCategories from "./components/ProductCategories";
import BrandMessage from "./components/BrandMessage";
import Newsletter from "./components/Newsletter";
import Featured from "./components/Featured";
import Slider from "./components/Slider";
import About from "./components/About";
import Footer from "./components/Footer";
import TextSection from "./components/TextSection";
import Faq from "./components/Faq";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Header />
          <main>
            <BrandMessage />
            <MissionStatement />
            <ProductCategories />
            <Newsletter />
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
            <Slider />
            <About
              section={"about"}
              message={"About me"}
              caption={
                "I have a affinity for simple and organic materials. I see beauty in the purest of things and I am so excited to share my love for design to help you create a cozy and sereen home. "
              }
              subcaption={"hey lovely, I am"}
              btn={"read more"}
            ></About>
          </main>
        </Route>

        <Route exact path="/shop">
          <Header />
          <main>
            <TextSection
              section={"shop"}
              message={"handmade treasures"}
              caption={"The shop"}
              subcaption={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
              }
              links={true}
            ></TextSection>
            <Faq />
          </main>
        </Route>
      </Switch>
      <Products />
      <Footer
        paragraph={
          "I help you create a home you love, so you can relax and refresh in a pure and simple space."
        }
      ></Footer>
    </Router>
  );
}

export default App;
