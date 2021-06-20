import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export class HornedBeast extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    vote = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            // <div>
            //     <div>
            //         <h2>{this.props.title}</h2>
            //         <img onClick={this.vote} src={this.props.img} alt={this.props.title}/>
            //         <p>{this.props.description}</p>
            //         <h3> ❤️ {this.state.count}</h3>
            //     </div>
            // </div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" onClick={() => {
                        this.vote();
                        this.props.handleModal(this.props);
                    }} src={this.props.img} alt={this.props.title} />
                        <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            ❤️ {this.state.count}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )

    }
}


export default HornedBeast
