import React,{useContext,useEffect,useState} from "react";
import {QuizContext} from "../helpers/Contexts"
function MainMenu({time,setTime,setBeginCountDown}) {
    const {gameState,setGameState,score} = useContext(QuizContext);


    
    return (<>
        <section className="menu">
        <h2>Coding Quiz Challenge</h2>
        <p>Try to answer the following code-related questions within the time limit.</p>
            <p>Keep in mind that incorrect answers will penalize your score/time by ten seconds.</p>
            <button onClick={() => {
                setGameState("quiz");
                // setTime(time-1)
               setTime(50);
               setBeginCountDown(true)
            
            }}>Start</button>
        </section>
    </>)
}

export default MainMenu;