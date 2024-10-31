import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

describe("Button component", () => {
  test("renders with label", () => {
    render(<Button label="クリック" />);
    const buttonElement = screen.getByText("クリック");
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="クリック" onClick={handleClick} />);
    const buttonElement = screen.getByText("クリック");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("displays loading state", () => {
    render(<Button label="クリック" loading />);
    const loadingText = screen.getByText("ローディング中");
    expect(loadingText).toBeInTheDocument();
    expect(screen.getByRole("img", { hidden: true })).toHaveClass("fa-spinner"); // ローディング中アイコンのクラスをチェック
  });

  test("is disabled when disabled prop is true", () => {
    render(<Button label="クリック" disabled />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });

});
