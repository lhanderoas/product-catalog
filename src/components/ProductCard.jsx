import "./ProductCard.css";

function ProductCard({ title, price, category = "General", inStock, onAddToCart, children }) {
  const formattedPrice = price.toLocaleString("en-PH", {
    style: "currency",
    currency: "PHP",
  });

  return (
    <div className={inStock ? "card" : "card out-of-stock"}>
      {children && <div className="badge">{children}</div>}
      <h3>{title}</h3>
      <p className="category">{category}</p>
      <p className="price">{formattedPrice}</p>

      {inStock ? (
        <p className="status in">In Stock</p>
      ) : (
        <p className="status out">Out of Stock</p>
      )}

      <button disabled={!inStock} onClick={() => onAddToCart(title)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;