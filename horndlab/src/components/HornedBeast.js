import React, { Component } from 'react'

export class HornedBeast extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>{this.props.title}</h2>
                    <img src={this.props.img} alt={this.props.title}></img>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default HornedBeast
