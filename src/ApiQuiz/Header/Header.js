import React from "react";
import "./Header.scss"
import {Divider} from "@mui/material";
export default function Header() {
    return<div className={"header"}>
        <h1>
            Quiz Game
        </h1>
        <Divider color={"success"}/>

    </div>
}