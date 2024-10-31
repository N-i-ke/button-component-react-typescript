import React, { FC, ButtonHTMLAttributes, ReactNode } from "react";
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
  width?: string | number;
  height?: string | number;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style">; // styleの使用を制限

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  loading,
  type = "button",
  href,
  target,
  width,
  height,
  ...props
}) => {
  // loadingの場合は、アイコンとテキストを表示
  const content = loading ? (
    <>
      <FontAwesomeIcon icon={faSpinner} spin /> ローディング中
    </>
  ) : (
    label
  );

  const handleClick = () => {
    if (href) {
      window.open(href, target); // target="_blank" の場合に別タブで開く
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
      style={{ width, height }}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
