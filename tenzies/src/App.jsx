import React from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import "./App.css";

/* todo Improvements
- Put real dots on the dice (CSS)
- Track number of rolls / time to win
- Save your best time
- put little people on the dice
*/

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
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const val0 = dice[0].value;
    const sameVals = dice.every((die) => die.value == val0);
    allHeld && sameVals && setTenzies(true);
  }, [dice]);

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
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : { ...die, value: getRandomint(1, 6) };
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  const buttonText = tenzies ? "You won babay!" : "Roll babay!";
  const { width, height } = window;
  return (
    <main>
      {tenzies && <Confetti width={width} height={height} />}
      <h1 className="title">Manzies</h1>
      <p className="instructions">Roll until all dice are the same!</p>
      <div className="die-container">{diceGrid}</div>
      <button className="roll-button" onClick={rollDice}>
        {buttonText}
      </button>
    </main>
  );
}
