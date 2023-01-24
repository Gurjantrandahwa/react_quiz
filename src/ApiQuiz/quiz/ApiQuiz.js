import React, { useState} from "react";
import "./ApiQuiz.scss";
import Header from "../Header/Header";
import Homepage from "../Homepage/Homepage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Questions from "../questions/Questions";
import Result from "../Result/Result";
import axios from "axios";

export default function ApiQuiz() {

    const [name, setName] = useState("")
    const [score, setScore] = useState(0)
    const [questions, setQuestions] = useState()

    const fetchQuestions = async (category = "", difficulty = "") => {
        const {data} = await axios.get(`https://opentdb.com/api.php?amount=10${
            category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
        console.log(data, "data")
        setQuestions(data.results)
    }

    return <div className={"api-container"}>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/"}
                       element={<Homepage
                           name={name}
                           setName={setName}
                           fetchQuestions={fetchQuestions}
                       />}/>
                <Route path={"/questions"}
                       element={<Questions
                           questions={questions}
                           score={score}
                           setScore={setScore}
                           setQuestions={setQuestions}
                           name={name}
                       />}/>
                <Route path={"/result"} element={<Result
                    score={score}
                    name={name}
                />}/>

            </Routes>

        </BrowserRouter>

    </div>
}