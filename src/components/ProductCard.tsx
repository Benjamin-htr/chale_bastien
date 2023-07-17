import { Link } from "react-router-dom";
import { css } from "../../styled-system/css";
import { IProduct } from "../utils/IProduct";
import { Button } from "./Button";

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/products/${product?.id}`}
      role="group"
      className={css({
        overflow: "hidden",
        rounded: "lg",
        borderLeftColor: "l.orange-100",
        shadow: "sm",
        _hover: { shadow: "md" },
      })}
    >
      <div className={css({ pos: "relative" })}>
        <img loading="eager" src={product?.images[0]} className={css({ w: "full", h: "full", objectFit: "cover" })} />
        <div
          className={css({
            pos: "absolute",
            inset: "0",
            zIndex: "10",
            display: "grid",
            alignItems: "flex-end",
            justifyItems: "center",
            opacity: { base: "0", _groupHover: "1" },
            transitionProperty: "all",
            transitionTimingFunction: "all",
            transitionDuration: "all",
          })}
        >
          <Button>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={css({ h: "5", w: "5" })}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                ></path>
              </svg>
            </span>
            <span>Acheter maintenant</span>
          </Button>
        </div>
      </div>
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          pt: "6",
          pb: "6",
          pl: "5",
          pr: "5",
          color: "zinc.700",
        })}
      >
        <h3 className={css({ textDecoration: { base: "none", _groupHover: "underline" } })}>{product?.title}</h3>
        <p className={css({ fontWeight: "bold" })}>{product.price}€</p>
      </div>
    </Link>
  );
};
