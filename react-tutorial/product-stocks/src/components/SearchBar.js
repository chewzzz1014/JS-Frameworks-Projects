export default function SearchBar({ filterText, inStockOnly }) {
    return (
        <form>
            <div>
                <input
                    type="text"
                    value={filterText}
                    placeholder="Search..."
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                    />
                    {' Only show products in stock'}
                </label>
            </div>
        </form>
    )
}