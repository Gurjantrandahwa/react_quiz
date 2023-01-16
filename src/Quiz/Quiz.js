import React, {useEffect, useState} from "react";
import "./quiz.scss";
import {questions} from "./questions";

export default function Quiz() {
    const [answers, setAnswers] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    return <div className={"quiz-wrapper"}>

        <h1>Quiz Game</h1>
        <img src={"https://justacoding.blog/wp-content/uploads/2021/11/quiz.jpg"}/>
        <div className={"quiz-card"}>


            {
                questions.map((value, index) => {
                    return <div key={index}
                                className={"questions"}>
                        <h2> Q: {value.question}</h2>
                        <div>
                            <button>{value.options[0]}</button>
                            <button>{value.options[1]}</button>
                            <button>{value.options[2]}</button>
                        </div>

                    </div>
                })

            }
          on

        </div>

    </div>
}