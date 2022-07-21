import React from "react";

function HighScores({setGameState,setHighScore,highScore,setTime}){
    return <>
    <section className="highscore-page">
    <h3>HighScores</h3>
    <ul>
    {highScore.map((scr,i) => <p key={i}>{i+1}.{scr.name} : {scr.score}</p> )}
    </ul>
    <p><button onClick={() => {setGameState("menu");setTime(0)}}>Go Back</button><button onClick={() => setHighScore([])}>Clear Highscores</button></p>
    </section>
    </>
}

export default HighScores;