import { css } from "../../styled-system/css";

export const Footer = () => {
  return (
    <footer className={css({ fontSize: "sm", lineHeight: "sm", color: "gray.600" })}>
      <div
        className={css({
          display: "flex",
          flexDirection: { base: "column", sm: "row" },
          gap: { base: "5", sm: "10" },
          pt: "8",
          pb: "8",
          paddingX: "1.5rem",
        })}
      >
        Par Sony & Florine & Sophia & Bastien
      </div>
    </footer>
  );
};
