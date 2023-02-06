import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { useState } from 'react'

export default function FilterableProductTable() {
    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false)

    return (
        <div>
            <SearchBar />
            <ProductTable />
        </div>
    )
}