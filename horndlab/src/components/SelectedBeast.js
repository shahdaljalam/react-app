import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'

export class SelectedBeast extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>

                <Modal show={this.props.show}>

                    <Modal.Header>
                        <Modal.Title>{this.props.Title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <img variant="top" src={this.props.img} alt='' style={{ width: "100%" }} />
                        <p> {this.props.description} </p>

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

