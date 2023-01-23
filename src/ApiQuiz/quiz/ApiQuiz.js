import React, {useEffect, useState} from "react";
import "./ApiQuiz.scss";
import Header from "../Header/Header";
import Homepage from "../Homepage/Homepage";

export default function ApiQuiz() {
    const [questions, setQuestions] = useState([])


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
    //https://i.pinimg.com/564x/77/e3/35/77e3355a8679eb0686bea14c8e99c17c.jpg
    return <div className={"api-container"}>
        <Header/>
        <Homepage/>
    </div>
}