import React, {useEffect, useState} from "react";

export default function ApiQuiz() {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        const url = `https://the-trivia-api.com/api/questions?limit=50`;

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
    return <div>
        <h1>A Quizz</h1>

        {
            questions.map( (value, index) => {
                return<div key={index}>
                    <h5>Q: {value.question}</h5>
                </div>
            })
        }
    </div>
}