import { css } from "../../styled-system/css";

interface StarsRateProps {
  rate: number;
}

export const StarsRate = ({ rate }: StarsRateProps) => {
  return (
    <div className={css({ display: "flex" })}>
      {new Array(5).fill(4).map((star, index) => {
        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={css({ h: "5", w: "5", color: !(index >= rate) ? "yellow.400" : "gray.200" })}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      })}
    </div>
  );
};
