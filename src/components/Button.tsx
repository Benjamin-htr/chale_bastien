import { css } from "../../styled-system/css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, onClick, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={css({
        w: "full",
        gap: "3",
        rounded: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        border: "1px solid transparent",
        padding: "0.6em 1.2em",
        fontSize: "1em",
        fontWeight: 500,
        fontFamily: "inherit",
        background: "linear-gradient(to bottom right, #064e3b, #059669)",
        color: "white",
        cursor: "pointer",
        transition: "border-color 0.25s",
      })}
    >
      {children}
    </button>
  );
};
