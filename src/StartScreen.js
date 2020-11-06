import React from "react";
import "./styles.css";

export default function StartScreen() {
  return (
    <div className="Start div-col">
      <div>Wybierz tryb gry!</div>
      <div className="div-row">
        <div className="game-mode-button">Single Player</div>
        <div className="game-mode-button">Multi Player</div>
      </div>
    </div>
  );
}
