import React from "react";
import "./Homepage.scss"
import {TextField} from "@mui/material";

export default function Homepage() {
    return <div className={"homepage"}


    >
        <div>
            <img src={"https://i.pinimg.com/564x/9e/32/cc/9e32cc1b30034dba05f2b3bd53ccc762.jpg"}
                 alt={""}
            />
        </div>
        <div className={"input-wrapper"}>
            <h2>Quiz Login</h2>

            <TextField
                margin={"normal"}
                label={"Enter Your Name"}
                variant={"outlined"}
            />
            <TextField
            select
            label={"Select Category"}
            variant={"outlined"}
            />
        </div>
    </div>
}