import React from 'react'
import HornedBeast from './HornedBeast'
import Data from './Data.json'
class Main extends React.Component {
    render() {

        return (
            <div>


                {
                    Data.map((beast) => {
                        return (

                            <HornedBeast
                                title={beast.title}
                                img={beast.image_url}
                                description={beast.description}
                            />
                        )
                    })
                }

            </div>
        )
    }
}

export default Main;