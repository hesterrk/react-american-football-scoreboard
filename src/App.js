//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import styled, { keyframes } from 'styled-components'



const animationName = keyframes`
  0% { color: transparent; }
  100% { color: pink; }
`


const Button = styled.button`
animation: ${animationName} 3s ease infinite alternate;
`

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

const [lionScore, setLionScore] = useState(0);

const [tigerScore, setTigerScore] =useState(0);

const [reset, setReset] = useState(0);

//side effect- useEffect hook 
useEffect(() => {
  setTimeout(() => {
    setReset(0);
  }, 4000)

  console.log('you resetted');
})


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <Button className="homeButtons__touchdown" onClick={() => setLionScore(lionScore +6)}>Home Touchdown</Button>
          <Button className="homeButtons__fieldGoal" onClick={() => setLionScore(lionScore + 3)}>Home Field Goal</Button>
        </div>
        <div className="awayButtons">
          <Button className="awayButtons__touchdown" onClick={() => setTigerScore(tigerScore +6)}>Away Touchdown</Button>
          <Button className="awayButtons__fieldGoal" onClick={() => setTigerScore(tigerScore +3)}>Away Field Goal</Button>
        </div>

    {/* //attempting reset */}
        <div className="awayButtons">
        <Button className="awayButtons__touchdown" onClick={() => setTigerScore(reset)}>Reset Tiger's Scoreboard</Button>
         </div>
         <div className="awayButtons">
        <Button className="awayButtons__touchdown" onClick={() => setLionScore(reset)}>Reset Lion's Scoreboard</Button>
         </div>
      </section>
    </div>
  );
}

export default App;

//styled components

