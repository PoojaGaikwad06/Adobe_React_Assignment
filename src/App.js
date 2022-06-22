import './App.css';
import Header from './Components/CommonComponent/HeaderComponent/Header';
import Footer from './Components/CommonComponent/FooterComponent/Footer';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ProductListing from './Components/ProductListing/ProductListing';
import { BrowserRouter as Router, Switch, Route, Routes ,Navigate} from "react-router-dom";
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import './aem-grid-12.css';




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/adobereactassignment" />} />
          <Route path='/adobereactassignment' exact element={<ProductListing />} />
          <Route path='/product/:productID' element={<ProductDetails />} />
          <Route path='/shoppingcart' element={<ShoppingCart />} />
          <Route>404 Not Found !</Route>
        </Routes>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
