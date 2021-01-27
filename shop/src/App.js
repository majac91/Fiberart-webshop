import "./App.css";
import Nav from "./components/Nav.js";
import Header from "./components/Header.js";
import MissionStatement from "./components/MissionStatement.js";
import ProductCategories from "./components/ProductCategories.js";
import BrandMessage from "./components/BrandMessage.js";
import Newsletter from "./components/Newsletter.js";

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
    </>
  );
}

export default App;
