import products from './data'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default function ProductTable() {
    const rows = []
    let categories = []

    products.forEach(p => {

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