import React from "react"
import ReactDOM from "react-dom"

import "animate.css"

// Component
import AppContainer from "./components/AppContainer"

// Stylesheet
import "./styles/App.css"

ReactDOM.render(
    <React.StrictMode>
        <AppContainer />
    </React.StrictMode>,
    document.getElementById("root")
)
