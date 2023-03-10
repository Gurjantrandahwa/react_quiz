import React, {useState} from "react";
import "./Homepage.scss"
import {Alert, Button, MenuItem, TextField, Typography} from "@mui/material";
import categories from "../Data/categories"
import {useNavigate} from "react-router-dom";


export default function Homepage({name, setName, fetchQuestions}) {
    const navigate = useNavigate();
    const [difficulty, setDifficulty] = useState("")
    const [category, setCategory] = useState("")
    const [error, setError] = useState(false)
    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);

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
            <h2>Welcome to Quiz Game</h2>
            <Typography variant={"caption"} color={"gray"}>
                Here you can choose your favorite category and start the game.
            </Typography>
            {error &&
            <Alert
                className={"alert-details"}
                variant={"outlined"}
                color={"error"}>
                Please fill all the details
            </Alert>
            }
            <form>
                <TextField
                    required
                    label={"Enter Your Name"}
                    variant={"outlined"}
                    onChange={(e) =>
                        setName(e.target.value)}
                />

                <TextField
                    required
                    select
                    label={"Select Category"}
                    variant={"outlined"}
                    value={category}
                    onChange={(e) =>
                        setCategory(e.target.value)}
                >

                    {categories.map((cate) => {
                        return <MenuItem key={cate.category} value={cate.value}>
                            {cate.category}
                        </MenuItem>
                    })}

                </TextField>

                <TextField
                    required
                    select
                    label={"Select Difficulty"}
                    variant={"outlined"}
                    value={difficulty}
                    onChange={(e) =>
                        setDifficulty(e.target.value)}

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
            </form>


        </div>
    </div>
}