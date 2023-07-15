import { css } from "../../styled-system/css";
import { grid } from "../../styled-system/patterns";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

export const Products = () => {
  return (
    <section>
      <div
        className={css({
          pt: { base: "16", sm: "20" },
          pb: { base: "16", sm: "20" },
          paddingX: "1.5rem",
        })}
      >
        <h2
          className={css({
            pos: "absolute",
            w: "sr.only",
            h: "sr.only",
            p: "sr.only",
            m: "sr.only",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
          })}
        >
          Products
        </h2>

        <div className={grid({ gap: "12", columns: { base: 1, md: 2, lg: 3 } })}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
