import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Product } from "./pages/Product";
import { Products } from "./pages/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
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
