export const getQuantity = id => {
  const cartIds = JSON.parse(window.sessionStorage.getItem("cart"));
  const ids = cartIds.filter(itemId => itemId === id);
  return ids.length;
}
