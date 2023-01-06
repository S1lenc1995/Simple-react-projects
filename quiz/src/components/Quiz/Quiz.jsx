import React from "react";
import { useState, useContext } from "react";
import { QuestionList } from "../../helpers/QuestionList.js";
import { QuizeContext } from "../../context/index.js";
import Timer from "../Timer/Timer.jsx";

import "./Quiz.scss"

const Quiz = ()=>{
    const {score, setScore,partOfGame, setPartOfGame, stopTimer} = useContext(QuizeContext)
    const[numberOfQuestion, setNunberOfQuestion] = useState(0)
    const[chosenAnswer, setChosenAnswer] = useState('')

    const changeNumberOfQuestion = ()=>{
        console.log(chosenAnswer)
        if(chosenAnswer === QuestionList[numberOfQuestion].answer){
            setScore(score+1)
        }
        setNunberOfQuestion(numberOfQuestion+1)
        console.log(score)
    }

    const finish =()=>{
        if(chosenAnswer === QuestionList[numberOfQuestion].answer){
            setScore(score+1)
        }
        stopTimer()
        setPartOfGame('finish') 
    }

    return(
        <div className="question-block">
            <Timer/>
            <h2 className="question">{QuestionList[numberOfQuestion].question}</h2>
            
                <div className="answer-block">
                    <button className="answer" onClick={()=> setChosenAnswer("A")}>{QuestionList[numberOfQuestion].optionA}</button>
                    <button className="answer" onClick={()=> setChosenAnswer("B")}>{QuestionList[numberOfQuestion].optionB}</button>
                    <button className="answer" onClick={()=> setChosenAnswer("C")}>{QuestionList[numberOfQuestion].optionC}</button>
                    <button className="answer" onClick={()=> setChosenAnswer("D")}>{QuestionList[numberOfQuestion].optionD}</button>
                    {numberOfQuestion == QuestionList.length-1 ?(<button className="btn-next-question" onClick={()=>finish()}>Finish</button>) : <button className="btn-next-question" onClick={()=>changeNumberOfQuestion()}>Next Question</button> }
                  
                </div>
        </div>    
    )
}

export default Quiz