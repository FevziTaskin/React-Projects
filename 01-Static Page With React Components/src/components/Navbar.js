import React from "react"
export default function Navbar () {
    return (
        <nav>
            <img src={require('../images/React-logo.png')} className="nav--icon" alt="logo" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}


