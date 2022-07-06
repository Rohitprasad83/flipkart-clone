import React from 'react'
import 'styles/filter.css'
import { useProductFilter } from 'context/product-context'
export function Filters() {
  const sizes = ['S', 'M', 'L', 'XL']
  const brands = ['Highlander', 'RedTape', 'Jockey', 'Fila']
  const ideals = ['Men', 'Women', 'Kids']

  const { filters, productDispatch } = useProductFilter()
  const { size, brand, ideal, sortBy } = filters
  return (
    <div className="filter flex-col ">
      <p className="flex-row space-between">
        <span>Filters</span>
        <span
          className="pointer"
          onClick={() => productDispatch({ type: 'ClearAllFilters' })}>
          Clear All
        </span>
      </p>
      <p>Size</p>
      {/* {sizes.map((size, index) => (
        <label key={index}>
          <input
            type="checkbox"
            onChange={() => productDispatch({ type: size })}
            checked={Object.keys(size).filter(s => s === size)}
          />
          {size}
        </label>
      ))} */}

      <label>
        <input
          type="checkbox"
          onChange={() => productDispatch({ type: 'S' })}
          checked={size.S}
        />
        S
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => productDispatch({ type: 'M' })}
          checked={size.M}
        />
        M
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => productDispatch({ type: 'L' })}
          checked={size.L}
        />
        L
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => productDispatch({ type: 'XL' })}
          checked={size.XL}
        />
        XL
      </label>
      <p>Brand</p>

      <label>
        <input
          type="checkbox"
          onChange={() => productDispatch({ type: 'Highlander' })}
          checked={brand.Highlander}
        />
        Highlander
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => productDispatch({ type: 'RedTape' })}
          checked={brand.RedTape}
        />
        RedTape
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => productDispatch({ type: 'Jockey' })}
          checked={brand.Jockey}
        />
        Jockey
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => productDispatch({ type: 'Fila' })}
          checked={brand.Fila}
        />
        Fila
      </label>
      <p>Ideal For</p>

      <label>
        <input
          type="checkbox"
          onChange={() => productDispatch({ type: 'Men' })}
          checked={ideal.Men}
        />
        Men
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => productDispatch({ type: 'Women' })}
          checked={ideal.Women}
        />
        Women
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => productDispatch({ type: 'Kids' })}
          checked={ideal.Kids}
        />
        Kids
      </label>
      <p>Sort By Price</p>
      <label>
        <input
          type="radio"
          name="priceSort"
          checked={sortBy === 'LOW_TO_HIGH'}
          onChange={() => productDispatch({ type: 'LOW_TO_HIGH' })}
        />
        Low to High
      </label>
      <label>
        <input
          type="radio"
          name="priceSort"
          checked={sortBy === 'HIGH_TO_LOW'}
          onChange={() => productDispatch({ type: 'HIGH_TO_LOW' })}
        />
        High to Low
      </label>
    </div>
  )
}
