import React from 'react'
import HornedBeast from './HornedBeast'
import Form from 'react-bootstrap/Form'


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hornNum: 0
        }
    }

    slc = (e) => {
        console.log(e.target.value)
        this.setState({
            hornNum: e.target.value
        })
    }

    render() {

        return (
            <div>

                <div>
                    <Form >
                        <Form.Group controlId="select">
                            <select
                                onChange={(e) => this.slc(e)}

                            >
                                <option>Select Number Of Horns</option>
                                <option value="0">All </option>
                                <option value="1">One horn</option>
                                <option value="2">Two horns</option>
                                <option value="3">Three horns </option>
                                <option value="100">More</option>
                            </select>
                        </Form.Group>
                    </Form>
                </div>

                {this.props.Data.map((beast) => {
                    return (
                        <div>
                            {(Number(this.state.hornNum) === Number(beast.horns) && (

                                <HornedBeast
                                    title={beast.title}
                                    img={beast.image_url}
                                    description={beast.description}
                                    handleModal={this.props.handleModal}
                                />
                            )) || (Number(this.state.hornNum) === 0 && (

                                <HornedBeast
                                    title={beast.title}
                                    img={beast.image_url}
                                    description={beast.description}
                                    handleShow={this.props.handleShow}
                                />

                            ))}

                        </div>
                    );
                })}
            </div>
        )
    }
}


export default Main;