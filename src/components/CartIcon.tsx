import { css } from "../../styled-system/css";

export const CartIcon = () => {
  return (
    <div>
      <button className={css({ pos: "relative", bgColor: "transparent !important" })}>
        <span
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
          Open your cart
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={css({ w: "7", h: "7", sm: { w: "8", h: "8" }, pointerEvents: "none" })}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        {/* <div
          className={css({
            pos: "absolute",
            right: ".right-2",
            top: ".top-1",
            sm: { right: ".right-1", top: "0" },
            bgColor: "emerald.900",
            color: "white",
            fontSize: "12px",
            rounded: "full",
          })}
        >
          <span
            className={css({
              w: "5",
              h: "5",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            })}
          >
            {$cart.totalQuantity}
          </span>
        </div> */}
      </button>
    </div>
  );
};
