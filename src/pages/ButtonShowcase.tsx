// src/pages/ButtonShowcase.tsx
import React from "react";
import { Button } from "../components/Button"; // 正しい相対パスを指定

const ButtonShowcase = () => {
  return (
    <div className="button-container">
      <h1>フロントエンド・ボタンコンポーネント（React・TypeScript）</h1>
      <p>
        ホバー時とフォーカス時のスタイルは全てのボタンに適用しています
        <br />
        ＊非活性時・ローディング以外
      </p>
      <p>テキストのみ</p>
      <Button label="テキスト" />
      <p>非活性時</p>
      <Button label="非活性時" disabled />
      <p>ローディング時</p>
      <Button label="ローディング時" loading />
      <p>リンク付き</p>
      <Button label="リンク付き" href="https://example.com" />
    </div>
  );
};

export default ButtonShowcase;
