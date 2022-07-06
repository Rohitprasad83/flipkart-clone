import React from 'react'
import {
  data,
  sortByPrice,
  filterBySize,
  filterByBrand,
  filterByIdeal,
} from 'utils'
import { Card, Filters, Header } from 'components'
import { useProductFilter } from 'context/product-context'
export function ProductListing() {
  const { filters } = useProductFilter()
  const filteredByBrand = filterByBrand(data.products, filters.brand)
  const filteredByIdeal = filterByIdeal(filteredByBrand, filters.ideal)
  const filteredProducts = filterBySize(filteredByIdeal, filters.size)
  const sortedProducts = sortByPrice(filteredProducts, filters.sortBy)
  return (
    <div>
      <Header />
      <main className="flex-row gap-1">
        <Filters />
        <div className="card-container flex-row">
          {sortedProducts &&
            sortedProducts.map(product => (
              <Card key={product.id} product={product} />
            ))}

          {sortedProducts && sortedProducts.length < 1 && (
            <h1>0 Products available for selected filter</h1>
          )}
        </div>
      </main>
    </div>
  )
}
