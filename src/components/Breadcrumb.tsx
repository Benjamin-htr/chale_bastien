import { css } from "../../styled-system/css";

interface BreadcrumbProps {
  title: string;
}

export const Breadcrumb = ({ title }: BreadcrumbProps) => {
  return (
    <nav aria-label=" Breadcrumb">
      <ol
        role="list"
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "1",
          fontSize: "sm",
          lineHeight: "sm",
          color: "gray.600",
        })}
      >
        <li>
          <a
            href="/"
            className={css({
              display: "block",
              color: "gray.800",
              transitionProperty: "transition",
              transitionTimingFunction: "transition",
              transitionDuration: "transition",
              _hover: { color: "gray.700" },
            })}
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
              Home
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={css({ h: "4", w: "4" })}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
          </a>
        </li>

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={css({ h: "4", w: "4" })}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </li>

        <li>
          <div
            className={css({
              display: "block",
              transitionProperty: "transition",
              transitionTimingFunction: "transition",
              transitionDuration: "transition",
              _hover: { color: "gray.700" },
            })}
          >
            {title}
          </div>
        </li>
      </ol>
    </nav>
  );
};