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
      })}
    >
      {children}
    </button>
  );
};
