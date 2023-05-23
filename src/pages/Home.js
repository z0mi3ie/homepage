import React from "react"

import LinksList from "../components/LinksList"

const getLinks = () => {

    let links = [
        {
            title: "blog",
            link: "https://z0mi3ie.github.io/blog",
            image: "",
            priority: 0,
        },
        {
            title: "resume",
            link: "https://github.com/z0mi3ie/resume",
            image: "",
            priority: 0,
        },
        {
            title: "typerace",
            link: "http://typerace.kylevickers.me:8080",
            image: "",
            priority: 0,
        },
        {
            title: "github",
            link: "https://github.com/z0mi3ie",
            image: "",
            priority: 0,
        },
        {
            title: "configs",
            link: "https://github.com/z0mi3ie/vimrc",
            image: "",
            priority: 0,
        },
        {
            title: "hobbies",
            link: "https://www.instagram.com/mr_trashcans/",
            image: "",
            priority: 0,
        },
        {
            title: "linkedin",
            link: "https://www.linkedin.com/in/kylevickers89/",
            image: "",
            priority: 0,
        },
        {
            title: "email",
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
