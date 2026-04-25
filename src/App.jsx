import { Route, Switch } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignupPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyToken } from "./store/thunks/authThunks";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartPage from "./pages/CartPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateOrderPage from "./pages/CreateOrderPage";
import PreviousOrdersPage from "./pages/PreviousOrdersPage";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <>
      <Header />

      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
            component={ProductDetailPage}
          />
          <Route exact path="/shop/:gender/:categoryName/:categoryId" component={ShopPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/product/:id" component={ProductDetailPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/create-order" component={CreateOrderPage} />
          <ProtectedRoute exact path="/previous-orders" component={PreviousOrdersPage} />
        </Switch>
      </PageContent>

      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>

  );
}

export default App;