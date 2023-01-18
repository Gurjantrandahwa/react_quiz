import React, { useState} from "react";
import "./quiz.scss";
import {questions} from "./questions";
import QuizResult from "./QuizResult";

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [clicked, setClicked] = useState(false)

    const next = () => {
        setClicked(false)
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)


        } else {
            setShowResult(true)
        }


    }


    const handleAnswers = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 5)
            setCorrect(correct + 1)
        }
        setClicked(true)
    }
    // console.log(questions)
    return <div className={"quiz-wrapper"}>
        <h1>Quiz</h1>
        {
            showResult ? (
                    <QuizResult correct={correct} score={score}/>
                )
                : (
                    <div>

                        <div className={"quiz-card"}>
                            <h3>Score: {score} </h3>
                            <h4>
                                Question {currentQuestion + 1} of {questions.length}
                            </h4>
                            <p>{questions[currentQuestion].question}</p>
                            {
                                questions[currentQuestion].answerOptions.map((value, index) => {
                                    return <div key={index}>
                                        <button
                                            className={`button ${clicked && value.isCorrect ? "correct" : "button"}`}
                                            disabled={clicked}
                                            onClick={() => handleAnswers(value.isCorrect)}
                                        >
                                            {value.answerText}
                                        </button>

                                    </div>

                                })
                            }
                            <div className={"next-btn-wrapper"}>
                                <button
                                    disabled={!clicked}
                                    onClick={next}
                                >
                                    Next
                                </button>
                                <button

                                >
                                    Play Again
                                </button>
                            </div>
                        </div>
                    </div>
                )

        }


    </div>
}