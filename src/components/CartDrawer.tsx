import { css } from "../../styled-system/css";
import { grid, gridItem } from "../../styled-system/patterns";
import { calculateTotalPrice } from "../utils/calculateTotalPrice";
import { useAppStore } from "../utils/store";

export const CartDrawer = () => {
  const { cart, showCart, toggleCart, removeFromCart } = useAppStore();

  if (!showCart) return null;

  return (
    <div
      className={css({ pos: "relative", zIndex: "50" })}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={css({
          pos: "fixed",
          inset: "0",
          bgColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(4px)",
          transitionProperty: "opacity",
          transitionTimingFunction: "opacity",
          transitionDuration: "opacity",
        })}
        onClick={toggleCart}
      />

      <div className={css({ inset: "0", overflow: "hidden" })}>
        <div className={css({ pos: "absolute", inset: "0", overflow: "hidden" })}>
          <div
            className={css({
              pointerEvents: "none",
              position: "fixed",
              top: "0",
              bottom: "0",
              right: "0",
              display: "flex",
              maxW: "full",
              pl: "6",
              _focus: { ring: "none", ringOffset: "none" },
            })}
          >
            <div className={css({ pointerEvents: "auto", w: "screen", maxW: "lg", maxH: "screen", bgColor: "white" })}>
              <div className={css({ display: "flex", flexDir: "column", minH: "full", maxH: "screen" })}>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    shadow: "sm",
                    p: "5",
                  })}
                >
                  <h2
                    className={css({
                      fontSize: "2xl",
                      lineHeight: "2xl",
                      display: "flex",
                      gap: "4",
                      alignItems: "center",
                      fontWeight: "bold",
                      color: "zinc.800",
                    })}
                    id="slide-over-title"
                  >
                    Vôtre panier
                  </h2>
                  <div className={css({ ml: "3", display: "flex", h: "7", alignItems: "center" })}>
                    <button
                      onClick={toggleCart}
                      type="button"
                      className={css({ m: ".m-2", p: "2", color: "gray.400", _hover: { color: "gray.500" } })}
                    >
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
                        Fermer le panier
                      </span>
                      <svg
                        className={css({ h: "6", w: "6" })}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className={css({ flex: "1", overflowY: "scroll" })}>
                  <div className={css({ pl: "5", pr: "5" })}>
                    {cart.length > 0 ? (
                      <ul
                        role="list"
                        className={css({
                          borderTopWidth: "calc(1px * calc(1 - var(--tw-divide-y-reverse)))",
                          borderBottomWidth: "calc(1px * var(--tw-divide-y-reverse))",
                          borderColor: "zinc.100",
                        })}
                      >
                        {cart.map((item) => (
                          <li
                            key={item.id}
                            className={grid({
                              pt: "8",
                              pb: "8",
                              gridTemplateColumns: "12",
                              gap: "3",
                            })}
                          >
                            <div
                              className={gridItem({
                                overflow: "hidden",
                                rounded: "lg",
                                gridColumn: "2",
                              })}
                            >
                              {
                                <img
                                  src={item.images[0]}
                                  className={css({
                                    objectFit: "cover",
                                    h: "full",
                                    objectPosition: "center",
                                  })}
                                />
                              }
                            </div>
                            <div
                              className={gridItem({
                                gridColumn: "8",
                                display: "flex",
                                flexDir: "column",
                                justifyContent: "space-between",
                                gap: "2",
                              })}
                            >
                              <div>
                                <a
                                  className={css({ _hover: { textDecorationLine: "underline" }, w: "fit" })}
                                  href={`/products/${item.id}`}
                                >
                                  {item.title}
                                </a>
                                <span>
                                  {"   "} x {item.quantity}
                                </span>
                              </div>
                              <p className={css({ fontSize: "xs", lineHeight: "xs" })}>{item.price}€</p>
                            </div>
                            <div
                              className={gridItem({
                                gridColumn: "2",
                                alignItems: "flex-end",
                                display: "flex",
                                justifyContent: "space-between",
                                flexDir: "column",
                              })}
                            >
                              <button
                                // on:click={() => {
                                //   removeItem(item.id);
                                // }}
                                onClick={() => removeFromCart(item.id)}
                                type="button"
                                // disabled={$isCartUpdating}
                                className={css({ color: "black" })}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className={css({ w: "5", h: "5" })}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </button>
                              <div>
                                <p className={css({ fontWeight: "medium" })}>{item.price * item.quantity!}€</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className={css({ textAlign: "center", mt: "20" })}>
                        <p className={css({ color: "gray.500" })}>Vôtre panier est vide</p>
                        <a
                          href="/"
                          className={css({
                            fontWeight: "semibold",
                            color: "emerald.900",
                            _hover: { color: "emerald.700" },
                          })}
                        >
                          Continuer vos achats
                          <span aria-hidden="true"> &rarr;</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div className="">
                  <div
                    className={css({
                      borderTopWidth: "1px",
                      borderColor: "zinc.200",
                      pt: "6",
                      pb: "6",
                      pl: "4",
                      pr: "4",
                      sm: { pl: "6", pr: "6" },
                    })}
                  >
                    <div
                      className={css({
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "base",
                        lineHeight: "base",
                        fontWeight: "medium",
                        color: "gray.900",
                      })}
                    >
                      <p>Sous-total</p>
                      <p>{calculateTotalPrice(cart)} €</p>
                    </div>
                    <p className={css({ mt: "0.5", fontSize: "sm", lineHeight: "sm", color: "gray.500" })}>
                      Livraison et taxes calculées au moment du paiement
                    </p>
                    <div className={css({ mt: "6" })}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
