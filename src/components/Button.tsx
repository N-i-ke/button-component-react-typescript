import React, { FC, ButtonHTMLAttributes } from "react";
import "./Button.css";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
  href?: string; // hrefプロパティを追加
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  loading,
  type = "button",
  href,
  ...props
}) => {
  const content = loading ? "ローディング中..." : label;

  const handleClick = () => {
    if (href) {
      window.location.href = href; // hrefが指定されている場合、リンク先に遷移
    } else if (onClick) {
      onClick(); // onClickが指定されている場合はそれを実行
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || loading}
      type={type}
      className={`button ${disabled ? "disabled" : ""} ${loading ? "loading" : ""}`}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
