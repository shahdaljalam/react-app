import React, { Component } from 'react'

export class HornedBeast extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    vote = ()=> {
        this.setState({
            count : this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>{this.props.title}</h2>
                    <img onClick={this.vote} src={this.props.img} alt={this.props.title}></img>
                    <p>{this.props.description}</p>
                    <h3> ❤️ {this.state.count}</h3>
                </div>
            </div>
        )
    }
}

export default HornedBeast
