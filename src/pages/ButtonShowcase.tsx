import React from "react";
import { Button } from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faLink,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

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
      <Button
        label={
          <>
            <FontAwesomeIcon icon={faCoffee} /> テキスト
          </>
        }
        onClick={() => alert("クリックされました!")}
      />
      <p>非活性時</p>
      <Button
        label={
          <>
            <FontAwesomeIcon icon={faEyeSlash} /> 非活性時
          </>
        }
        disabled
      />
      <p>ローディング時</p>
      <Button label loading />
      <p>リンク付き</p>
      <Button
        label={
          <>
            <FontAwesomeIcon icon={faLink} /> リンク付き
          </>
        }
        href="https://example.com"
        target="_blank"
      />
    </div>
  );
};

export default ButtonShowcase;
