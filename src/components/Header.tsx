import { css } from "../../styled-system/css";

export const Header = () => {
  return (
    <header className={css({ pos: "sticky", top: "0", zIndex: "40" })}>
      <div
        className={css({
          borderBottomWidth: "1px",
          bgColor: "#ffffffb3",
          pt: "3",
          pb: "3",
          backdropFilter: "blur(40px)",
          borderColor: "gray.200",
        })}
      >
        <nav
          className={css({
            w: "container",
            maxW: "container",
            display: "grid",
            gridTemplateColumns: "cols.3",
            alignItems: "center",
          })}
        >
          <a href="/">
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
              Logo
            </span>
            {/* <Logo /> */}
          </a>
          <h1
            className={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              fontSize: { base: "xl !important", sm: "2xl !important" },
              fontWeight: "semibold",
              color: "gray.900",
            })}
          >
            Châles <img src="../../icon.png" className={css({ height: "40px" })} /> Tibétains
          </h1>
          <div className={css({ justifySelf: "end" })}>{/* <CartIcon client:load /> */}</div>
        </nav>
      </div>
    </header>
  );
};
