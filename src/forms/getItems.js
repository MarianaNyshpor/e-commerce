export const getItems = (items, ids) => {
    let array = [];
    items.forEach(item => {
        const indexes = ids.filter(id => id === item.id);
        array.push({
            productId: item.id,
            quantity: indexes.length
        });
    });
    return array;
}
