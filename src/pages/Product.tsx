import { useParams } from "react-router-dom";
import { css } from "../../styled-system/css";
import { gridItem } from "../../styled-system/patterns";
import { Breadcrumb } from "../components/Breadcrumb";
import { Button } from "../components/Button";
import { ProductAccordion } from "../components/ProductAccordion";
import { ProductImageGallery } from "../components/ProductImageGallery";
import { ProductInformations } from "../components/ProductInformations";
import { ProductReview } from "../components/ProductReviews";
import { products } from "../data/products";
import { useAppStore } from "../utils/store";

export const Product = () => {
  const { productId } = useParams();
  const { addToCart, toggleCart } = useAppStore();

  if (!productId) throw new Error("No product id provided");

  const product = products.at(parseInt(productId) - 1);

  if (product === undefined) {
    return <div>Product not found</div>;
  }

  const onAddToCart = () => {
    addToCart(product);
    toggleCart();
  };

  return (
    <>
      <div className={css({ paddingX: "1.5rem", pt: "6" })}>
        <Breadcrumb title={product.title} />
      </div>

      <section className={css({ paddingX: "1.5rem" })}>
        <div
          className={css({
            pb: "16",
            pt: "6",
            display: { base: "black", lg: "grid" },
            gridTemplateColumns: { base: "1fr", lg: "repeat(12,minmax(0,1fr))" },
            gap: { base: "8", lg: "20" },
          })}
        >
          <div className={gridItem({ colSpan: { base: 12, lg: 7 } })}>
            <ProductImageGallery images={product.images} />
          </div>

          <div className={gridItem({ mt: { base: "8", lg: 0 }, colSpan: 5 })}>
            <ProductInformations product={product} />

            <div className={css({ mt: "6" })}>
              <Button onClick={onAddToCart}>Ajouter au panier</Button>
            </div>

            <div className={css({ mt: "8" })}>
              <ProductAccordion />
            </div>
          </div>
        </div>
      </section>

      <section className={css({ paddingX: "1.5rem" })}>
        <ProductReview product={product} />
      </section>
    </>
  );
};
