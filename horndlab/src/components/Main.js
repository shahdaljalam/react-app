import React from 'react'
import HornedBeast from './HornedBeast'
class Main extends React.Component {
    render() {

        return (
            <div>


                {
                    this.props.Data.map((beast) => {
                        return (

                            <HornedBeast
                                title={beast.title}
                                img={beast.image_url}
                                description={beast.description}
                                handleModal={this.props.handleModal}
                            />
                        )
                    })
                }

            </div>
        )
    }
}

export default Main;