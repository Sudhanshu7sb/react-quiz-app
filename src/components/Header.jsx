import React from "react";

function Header({time,setTime,highScore,setHighScore,name,setName,gameState,setGameState}) {

    return (
        <>
            <header className="header">
            {gameState == "quiz" || gameState == "menu" ? <p className="disabled" readOnly>Highscores</p> : <p onClick={()=> {setGameState("highScore");setTime(0)}} className="highscores">Highscores</p>}
                

                <p>Timer : {time}s</p>
            </header>
        </>)
}

export default Header;