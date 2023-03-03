import React from "react"

class LinksItem extends React.Component {
    render() {
        return (
            <li><a className="linklistitem" href={this.props.link.link}>{this.props.link.title}</a></li>
        )
    }
}

export default LinksItem
