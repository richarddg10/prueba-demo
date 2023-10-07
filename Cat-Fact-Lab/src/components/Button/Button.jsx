import React from "react";
import './button.css'

export function Button({onClick}) {
    return(
        <button onClick={onClick}>New Cat Fact</button>
    )
}