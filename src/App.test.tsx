import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders ButtonShowcase component", () => {
  render(<App />);
  const titleElement = screen.getByText(
    /フロントエンド・ボタンコンポーネント（React・TypeScript）/i,
  );
  expect(titleElement).toBeInTheDocument();
});
