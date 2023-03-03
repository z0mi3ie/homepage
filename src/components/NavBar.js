import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul className="nav-container">
                    <li className="nav-list-item">
                        <Link className="nav-link" to="/">home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link className="nav-link" to="/about">about</Link>
                    </li>
                    <li className="nav-list-item">
                        <a className="nav-link" href="https://github.com/z0mi3ie/resume/releases">resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
