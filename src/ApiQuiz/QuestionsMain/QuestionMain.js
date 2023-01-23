import React, {useState} from "react";
import "./QuestionMain.scss";
import {Alert, Button} from "@mui/material";

export default function QuestionMain({
                                         currQuestion,
                                         options,
                                         setQuestions,
                                         setCurrQuestion,
                                         correct,
                                         score,
                                         questions,
                                         setScore
                                     }) {
    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)
    const handleSelect = (value) => {
        if (selected === value && selected === correct) {
            return "select"
        } else if (selected === value && selected !== correct) {
            return "wrong"
        } else if (value === correct) {
            return "select"
        }
    }
    const handleCheck = (value) => {
        setSelected(value)
        if (value === correct) {
            setScore(score + 5);
            setError(false)
        }

    }
    return <div className={"mainQuestion"}>
        <h1>Question {currQuestion + 1}</h1>

        <h2>{questions[currQuestion].question}</h2>

        <div>
            {error && <Alert>{error}</Alert>}
            <div className={"option-wrapper"}>
                {
                    options && options.map((value) => {
                        return <Button
                            fullWidth
                            onClick={() => handleCheck(value)}
                            key={value}
                            variant={"outlined"}
                            className={`singleOption ${selected && handleSelect(value)}`}
                            disabled={selected}
                        >
                            {value}
                        </Button>
                    })
                }
            </div>

        </div>
    </div>
}