import { css } from "../../styled-system/css";

export const ProductAccordion = () => {
  const accordions = [
    {
      title: "Livraison",
      icon: "truck",
      content:
        "La livraison est offerte à partir de 50€ d'achat. Les commandes sont expédiées sous 48h. Les retours sont gratuits.",
    },
    {
      title: "Instructions de lavage",
      icon: "care",
      content:
        "Lavage en machine à 30°. Ne pas mettre au sèche-linge. Ne pas repasser. Ne pas nettoyer à sec. Ne pas utiliser d'eau de javel.",
    },
  ];
  return (
    <div className={css({ display: "grid" })}>
      {accordions.map((accordion, index) => (
        <details key={index}>
          <summary
            className={css({
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "space-between",
              pt: "3",
              pb: "3",
              pl: "1",
              pr: "1",
              fontWeight: "bold",
              color: "zinc.700",
            })}
          >
            <div className={css({ display: "flex", alignItems: "center", gap: "2" })}>
              {accordion.icon === "truck" && (
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
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              )}
              {accordion.icon === "care" && (
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
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              )}
              {accordion.title}
            </div>
            <span
              className={css({
                transitionProperty: "transition",
                transitionTimingFunction: "transition",
                transitionDuration: "transition",
                // "group-open": {
                //   transform:
                //     "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                // },
              })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={css({ h: "4", w: "4" })}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </summary>
          <div className={css({ p: "4", fontSize: "sm", lineHeight: "sm", color: "zinc.600" })}>
            {accordion.content}
          </div>
        </details>
      ))}
    </div>
  );
};
