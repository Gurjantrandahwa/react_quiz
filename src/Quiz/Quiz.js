import React, {useState} from "react";
import "./quiz.scss";
import {questions} from "./questions";

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const next = () => {
      setCurrentQuestion(currentQuestion+1)
    }

    return <div className={"quiz-wrapper"}>
        <h1>Quiz</h1>
        <div className={"quiz-card"}>

            <h5>Score:5</h5>
            <p>{questions[currentQuestion].question}</p>
            {
                questions[currentQuestion].answerOptions.map((value, index) => {
                    return <div key={index}>
                        <button>{value.answerText}</button>

                    </div>

                })
            }
            <div>

                <button
                    onClick={next}
                >
                    Next
                </button>
                <button>Quit</button>
            </div>
        </div>


    </div>
}