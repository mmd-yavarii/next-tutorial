function shorternText(text) {
    return text.split(" ").slice(0, 3).join(" ");
}

function searchProducts(products, search) {
    if (!search) {
        return products;
    }
    const result = products.filter((i) => i.title.toLowerCase().includes(search));
    return result;
}

function filterProducts(products, category) {
    if (!category) return products;
    const result = products.filter((i) => i.category == category);
    return result;
}

function createQueryObject(currentQuery, newQuery) {
    if (newQuery.category == "all") {
        const { category, ...rest } = currentQuery;
        return rest;
    }
    if (newQuery.search == "") {
        const { search, ...rest } = currentQuery;
        return rest;
    }
    return { ...currentQuery, ...newQuery };
}

function getInitialQuery(searchParams) {
    const query = {};
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    if (category) query.category = category;
    if (search) query.search = search;

    return query;
}

function sumProducts(products) {
    const itemsCounter = products.reduce((acc, cur) => acc + cur.quantity, 0);
    const total = +products.reduce((acc, cur) => (acc + cur.price) * cur.quantity, 0).toFixed(2);

    return { total, itemsCounter };
}

function productQuantity(state, id) {
    const index = state.selectedItems.findIndex((i) => i.id == id);
    if (index == -1) return 0;
    return state.selectedItems[index].quantity;
}

export {
    shorternText,
    searchProducts,
    filterProducts,
    createQueryObject,
    getInitialQuery,
    sumProducts,
    productQuantity,
};
