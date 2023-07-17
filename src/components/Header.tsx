import { Link } from "react-router-dom";
import { css } from "../../styled-system/css";
import { grid } from "../../styled-system/patterns";
import { CartIcon } from "./CartIcon";

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
          className={grid({
            gridTemplateColumns: "3",
            alignItems: "center",
            paddingX: "1.5rem",
          })}
        >
          <div>
            <Link
              to="/team"
              className={css({ color: "black !important", fontSize: "3xl", _hover: { textDecoration: "violet" } })}
            >
              🤝
            </Link>
          </div>
          <Link to="/">
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
          </Link>
          <div className={css({ justifySelf: "end" })}>
            <CartIcon />
          </div>
        </nav>
      </div>
    </header>
  );
};
