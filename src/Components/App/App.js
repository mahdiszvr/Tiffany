import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Home/Home.js";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import ArticlePage from "./ArticlePage/ArticlePage.js";
import Contact from "./Contact/Contact.js";

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const fetchTiffany = () => {
    try {
      fetch("https://api.jsonbin.io/v3/b/65ec835adc74654018b07f9f", {
        headers: {
          "X-Access-Key":
            "$2a$10$Isc2MLwANTwFZ9NA1H5LHOLCm.BcY1acf98meXp77xVldXxJpswKW",
        },
      })
        .then((data) => data.json())
        .then((res) => setProducts(res.record));

      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchTiffany();
  }, []);

  return (
    <>
      <div>
        {error && error ? (
          <div className="text-red-600">
            <span>{error}</span>
          </div>
        ) : null}
      </div>

      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;