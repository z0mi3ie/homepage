import React from "react"

class LinksItem extends React.Component {
    render() {

        if (this.props.link.priority === 1) {
            return (
                <li><a className="linklistitem-high animate__animated animate__swing" href={this.props.link.link}>{this.props.link.title}</a></li>
            )
        }

        return (
            <li><a className="linklistitem" href={this.props.link.link}>{this.props.link.title}</a></li>
        )
    }
}

export default LinksItem
