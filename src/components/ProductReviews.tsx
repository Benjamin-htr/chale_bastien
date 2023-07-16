import { css } from "../../styled-system/css";
import { grid } from "../../styled-system/patterns";
import { IProduct } from "../utils/IProduct";
import { averageReviewScore } from "../utils/averageReviewScore";
import { StarsRate } from "./StarsRate";

interface ProductReviewProps {
  product: IProduct;
}

export const ProductReview = ({ product }: ProductReviewProps) => {
  const averageScore = averageReviewScore(product);

  return (
    <div className={css({ mt: "10", mb: "20", scrollMarginTop: "20" })} id="reviews">
      <h2
        className={css({
          fontSize: "xl",
          lineHeight: "xl",
          fontWeight: "bold",
          sm: { fontSize: "2xl", lineHeight: "2xl" },
        })}
      >
        Avis des clients
      </h2>

      <div className={css({ mt: "4", display: "flex", alignItems: "center", gap: "4" })}>
        <p className={css({ fontSize: "3xl", lineHeight: "3xl", fontWeight: "medium" })}>{averageScore.toFixed(1)}</p>
        <div>
          <StarsRate rate={averageScore} />
          <p className={css({ mt: "0.5", fontSize: "xs", lineHeight: "xs", color: "gray.500" })}>
            Basé sur {product.reviews?.length} avis
          </p>
        </div>
      </div>

      <div
        className={grid({
          mt: "8",
          gridTemplateColumns: { base: 1, lg: 2 },
          columnGap: "16px",
          rowGap: "12px",
        })}
      >
        {product.reviews?.map((review) => (
          <blockquote key={review.id}>
            <header className={css({ sm: { display: "flex", alignItems: "center", gap: "4" } })}>
              <StarsRate rate={review.rate} />
              <p className={css({ mt: "2", fontWeight: "medium", sm: { mt: "0" } })}>{review.title}</p>
            </header>
            <p className={css({ mt: "2", color: "gray.700" })}>{review.text}</p>

            <footer className={css({ mt: "4" })}>
              <p className={css({ fontSize: "xs", lineHeight: "xs", color: "gray.500" })}>
                {review.name} - {review.date.toLocaleDateString()}
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
};
