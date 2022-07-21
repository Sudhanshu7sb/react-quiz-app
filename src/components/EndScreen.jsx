import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";


function EndScreen({ time, setTime, highScore, setHighScore, name, setName }) {
    const { score, setScore, setGameState } = useContext(QuizContext);

    const handleGoBack = () => {
        setScore(0);
        setGameState("menu");
        setTime(50);
    }

    const handleSubmit=(score,name,highScore,setHighScore) => {
        console.log(score,name,"hgs")
        // setName("");
        setHighScore([...highScore, { name, score }])
        setName("");
        setScore(0);
        setGameState("highScore")
    }
console.log(highScore,"hg")
    return (<>
        <section className="endscreen">
            <h2>All done !</h2>
            <p>Your final score is {score}</p>
            <label>Enter Initials : </label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
             <button onClick={() => {
                 
                 handleSubmit(score,name,highScore,setHighScore);
                 }}>Submit</button>
            <h5><button onClick={handleGoBack}>Restart</button></h5>
        </section>
    </>)
}

export default EndScreen;