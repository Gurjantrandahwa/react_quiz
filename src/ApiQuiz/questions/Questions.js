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
        console.log(questions, "questions")
        setOptions(
            questions &&
            handleShuffle([
                questions[currQuestion]?.correct_answer,
                ...questions[currQuestion]?.incorrect_answers
            ])
        )
    }, [questions,currQuestion])
    console.log(options, "options")
    return <div>
        <h1>Welcome {name}</h1>
        <div>
            {questions ? (
                <div>
                    <div className={"score-wrapper"}>
                        <h3>{questions[currQuestion].category}</h3>
                        <h2>Score: {score}</h2>
                    </div>
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
                <CircularProgress variant={"indeterminate"} color={"secondary"}/>
            )
            }
        </div>

    </div>
}