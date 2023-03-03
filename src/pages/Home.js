import React from "react"

import LinksList from "../components/LinksList"

const getLinks = () => {
    return [
        {
            id: 1,
            title: "check out some of my code on github",
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
            title: "take a peek at my over-engineered LaTeX resume and pipeline",
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

const Home = () => {
    return (
        <LinksList links={getLinks()} />
    )
}

export default Home;
