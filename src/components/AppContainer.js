import React from "react"

import Header from "./Header"
import NavBar from "./NavBar"
import Social from "./Social"

import Home from "../pages/Home"
import About from "../pages/About"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import bubble1 from "../images/dwarfgray.png"

class AppContainer extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="inner">
                    <Router>
                        { /* name and social media links */ }
                        <header>
                            <Header />
                        </header>

                        { /* nav bar */ }
                        <NavBar />
                        <Routes>
                            <Route path='/' element={<Home/>} />
                            <Route path='/about' element={<About/>} />
                        </Routes>

                        <div className = "footer">
                            <Social />
                        </div>
                    </Router>
                </div>

                { /* setup the bubbles */ }
                <div id="background-wrap">
                    <div className="bubble x1"><img className="" src={bubble1} alt="floating particle" /></div>
                    <div className="bubble x2"><img className="" src={bubble1} alt="floating particle" /></div>
                    <div className="bubble x3"><img className="" src={bubble1} alt="floating particle" /></div>
                    <div className="bubble x4"><img className="" src={bubble1} alt="floating particle" /></div>
                    <div className="bubble x5"><img className="" src={bubble1} alt="floating particle" /></div>
                    <div className="bubble x6"><img className="" src={bubble1} alt="floating particle" /></div>
                    <div className="bubble x7"><img className="" src={bubble1} alt="floating particle" /></div>
                    <div className="bubble x8"><img className="" src={bubble1} alt="floating particle" /></div>
                    <div className="bubble x9"><img className="" src={bubble1} alt="floating particle" /></div>
                    <div className="bubble x10"><img className="" src={bubble1} alt="floating particle" /></div>
                </div>
            </div>
        )
    }
}

export default AppContainer
