import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/";
import Shop from "./pages/Shop/Shop";
import Main from "./pages/Main/Main";
import ProductPage from "./pages/Product/ProductPage";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/shop">
          <Shop></Shop>
        </Route>

        <Route exact path="/product/:id">
          <ProductPage />
        </Route>
      </Switch>

      <Footer paragraph="I help you create a home you love, so you can relax and refresh in a pure and simple space."></Footer>
    </Router>
  );
}

export default App;
