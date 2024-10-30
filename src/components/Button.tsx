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
