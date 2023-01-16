import React, {useEffect, useState} from "react";
import "./quiz.scss";
// import {questions} from "./questions";

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState([])
    const next = () => {
        setCurrentQuestion(currentQuestion + 1)
    }
    useEffect(() => {
        const url = "https://the-trivia-api.com/api/questions";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data)
                setQuestions(data)

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    console.log(questions)
    return <div className={"quiz-wrapper"}>
        <h1>Quiz</h1>
        <div className={"quiz-card"}>
            {/*{questions[currentQuestion].question}*/}
            {questions.map((value, index) => {
                return <div key={index}>
                    <h5>Q: {value.question}</h5>
                    <h6>{value.category}</h6>
                    {/*<div>*/}
                    {/*    {*/}
                    {/*        value.incorrectAnswers.map((ans, i) => {*/}
                    {/*            return <button key={i}>{ans}</button>*/}
                    {/*        })*/}
                    {/*    }*/}
                    {/*</div>*/}
                    {/*<p>{value.correctAnswer}</p>*/}
                </div>
            })}

            <div>
                <button
                    style={{backgroundColor: "violet", color: "black", fontWeight: "600"}}
                    onClick={next}
                >
                    Next
                </button>
                <button
                    style={{backgroundColor: "violet", color: "black", fontWeight: "600"}}
                >Quit
                </button>
            </div>
        </div>


    </div>
}