import React from "react";
import { nanoid } from "nanoid";
import "./App.css";

function Die(props) {
  const { id, value, isHeld, holdDice } = props;
  const styles = { backgroundColor: isHeld ? "#59E391" : "white" };
  return (
    <div className="die" style={styles} onClick={holdDice}>
      {value}
    </div>
  );
}

function getRandomint(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());
  function allNewDice() {
    return Array.from({ length: 10 }, (index) => {
      return {
        value: getRandomint(1, 6),
        isHeld: false,
        id: nanoid(),
      };
    });
  }

  const diceGrid = dice.map((die) => (
    <Die
      key={die.id}
      id={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : { ...die, value: getRandomint(1, 6) };
      })
    );
  }

  return (
    <main>
      <div className="die-container">{diceGrid}</div>

      <button className="roll-button" onClick={rollDice}>
        Roll babay!
      </button>
    </main>
  );
}
