import React, {useEffect, useState} from "react";
import "./ApiQuiz.scss";

export default function ApiQuiz() {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        const url = `https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setQuestions(data.results)

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    console.log(questions)

    return <div className={"question-wrapper"}>
        <h1>A Quizz</h1>
        <h2>Score: {score} </h2>
        {
            questions.map((value, index) => {
                return <div key={index}>
                    <h5>Q {index + 1}: {value.question}</h5>
                    <div>
                        {
                            value.incorrect_answers.map((correct, i) => {
                                return <button
                                    key={i}>
                                    {correct}
                                </button>
                            })
                        }
                        <button>  {value.correct_answer} </button>
                    </div>

                </div>
            })
        }
    </div>
}