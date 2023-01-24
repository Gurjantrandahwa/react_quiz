import React, {useEffect} from "react";
import "./Result.scss";
import {useNavigate} from "react-router-dom";
import {Button, Typography} from "@mui/material";

export default function Result({score, name}) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!name) {
            navigate("/")
        }
    }, [name, navigate])

    return <div className={"results"}>
        <img src={"https://i.pinimg.com/564x/77/e3/35/77e3355a8679eb0686bea14c8e99c17c.jpg"} alt={""}/>
        <div>
            <p>
                Here Your final score for more questions click the button
                and select another category have fun!.
            </p>
            <Typography variant={"h4"}>
                Final Score: <span>{score}</span>
            </Typography>
            <Button
                fullWidth
                color={"success"}
                variant={"contained"}
                href={"/"}>
                Homepage
            </Button>
        </div>

    </div>
}