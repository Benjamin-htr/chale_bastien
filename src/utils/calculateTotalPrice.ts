import { IProduct } from "./IProduct";

export const calculateTotalPrice = (products: IProduct[]) => {
  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * (product.quantity || 0);
  }, 0);

  return totalPrice;
};
