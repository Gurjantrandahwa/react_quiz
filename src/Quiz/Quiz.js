import React, {useState} from "react";
import "./quiz.scss";
import {questions} from "../questions";
export default function Quiz() {
const [question,setQuestion]=useState(questions)
    return <div className={"quiz-wrapper"}>

        <h1>Quiz Game</h1>
        <div className={"quiz-card"}>
            {question.map((value,index)=>{
                return<div key={index} className={"questions"}>
                   <h2> Q: {value.question}</h2>
                   <button>{value.options[0]}</button>
                   <button>{value.options[1]}</button>
                   <button>{value.options[2]}</button>
                </div>
            })}
        </div>
    </div>
}