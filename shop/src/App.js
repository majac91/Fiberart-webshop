import "./App.css";
import Nav from "./components/Nav.js";
import Header from "./components/Header.js";
import MissionStatement from "./components/MissionStatement.js";
import ProductCategories from "./components/ProductCategories";
import Newsletter from "./components/Newsletter.js";

// import "./flickity.css";

function App() {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <MissionStatement></MissionStatement>
      <ProductCategories></ProductCategories>
      {/* <Newsletter></Newsletter> */}
    </>
  );
}

export default App;
