import './App.scss';
import Quiz from "./Quiz/Quiz";
import React from "react";
import ApiQuiz from "./ApiQuiz/quiz/ApiQuiz";

function App() {
    return <div className={"app_container"}>
        {/*<Quiz/>*/}
        <ApiQuiz/>
    </div>
}

export default App;
