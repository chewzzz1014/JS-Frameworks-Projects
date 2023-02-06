import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default function ProductTable({ products, filterText, inStockOnly }) {
    const rows = []
    let categories = []

    products.forEach(p => {

        // did not match search keyword
        if (p.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
            return

        // did user require in stock data only?
        if (inStockOnly && !p.stocked)
            return

        // create a category header
        if (!categories.includes(p.category)) {
            rows.push(
                <ProductCategoryRow
                    category={p.category}
                    key={p.category}
                />
            )
            categories.push(p.category)
        }

        rows.push(
            <ProductRow
                product={p}
                key={p.name}
            />
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}