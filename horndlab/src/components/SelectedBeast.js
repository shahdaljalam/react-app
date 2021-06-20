import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export class SelectedBeast extends Component {
    render() {
        return (
            <div>

                <Modal show={this.props.show}>

                    <Modal.Header>
                        <Modal.Title>{this.props.Title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={this.props.img} alt={this.props.title} />
                            <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Text>
                                    {this.props.desc}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleModal} >Close</Button>
                    </Modal.Footer>

                </Modal>

            </div >
        )
    }
}

export default SelectedBeast
