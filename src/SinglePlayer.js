import React from "react";
import "./styles.css";

export default function SinglePlayer() {
  const [canCheck, setCanCheck] = React.useState(true);
  const [point, setPoint] = React.useState({ x: null, y: null });
  const [score, setScore] = React.useState(0);
  const [activQuest, setActivQuest] = React.useState({
    id: 1,
    ans: "Skąd jest Husaria?",
    x: 251,
    y: 133
  });

  const ans = [
    { id: 1, ans: "Skąd jest Husaria?", x: 251, y: 133 },
    { id: 2, ans: "Gdzie wymyślono pizze?", x: 242, y: 150 },
    { id: 3, ans: "Gdzie znajdowało się królestwo inków?", x: 130, y: 226 },
    { id: 4, ans: "Gdzie znajduje się wielka rafa koralowa?", x: 425, y: 224 },
    { id: 5, ans: "Gdzie rządził napoleon?", x: 230, y: 142 }
  ];

  function calculateDistance(xa, ya, xb, yb) {
    return Math.floor(Math.sqrt(Math.pow(xa - xb, 2) + Math.pow(ya - yb, 2)));
  }

  function backMove() {
    setCanCheck(true);
    var domElement = document.getElementById("myElement");
    domElement.style.visibility = "hidden";
  }

  function mauseClick(e) {
    if (e.button === 0 && canCheck) {
      setCanCheck(false);
      var rect = e.target.getBoundingClientRect();
      var x = Math.floor(e.clientX - rect.left) - 8;
      var y = Math.floor(e.clientY - rect.top) - 8;
      setPoint({ x: x, y: y });
      var domElement = document.getElementById("myElement");
      domElement.style.position = "relative";
      domElement.style.visibility = "initial";
      domElement.style.top = y + "px";
      domElement.style.left = x + "px";
    }
  }

  function calculateScore() {
    if (!canCheck) {
      setScore(
        score + calculateDistance(activQuest.x, activQuest.y, point.x, point.y)
      );
      setCanCheck(true);
    }
    var rand = randomInt(ans.length);
    setActivQuest(ans[rand]);
  }

  function randomInt(max) {
    return Math.floor(Math.random() * 100) % max;
  }

  return (
    <div className="App div-col">
      {activQuest.ans}
      {/* <div className="mapa" onMouseMove={e => mauseClick(e)}> */}
      <div className="mapa" onClick={e => mauseClick(e)}>
        <div id="myElement" className="circle" />
      </div>
      <div className="div-row">
        <button onClick={backMove}>Cofnij wybór!</button>
        <button onClick={calculateScore}>głosuj</button>
      </div>
      Twój wynik to: {score}
    </div>
  );
}
