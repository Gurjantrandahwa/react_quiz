import './App.scss';
import Quiz from "./Quiz/Quiz";
import React from "react";

function App() {
    return <div className={"app_container"}>
        <Quiz/>
    </div>
}

export default App;
// <p>{questions[currentQuestion].map((value, index) => {
//     return <div key={index}>
//
//     </div>
// })}</p>
{/*<p>{questions[currentQuestion].question}</p>*/}
{/*{*/}
{/*    questions[currentQuestion].answerOptions.map((value, index) => {*/}
{/*        return <div key={index}>*/}
{/*            <button>{value.answerText}</button>*/}

{/*        </div>*/}

{/*    })*/}
{/*}*/}