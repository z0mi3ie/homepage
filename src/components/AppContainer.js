import React from "react"

import LinksList from "./LinksList"
import Header from "./Header"

import bubble1 from "../images/dwarfgray.png"

class AppContainer extends React.Component {
    state = {
        links: [
            {
                id: 1,
                title: "checkout some of my code on github",
                link: "https://github.com/z0mi3ie",
                image: "",
                priority: 0,
            },
            {
                id: 2,
                title: "connect with me on linkedin",
                link: "https://www.linkedin.com/in/kylevickers89/",
                image: "",
                priority: 0,
            },
            {
                id: 3,
                title: "browse my vimrc and configs",
                link: "https://github.com/z0mi3ie/vimrc",
                image: "",
                priority: 0,
            },
            {
                id: 4,
                title: "take a peak at my resume",
                link: "https://github.com/z0mi3ie/resume",
                image: "",
                priority: 0,
            },
            {
                id: 5,
                title: "see some of my hobbies on instagram",
                link: "https://www.instagram.com/mr_trashcans/",
                image: "",
                priority: 0,
            },
            {
                id: 6,
                title: "send me an email",
                link: "mailto:kylevickers@gmail.com",
                image: "",
                priority: 0,
            },
        ]
    }
    render() {
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <LinksList links={this.state.links} />
                </div>

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
