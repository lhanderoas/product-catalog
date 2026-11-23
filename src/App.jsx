import { useState, useEffect } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

    useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  function handleAddToCart(title) {
    setCount(count + 1);
    setLastAdded(title);
  }

  function handleClearFilters() {
    setSearchText("");
    setDebouncedSearch("");
    setCategory("All");
    setSortOrder("default");
  }

  const matched = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const filteredProducts = [...matched];
  if (sortOrder === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="app">
      <h1>CvSU Mini Store</h1>

      <p className="cart-message">
        {count === 0
          ? "Your cart is empty."
          : `Items added to cart: ${count} (Last added: ${lastAdded})`}
      </p>

      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
        category={category}
        onCategoryChange={setCategory}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        onClear={handleClearFilters}
      />

      <p className="result-count">
        Showing {filteredProducts.length} of {products.length} products
      </p>

      {filteredProducts.length === 0 ? (
        <p className="empty-state">
          No products found. Try a different keyword or category.
        </p>
      ) : (
        <div className="grid">
          {filteredProducts.map((product) => (
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
      )}
    </div>
  );
}

export default App;