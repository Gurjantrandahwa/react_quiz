import React, {useState} from "react";
import "./QuestionMain.scss";
import {Alert, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function QuestionMain({
                                         currQuestion,
                                         options,

                                         setCurrQuestion,
                                         correct,
                                         score,
                                         questions,
                                         setScore
                                     }) {
    const [selected, setSelected] = useState()
    const navigate = useNavigate();
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
    const handleNext = () => {
        if (currQuestion > 8) {
            navigate("/result")
        } else if (selected) {
            setCurrQuestion(currQuestion + 1);
            setSelected();
        } else {
            setError("Please select at one Option")
        }
    }
    const handleQuit = () => {

    }
    return <div className={"mainQuestion"}>
        <h1>Question {currQuestion + 1}</h1>

        <h2>{questions[currQuestion].question}</h2>

        <div>
            {error && <Alert variant={"outlined"}>{error}</Alert>}
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
            <div
                className={"controls"}
            >
                <Button

                    fullWidth
                    variant={"contained"}
                    size={"large"}
                    color={"secondary"}
                    onClick={handleNext}
                >
                    Next Question
                </Button>
                <Button
                    fullWidth
                    color={"error"}
                    variant={"contained"}
                    size={"large"}
                    href={"/"}
                    onClick={handleQuit}
                >
                    Quit Game
                </Button>
            </div>

        </div>
    </div>
}