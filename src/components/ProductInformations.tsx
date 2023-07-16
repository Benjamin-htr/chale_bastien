import { css } from "../../styled-system/css";
import { IProduct } from "../utils/IProduct";
import { averageReviewScore } from "../utils/averageReviewScore";
import { StarsRate } from "./StarsRate";

interface ProductInformationsProps {
  product: IProduct;
}

export const ProductInformations = ({ product }: ProductInformationsProps) => {
  return (
    <div>
      <h1
        className={css({
          fontSize: "2xl",
          lineHeight: "2xl",
          fontWeight: "bold",
          color: "zinc.800",
          sm: { fontSize: "4xl", lineHeight: "4xl" },
        })}
      >
        {product.title}
      </h1>
      <p className={css({ mt: "4", fontSize: "3xl", lineHeight: "3xl", fontWeight: "bold", color: "emerald.900" })}>
        {product.price}€
      </p>

      <div className={css({ mt: "4" })}>
        <div className={css({ display: "flex", alignItems: "center", gap: "4" })}>
          <StarsRate rate={averageReviewScore(product)} />
          <a
            href="#reviews"
            className={css({
              fontSize: "sm",
              lineHeight: "sm",
              color: "emerald.900",
              _hover: { textDecorationLine: "underline" },
            })}
          >
            {product.reviews?.length} avis
          </a>
        </div>
        <div className={css({ mt: "6" })}>
          <p className={css({ fontSize: "base", lineHeight: "base", color: "zinc.900", whiteSpace: "pre-wrap" })}>
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};
