import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)

const Header = () => {
    return (
        <header>
            <div>
                <h1 className="logotext">Kyle Vickers</h1>
            </div>

            <div>
                <h2 className="medialinks">
                    <a className="iconlink" href="http://www.github.com/z0mi3ie"><FontAwesomeIcon className="fa-fw" icon={['fab', 'github']} /></a>
                    <a className="iconlink" href="https://www.instagram.com/mr_trashcans"><FontAwesomeIcon className="fa-fw" icon={['fab', 'instagram']} /></a>
                    <a className="iconlink" href="https://www.linkedin.com/in/kylevickers89/"><FontAwesomeIcon className="fa-fw" icon={['fab', 'linkedin']} /></a>
                </h2>
            </div>
        </header>
    )
}

export default Header
