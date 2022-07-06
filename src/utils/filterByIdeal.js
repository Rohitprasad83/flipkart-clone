const filterByIdeal = (products, ideal) => {
    let filteredProducts = []
    const idealArray = Object.keys(ideal)
    const checkEveryIdealIsFalse = idealName => ideal[idealName] === false
    const AllSizeAreFalse = idealArray.every(checkEveryIdealIsFalse)

    for (const idealType of idealArray) {
        if (ideal[idealType]) {
            const temp = products.filter(product =>
                product.ideal.toLowerCase().includes(idealType.toLowerCase())
            )
            filteredProducts = [...filteredProducts, ...temp]
        }
    }
    return AllSizeAreFalse ? products : [...new Set(filteredProducts)]
}

export { filterByIdeal }