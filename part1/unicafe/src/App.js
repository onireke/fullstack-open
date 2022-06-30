import { useState } from "react";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAllClicks] = useState(0);

  function handleGoodClick() {
    setAllClicks(allClicks + 1);

    setGood(good + 1);
  }
  function handleNeutralClick() {
    setAllClicks(allClicks + 1);
    setNeutral(neutral + 1);
  }

  function handleBadClick() {
    setAllClicks(allClicks + 1);
    setBad(bad + 1);
  }

  let average = (good + bad) / (good + bad + neutral);
  let positive = (good / (good + bad + neutral)) * 100;

  return (
    <div className="App">
      <h1>give</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allClicks={allClicks}
        average={average}
        positive={positive}
      />
    </div>
  );
}

export default App;
