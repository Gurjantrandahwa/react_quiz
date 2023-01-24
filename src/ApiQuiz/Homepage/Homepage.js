import React, {useState} from "react";
import "./Homepage.scss"
import {Alert, Button, MenuItem, TextField} from "@mui/material";
import categories from "../Data/categories"
import { useNavigate } from "react-router-dom";
export default function Homepage({name, setName, fetchQuestions}) {
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        } else {
            setError(false)
            fetchQuestions(category, difficulty)
            navigate("/questions")
        }
    }

    return <div className={"homepage"}>
        <div>
            <img src={"https://i.pinimg.com/564x/9e/32/cc/9e32cc1b30034dba05f2b3bd53ccc762.jpg"}
                 alt={""}
            />
        </div>
        <div className={"input-wrapper"}>
            <h2>Quiz Login</h2>

            {error && <Alert
                sx={{marginBottom:"10px"}}
                color={"error"} variant={"outlined"}>
                Please fill the details
            </Alert>}
            <TextField
                sx={{marginBottom: "20px"}}
                label={"Enter Your Name"}
                variant={"outlined"}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                sx={{marginBottom: "20px"}}
                select
                label={"Select Category"}
                variant={"outlined"}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >

                {categories.map((cate) => {

                    return <MenuItem key={cate.category} value={cate.value}>
                        {cate.category}
                    </MenuItem>
                })}

            </TextField>
            <TextField
                sx={{marginBottom: "20px"}}
                select
                label={"Select Difficulty"}
                variant={"outlined"}
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
            >
                <MenuItem key={"Easy"} value={"easy"}>
                    Easy
                </MenuItem>
                <MenuItem key={"Medium"} value={"medium"}>
                    Medium
                </MenuItem>
                <MenuItem key={"Hard"} value={"hard"}>
                    Hard
                </MenuItem>
            </TextField>
            <Button
                size={"large"}
                color={"success"}
                variant={"contained"}
                onClick={handleSubmit}
            >
                Start Quiz
            </Button>
        </div>
    </div>
}