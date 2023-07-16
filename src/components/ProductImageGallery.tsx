import { css } from "../../styled-system/css";
import { grid, gridItem } from "../../styled-system/patterns";

interface ProductImageGalleryProps {
  images: string;
}

export const ProductImageGallery = ({ images }: ProductImageGalleryProps) => {
  return (
    <div className={grid({ gap: { base: "4", lg: "6" }, gridTemplateColumns: { base: "unset", md: "8" } })}>
      <div
        className={gridItem({
          order: { base: "unset", md: "2" },
          gridColumn: { base: "unset", md: "6" },
        })}
      >
        <img
          className={css({ overflow: "hidden", rounded: "lg", h: "full", objectFit: "cover" })}
          loading="eager"
          src={images}
          sizes={`
          (min-width: 1540px) 475px,
          (min-width: 1280px) 389px,
          (min-width: 1040px) 304px,
          (min-width: 780px) 720px,
          (min-width: 680px) 592px,
          calc(94.44vw - 31px)
        `}
        />
      </div>
      <div
        className={gridItem({
          display: { base: "flex", md: "grid" },
          gridTemplateColumns: "cols.4",
          gap: { base: "4", md: "6" },
          order: { base: "unset", md: "1" },
          gridColumn: { base: "unset", md: "2" },
          flexDir: { base: "row", md: "column" },
        })}
      >
        {new Array(3).fill(4).map((_, index) => {
          if (index < 3) {
            return (
              <div className={css({ overflow: "hidden", rounded: "lg" })} key={index}>
                <img
                  loading="eager"
                  src={images}
                  sizes={`
                  (min-width: 1540px) 475px,
                  (min-width: 1280px) 389px,
                  304px
                `}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
