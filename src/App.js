import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/";
import Shop from "./pages/Shop/Shop";
import Main from "./pages/Main/Main";
import ProductPage from "./pages/Product/ProductPage";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartCount, setCartCount] = useState(
    () => JSON.parse(localStorage.getItem("item"))?.length || 0
  );
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("item")) || []
  );

  function handleAddToCart() {
    setCartCount((prev) => prev + 1);
  }

  function handleToggleCart() {
    setCartIsOpen((prev) => !prev);
  }

  return (
    <Router>
      <Nav
        cartCount={cartCount}
        onCartClick={handleToggleCart}
        setCartIsOpen={setCartIsOpen}
      ></Nav>
      <Cart
        onCartClick={handleToggleCart}
        cartIsOpen={cartIsOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setCartCount={setCartCount}
        setCartIsOpen={setCartIsOpen}
      ></Cart>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/shop">
          <Shop></Shop>
        </Route>

        <Route exact path="/product/:id">
          <ProductPage
            setCartIsOpen={setCartIsOpen}
            onCartClick={handleToggleCart}
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
            setCartItems={setCartItems}
          ></ProductPage>
        </Route>
      </Switch>

      <Footer paragraph="I help you create a home you love, so you can relax and refresh in a pure and simple space."></Footer>
    </Router>
  );
}

export default App;
