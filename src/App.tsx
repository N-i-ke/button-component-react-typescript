// src/App.tsx
import React from "react";
import ButtonShowcase from "./pages/ButtonShowcase"; // 修正：名前付きインポートからデフォルトインポートに変更
import "./App.css";

function App() {
  return (
    <div className="App">
      <ButtonShowcase />
    </div>
  );
}

export default App;
