import {questions} from "./questions";

export default function QuizResult({correct, score}) {
    return <div>
        <h1>
           The correct answers are <span style={{color:"red"}}>{correct} </span>out of {questions.length}
        </h1>
        <h1>{score}</h1>
    </div>
}