const filterBySize = (products, size) => {
    let filteredProducts = []
    const sizeArray = Object.keys(size)
    const checkEverySizeIsFalse = sizeName => size[sizeName] === false
    const AllSizeAreFalse = sizeArray.every(checkEverySizeIsFalse)

    for (const sizeType of sizeArray) {
        if (size[sizeType]) {
            const temp = products.filter(product =>
                product.size.some(p => p.toLowerCase() === sizeType.toLowerCase())
            )
            filteredProducts = [...filteredProducts, ...temp]
        }
    }
    return AllSizeAreFalse ? products : [...new Set(filteredProducts)]
}

export { filterBySize }