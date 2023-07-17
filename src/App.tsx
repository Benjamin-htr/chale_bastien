import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartDrawer } from "./components/CartDrawer";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Product } from "./pages/Product";
import { Products } from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <CartDrawer />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="products/:productId" element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
