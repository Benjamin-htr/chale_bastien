import { IProduct } from "./IProduct";

export const averageReviewScore = (product: IProduct) => {
  const reviews = product.reviews;

  if (!reviews || reviews.length === 0) return 0;

  const sum = reviews.reduce((acc, review) => {
    return acc + review.rate;
  }, 0);

  return sum / reviews.length;
};
