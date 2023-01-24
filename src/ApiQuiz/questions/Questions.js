import React, {useEffect, useState} from "react";
import "./questions.scss"
import {CircularProgress} from "@mui/material";
import QuestionMain from "../QuestionsMain/QuestionMain";

export default function Questions({name, setScore, score, questions}) {

    const [currQuestion, setCurrQuestion] = useState(0)
    const [options, setOptions] = useState()
    const handleShuffle = (option) => {
        return option.sort(() => Math.random() - 0.5);
    }
    useEffect(() => {
        setOptions(
            questions &&
            handleShuffle([
                questions[currQuestion]?.correct_answer,
                ...questions[currQuestion]?.incorrect_answers
            ])
        )
    }, [questions, currQuestion])
    return <div className={"question-container"}>
        <div className={"score-wrapper"}>
            <h1>Welcome :
                <span className={"name"}> {name}</span>
            </h1>
            <h1>Score :
                <span className={"name"}> {score}</span>
            </h1>
        </div>
        <div>
            {questions ? (
                <div>

                    <QuestionMain
                        currQuestion={currQuestion}
                        setCurrQuestion={setCurrQuestion}
                        options={options}
                        questions={questions}
                        setScore={setScore}
                        score={score}
                        correct={questions[currQuestion]?.correct_answer}
                    />
                </div>
            ) : (
                <CircularProgress
                    size={80}
                    className={"loader"}
                />
            )
            }
        </div>

    </div>
}