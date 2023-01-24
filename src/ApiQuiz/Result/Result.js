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
    }, [name])

    return <div className={"results"}>
        <Typography variant={"h4"}
        sx={{color:"olivedrab",
        textAlign:"center",
        margin:"70px"}}>
            Final Score: {score}
        </Typography>
        <Button
        color={"success"}
        variant={"contained"}
        href={"/"}>
            Homepage
        </Button>
    </div>
}