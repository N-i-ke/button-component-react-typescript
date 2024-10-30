// src/pages/ButtonShowcase.tsx
import React from "react";
import { Button } from "../components/Button"; // 正しい相対パスを指定

const ButtonShowcase = () => {
  return (
    <div className="button-container">
      <h1>Button Component</h1>
      <Button label="Primary Button" />
      <Button label="Secondary Button" disabled />
      <Button label="Loading Button" loading />
      <Button label="Link Button" href="https://example.com" />
    </div>
  );
};

export default ButtonShowcase;
