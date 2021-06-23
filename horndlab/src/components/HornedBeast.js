import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'


export class HornedBeast extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    vote = () => {
        let icre = this.state.count;
        this.setState({
            count: icre += 1,
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
                <Card style={{ width: '18rem' }} bg='info' text="white" border="dark">
                    <Card.Body>
                        <Card.Title>{this.props.title}  </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">❤️ {this.state.count}</Card.Subtitle>
                        <Card.Img src={this.props.img} alt='' onClick={() => {
                            this.vote();
                            this.props.handleModal(this.props.title, this.props.img, this.props.description);
                        }}>

                        </Card.Img>

                        <Card.Text>
                            {this.props.description}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        )

    }
}


export default HornedBeast;
