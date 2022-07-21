import React ,{useState,useEffect} from 'react'
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import HighScores from "./components/HighScores";

import {QuizContext} from "./helpers/Contexts";

import './App.css'

function App() {
    const [gameState,setGameState] = useState("menu");
    const [score,setScore] = useState(0);
    const [highScore,setHighScore] = useState([]);
    const [name,setName] = useState(null);
    const [time,setTime] = useState(50);
    const [beginCountDown,setBeginCountDown] = useState(false);

    function countDown(){
        setTime(time => time-1);
    }

useEffect(() => {
      const timer = () => {

                beginCountDown ? countDown(): "";
            }
           if (time <= 0) {
               setGameState("endScreen")
                return;
            }
            const id = setInterval(timer, 1000);
            return () => clearInterval(id);
    },[time,beginCountDown])
    
	return (
		<div className="App">
			<Header time={time} setTime={setTime} highScore={highScore} setHighScore={setHighScore} name={name} setName={setName} gameState={gameState} setGameState={setGameState}/>
            <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
            {gameState === "menu" && <MainMenu time={time} setTime={setTime} setBeginCountDown={setBeginCountDown}/>}
            {gameState === "quiz" && <Quiz time={time} setTime={setTime}/>}
            {gameState === "endScreen" && <EndScreen time={time} setTime={setTime} setHighScore={setHighScore} highScore={highScore} name={name} setName={setName}/>}
            {gameState === "highScore" && <HighScores highScore={highScore} setHighScore={setHighScore} name={name} setName={setName} setGameState={setGameState} setTime={setTime}/>}
            </QuizContext.Provider>
		</div>
	)
}

export default App
