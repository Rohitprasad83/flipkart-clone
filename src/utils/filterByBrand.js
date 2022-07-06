const filterByBrand = (products, brand) => {
    let filteredProducts = []
    const brandArray = Object.keys(brand)
    const checkEveryBrandIsFalse = brandName => brand[brandName] === false
    const AllSizeAreFalse = brandArray.every(checkEveryBrandIsFalse)

    for (const brandType of brandArray) {
        if (brand[brandType]) {
            const temp = products.filter(product =>
                product.brand.toLowerCase().includes(brandType.toLowerCase())
            )
            filteredProducts = [...filteredProducts, ...temp]
        }
    }
    return AllSizeAreFalse ? products : [...new Set(filteredProducts)]
}

export { filterByBrand }