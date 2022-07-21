import React,{useState,useContext} from "react";
import {QuizContext} from "../helpers/Contexts";
import {Questions} from "../helpers/Questions";

function Quiz({time,setTime}) {
    const {score,setScore,setGameState} = useContext(QuizContext);
    const[currQuestion,setCurrQuestion] = useState(0);
    const[optionChosen,setOptionChosen] = useState("");
    // const[showCorrectOrWrong,setShowCorrectOrWrong] =useState(null)

const nextQuestion = (opt,question) => {
if(question.answer == opt) {
    setScore(score+1);
    // setShowCorrectOrWrong("Correct");
    }
     if(currQuestion == Questions.length-1){
    // setShowCorrectOrWrong("");

        // alert(score)
        setTime(0);
        setGameState("endScreen")
    }
    setCurrQuestion(currQuestion + 1)

}


    return (<>
        <section className="quiz">
           <h3 className="question">{Questions[currQuestion].questionText}</h3>
           <div className="options">
           {Questions[currQuestion].options.map((opt,i) => <button key={i} onClick={() => {
               setOptionChosen(opt)
               nextQuestion(opt,Questions[currQuestion]);
               }}>{opt}</button>)}
           </div>
           
        </section>
    </>)
}

export default Quiz;