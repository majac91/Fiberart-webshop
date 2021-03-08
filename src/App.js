import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/";
import Shop from "./pages/Shop/Shop";
import Main from "./pages/Main/Main";
import ProductPage from "./pages/Product/ProductPage";
import CheckoutPage from "./pages/Checkout/Checkout";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/Contact";
import Cart from "./components/Cart/Cart";
import useOnclickOutside from "react-cool-onclickoutside";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [cartCount, setCartCount] = useState(
    () => JSON.parse(localStorage.getItem("item"))?.length || 0
  );
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("item")) || []
  );
  const [submitted, setSubmitted] = useState(false);
  // const [subscribed, setSubscribed] = useState(false);

  const clickOutsideCart = useOnclickOutside(
    () => {
      setCartIsOpen(false);
      setBurgerIsOpen(false);
    },
    { ignoreClass: "ignoreClickOutside" }
  );

  const clickOutsideNav = useOnclickOutside(
    () => {
      setCartIsOpen(false);
      setBurgerIsOpen(false);
    },
    { ignoreClass: "ignoreClickOutside" }
  );

  function handleAddToCart() {
    setCartCount((prev) => prev + 1);
  }

  function handleToggleCart() {
    setCartIsOpen((prev) => !prev);
  }

  function deleteCartItem(item) {
    const items = cartItems.filter((i) => i !== item);
    setCartItems(items);
    setCartCount(items.length);
  }

  function handleToggleNav() {
    setBurgerIsOpen((prev) => !prev);
  }

  let total = cartItems.reduce(
    (acc, curr) => acc + parseInt(curr.price.slice(1)),
    0
  );

  return (
    <Router>
      <ScrollToTop />
      <Nav
        onBurgerClick={handleToggleNav}
        clickOutsideRef={clickOutsideNav}
        burgerIsOpen={burgerIsOpen}
        cartCount={cartCount}
        onCartClick={handleToggleCart}
        setCartIsOpen={setCartIsOpen}
      />
      <Cart
        clickOutsideRef={clickOutsideCart}
        total={total}
        onDelete={deleteCartItem}
        onCartClick={handleToggleCart}
        cartIsOpen={cartIsOpen}
        cartItems={cartItems}
      />
      <Switch>
        <Route exact path="/">
          <Main submitted={submitted} />
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

        <Route exact path="/about">
          <AboutPage />
        </Route>

        <Route exact path="/checkout">
          <CheckoutPage
            submitted={submitted}
            setSubmitted={setSubmitted}
            total={total}
            onDelete={deleteCartItem}
            cartItems={cartItems}
          />
        </Route>

        <Route exact path="/contact">
          <ContactPage submitted={submitted} setSubmitted={setSubmitted} />
        </Route>
      </Switch>
      <Footer paragraph="I help you create a home you love, so you can relax and refresh in a pure and simple space."></Footer>
    </Router>
  );
}

export default App;
