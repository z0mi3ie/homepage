import React from "react"

import LinksList from "../components/LinksList"

const getLinks = () => {

    let links = [
        {
            title: "the code for this website",
            link: "https://github.com/z0mi3ie/homepage",
            image: "",
            priority: 0,
        },
        {
            title: "take a peek at my over-engineered LaTeX resume and pipeline",
            link: "https://github.com/z0mi3ie/resume",
            image: "",
            priority: 0,
        },
        {
            title: "play my typing game in Go, running WebAssembly",
            link: "http://typerace.kylevickers.me:8080",
            image: "",
            priority: 0,
        },
        {
            title: "check out some of my other code on github",
            link: "https://github.com/z0mi3ie",
            image: "",
            priority: 0,
        },
        {
            title: "browse my vimrc and configs",
            link: "https://github.com/z0mi3ie/vimrc",
            image: "",
            priority: 0,
        },
        {
            title: "see some of my hobbies on instagram",
            link: "https://www.instagram.com/mr_trashcans/",
            image: "",
            priority: 0,
        },
        {
            title: "connect with me on linkedin",
            link: "https://www.linkedin.com/in/kylevickers89/",
            image: "",
            priority: 0,
        },
        {
            title: "send me an email",
            link: "mailto:kylevickers@gmail.com",
            image: "",
            priority: 0,
        },
    ]

    let cId = 0
    for (const link of links) {
        link.id = cId
        cId++
    }


    return links
}

const Home = () => {
    return (
        <LinksList links={getLinks()} />
    )
}

export default Home;
