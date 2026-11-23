import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  function handleAddToCart(title) {
    setCount(count + 1);
    setLastAdded(title);
  }

  return (
    <div className="app">
      <h1>CvSU Mini Store</h1>

      <p className="cart-message">
        {count === 0
          ? "Your cart is empty."
          : `Items added to cart: ${count} (Last added: ${lastAdded})`}
      </p>

      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
            onAddToCart={handleAddToCart}
          >
            {product.id === 1 && <span>New</span>}
            {product.id === 5 && <span>Sale</span>}
          </ProductCard>
        ))}
      </div>
    </div>
  );
}

export default App;