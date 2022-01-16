export const getTotalPrice = (items, ids) => {
let total = 0;
  items.forEach(item => {
      const indexes = ids.filter(id => id === item.id);
      total = total + item.price * indexes.length;
  });
  return total;
}
