import React, {
  FC,
  ButtonHTMLAttributes,
  ReactNode,
  CSSProperties,
} from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type ButtonProps = {
  label: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
  href?: string;
  target?: string;
  style?: CSSProperties; 
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  loading,
  type = "button",
  href,
  target,
  style,
  ...props
}) => {
  const content = loading ? (
    <>
      <FontAwesomeIcon icon={faSpinner} spin /> ローディング中
    </>
  ) : (
    label
  );

  const handleClick = () => {
    if (href) {
      window.open(href, target);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || loading}
      type={type}
      className={`button ${disabled ? "disabled" : ""} ${loading ? "loading" : ""}`}
      style={style} 
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
