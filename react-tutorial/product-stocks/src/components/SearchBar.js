export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
    return (
        <form>
            <div>
                <input
                    type="text"
                    value={filterText}
                    placeholder="Search..."
                    onChange={(e) => onFilterTextChange(e.target.value.trim())}
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => onInStockOnlyChange(e.target.value)}
                    />
                    {' Only show products in stock'}
                </label>
            </div>
        </form>
    )
}