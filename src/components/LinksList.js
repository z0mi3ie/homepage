import React from "react"

import LinksItem from "./LinksItem"

class LinksList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.links.map(link => (
                    <LinksItem key={link.id} link={link} />
                ))}
            </ul>
        )

    }
}

export default LinksList