import "./SearchBar.css";

const categories = ["All", "Electronics", "Books", "School Supplies", "Accessories"];

function SearchBar({
  searchText,
  onSearchChange,
  category,
  onCategoryChange,
  sortOrder,
  onSortChange,
  onClear,
}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select value={sortOrder} onChange={(e) => onSortChange(e.target.value)}>
        <option value="default">Default</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
      </select>

      <button type="button" onClick={onClear}>
        Clear Filters
      </button>
    </div>
  );
}

export default SearchBar;