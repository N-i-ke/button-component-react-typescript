// src/pages/ButtonShowcase.test.tsx
import React from "react";
import Button from "../components/Button";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonShowcase from "./ButtonShowcase";

describe("ButtonShowcase", () => {
  beforeEach(() => {
    render(<ButtonShowcase />);
  });

  it("renders the title", () => {
    expect(
      screen.getByText(
        "フロントエンド・ボタンコンポーネント（React・TypeScript）"
      )
    ).toBeInTheDocument();
  });

  it("renders the button with text and icon", () => {
    expect(screen.getByText("テキスト")).toBeInTheDocument();
  });

  it("shows alert on clicking text button", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    const button = screen.getByText("テキスト");
    fireEvent.click(button);
    expect(alertMock).toHaveBeenCalledWith("クリックされました!");
    alertMock.mockRestore();
  });

  it("renders disabled button", () => {
    const button = screen.getByRole("button", { name: /非活性時/i });
    expect(button).toBeDisabled();
  });

  it("renders loading button", () => {
    render(<Button label="ローディング中..." loading />);
    expect(screen.getByText("ローディング中...")).toBeInTheDocument();
  });

  it("renders button with link", () => {
    const button = screen.getByRole("button", { name: /リンク付き/i });
    expect(button).toBeInTheDocument();
  });
});
